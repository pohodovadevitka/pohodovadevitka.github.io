"use strict"

function renderOption (value, name) {
  const e = document.createElement("option")
  const t = document.createTextNode(name)
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
  const e = document.createElement("tr")
  e.style.display = 'none'
  const time = this.time === "DNF"
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

$(document).ready(() => {
  const $category = document.getElementById("category")
  const $gender = document.getElementById("gender")
  const $race = document.getElementById("race")
  const $femaleCategories = document.getElementById("female-categories")
  const $maleCategories = document.getElementById("male-categories")
  const $results = document.getElementById("results")
  const rawData = JSON.parse(document.getElementById("data").innerHTML)

  rawData.races.forEach(x => new Race(x, $race))
  rawData.genders.forEach(x => new Gender(x, $gender))

  const categories = rawData.categories.map(x =>
    x[1] === "M"
      ? new Category(x, $maleCategories)
      : new Category(x, $femaleCategories)
  ).reduce((a, x) => { a[x.id] = x; return a }, {})
  const results = rawData.results.map(x => {
    const y = new Result(x, $results)
    y.gender = categories[y.category].gender
    y.race = categories[y.category].race
    return y
  })

  const applyFilter = () => {
    const race = $race.value
    const gender = $gender.value
    const category = $category.value

    Object.values(categories)
      .forEach(category =>
        (race === "" || category.race === race) &&
        (gender === "" || category.gender === gender)
          ? category.show()
          : category.hide()
      )

    results.forEach(result =>
      (race === "" || result.race === race) &&
      (gender === "" || result.gender === gender) &&
      (category === "" || result.category === category)
        ? result.show()
        : result.hide()
    )
  }

  $($race).on("change", () => {
    const race = $race.value
    const category = categories[$category.value]

    if (category && category.race !== race) {
      $category.value = ""
    }

    applyFilter()
  })
  $($gender).on("change", () => {
    const gender = $gender.value
    const category = categories[$category.value]

    if (category && category.gender !== gender) {
      $category.value = ""
    }

    applyFilter()
  })
  $($category).on("change", () => {
    applyFilter()
  })

  applyFilter()
})