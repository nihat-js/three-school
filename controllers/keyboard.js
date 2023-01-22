let downkeys = []



window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)



function onKeyDown(e) {
  const key = e.key.toLowerCase()
  console.log(key)
  downkeys.findIndex(x => x == key ) == -1 ? downkeys.push(key) : ""
}

function onKeyUp(e) {
  const key = e.key.toLowerCase()
  downkeys = downkeys.filter(x => x !== key)
}


function keyController() {
  if (downkeys.length == 0 ){
    return false
  }

  if ( downkeys.contains("") )

}

setInterval(keyController, 1000 / 1)


export const keyboard = {}