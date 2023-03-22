// Handle change color copyright
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

// Handle show menu when click
function handleShowMenu() {
  var toggleBtnList = document.querySelectorAll('[data-toggle]')

  toggleBtnList.forEach(function (btn) {
    btn.onclick = function () {
      var menuId = btn.dataset.toggle
      var menu = document.querySelector(`[data-menu="${menuId}"]`)

      if (!menu.classList.contains('active')) menu.classList.add('active')
      else {
        var menuChildren = menu.querySelectorAll('[data-menu]')

        if (menuChildren) {
          menuChildren.forEach(function (menu) {
            menu.classList.remove('active')
          })
        }

        menu.classList.remove('active')
      }
    }
  })

  console.log(toggleBtnList)
}

handleShowMenu()

// Handle hidden menu when click hash
function handleHideMenu() {
  var btnList = document.querySelectorAll(
    '[data-menu="nav_list"] li:not([data-toggle]) a'
  )

  btnList.forEach(function (btn) {
    btn.onclick = function () {
      var navList = document.querySelector('[data-menu="nav_list"]')

      navList.classList.remove('active')
    }
  })
}

handleHideMenu()
