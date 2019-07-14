$(document).ready(() => {
  // load sponsors background images
  const elements = document.querySelectorAll('#menu-sponsors a[data-background-image]')

  for (let i = 0; i < elements.length; i++) {
    const src = elements[i].getAttribute("data-background-image");
    const title = elements[i].getAttribute("title");
    if (src) {
      elements[i].innerHTML = `<picture>
        <source srcset="../images/sponsors/${src.replace(/\.\w+$/, '.webp')}" type="image/webp">
        <img src="../images/sponsors/${src}" alt="${title}">
      <picture>`
    }
  }
})
