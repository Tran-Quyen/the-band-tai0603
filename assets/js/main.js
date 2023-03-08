function handleColorChange() {
  var link = document.querySelector('.copyright > a')
  var angles = 0

  setInterval(() => {
    link.style.filter = `hue-rotate(${angles}deg)`
    angles += 20
    if (angles > 360) angles = 0
  }, 500)
}

handleColorChange()
