import { cube1 } from "../components/cube1"
import {arrow } from '../components/arrow'
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

  if ( downkeys.indexOf("a") > -1 ){
    cube1.position.x -= .1
  }
  if ( downkeys.indexOf("d") > -1 ){
    cube1.position.x += +.1
  }
  if ( downkeys.indexOf("w") > -1 ){
    cube1.position.z -= .1
  }
  if ( downkeys.indexOf("s") > -1 ){
    cube1.position.z += .1
  }
  if (downkeys.indexOf("space") > -1){

  }

}

setInterval(keyController, 1000 / 60)


export const keyboard = {}