"use strict"

function renderOption (value, name) {
  var e = document.createElement("option")
  var t = document.createTextNode(name)
  e.appendChild(t)
  e.value = value
  return e
}
function Race (x, parent) {
  this.id = x[0]
  this.name = x[1]
  this._element = renderOption(this.id, this.name)
  parent.appendChild(this._element)
}

function Gender (x, parent) {
  this.id = x[0]
  this.name = x[1]
  this._element = renderOption(this.id, this.name)
  parent.appendChild(this._element)
}

function Category (x, parent) {
  this.id = x[0]
  this.gender = x[1]
  this.race = x[2]
  this.name = x[3]
  this.yearFrom = x[4]
  this.yearTo = x[5]
  this._element = renderOption(this.id, this.name)
  parent.appendChild(this._element)
}
Category.prototype.show = function () {
  this._element.style.display = ''
}
Category.prototype.hide = function () {
  this._element.style.display = 'none'
}

function Result (x, parent) {
  this.positionAbs = x[0]
  this.category = x[1]
  this.positionCat = x[2]
  this.number = x[3]
  this.name = x[4]
  this.year = x[5]
  this.club = x[6]
  this.time = x[7]
  this.race = null
  this.gender = null
  this._element = this._render()
  parent.appendChild(this._element)
}
Result.prototype.show = function () {
  this._element.style.display = ''
}
Result.prototype.hide = function () {
  this._element.style.display = 'none'
}
Result.prototype._render = function () {
  var e = document.createElement("tr")
  e.style.display = 'none'
  var time = this.time === "DNF"
    ? `<abbr title="nedokončil(a) závod">DNF</abbr>`
    : `<b>${this.time}</b>`
  e.innerHTML = `
    <td>${this.positionAbs || ""}</td>
    <td>${this.category}</td>
    <td>${this.positionCat || ""}</td>
    <td>${this.number}</td>
    <td class="name">
      <b>${this.name}</b> (${this.year}) ${this.club}
    </td>
    <td class="number">${time}</td>
  `
  return e
}

function addEvent(event, element, callback) {
  if (element.addEventListener) {
    element.addEventListener(event, callback, false)
  } else if (element.attachEvent) {
    element.attachEvent("on" + event, callback)
  } else {
    element["on" + event] = callback
  }
}

addEvent("load", window, function () {
  var $category = document.getElementById("category")
  var $gender = document.getElementById("gender")
  var $race = document.getElementById("race")
  var $femaleCategories = document.getElementById("female-categories")
  var $maleCategories = document.getElementById("male-categories")
  var $results = document.getElementById("results")
  var rawData = JSON.parse(document.getElementById("data").innerHTML)

  rawData.races.forEach(function (x) { new Race(x, $race) })
  rawData.genders.forEach(function (x) { new Gender(x, $gender) })

  var categories = rawData.categories.map(function (x) {
    return x[1] === "M"
      ? new Category(x, $maleCategories)
      : new Category(x, $femaleCategories)
  })
  .reduce(function (a, x) {
    a[x.id] = x
    return a
  }, {})

  var results = rawData.results.map(function (x) {
    var y = new Result(x, $results)
    y.gender = categories[y.category].gender
    y.race = categories[y.category].race
    return y
  })

  function applyFilter () {
    var race = $race.value
    var gender = $gender.value
    var category = $category.value

    Object.keys(categories)
      .map(function (id) { return categories[id] })
      .forEach(function (category) {
        (race === "" || category.race === race) &&
        (gender === "" || category.gender === gender)
          ? category.show()
          : category.hide()
      })

    results.forEach(function (result) {
      (race === "" || result.race === race) &&
      (gender === "" || result.gender === gender) &&
      (category === "" || result.category === category)
        ? result.show()
        : result.hide()
    })
  }

  addEvent("change", $race, function () {
    var race = $race.value
    var category = categories[$category.value]

    if (category && category.race !== race) {
      $category.value = ""
    }

    applyFilter()
  })

  addEvent("change", $gender, function () {
    var gender = $gender.value
    var category = categories[$category.value]

    if (category && category.gender !== gender) {
      $category.value = ""
    }

    applyFilter()
  })

  addEvent("change", $category, function () {
    applyFilter()
  })

  applyFilter()
})