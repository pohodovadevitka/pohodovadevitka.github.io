$(document).ready(() => {
  // load sponsors background images
  const elements = document.querySelectorAll('#menu-sponsors a[data-background-image]')

  for (let i = 0; i < elements.length; i++) {
    const src = elements[i].getAttribute("data-background-image");
    if (src) {
      elements[i].style.backgroundImage = "url('../images/sponsors/" + src + "')"
    }
  }
})
