import { scene } from "../app"
import { player } from "../components/player"
import {arrow , Arrow } from '../components/arrow'
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
    player.position.x -= .1
  }
  if ( downkeys.indexOf("d") > -1 ){
    player.position.x += +.1
  }
  if ( downkeys.indexOf("w") > -1 ){
    player.position.z -= .1
  }
  if ( downkeys.indexOf("s") > -1 ){
    player.position.z += .1
  }
  if (downkeys.indexOf(" ") > -1){
     new Arrow()
  }

}

setInterval(keyController, 1000 / 60)


export const keyboard = {}