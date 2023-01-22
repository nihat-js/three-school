import * as THREE from 'three';
import { player } from './player';
import { scene } from '../app';

export class Arrow {
  constructor() {
    const arrowGeometry = new THREE.BoxGeometry(.2, .2, .5);
    const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 , map : new THREE.TextureLoader().load('./textures/bullet.svg')        });
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    let speed =  2 / 60 
    let duration = 3 * 60
    let count = 1
    console.log("i don't allow ",player.userData.nextThrowTime);1
    if (player.userData.nextThrowTime > Date.now()) {
      return false
    } else {
      arrow.position.set(player.position.x, player.position.y, player.position.z)
      scene.add(arrow);
      console.log('why')
      player.userData.nextThrowTime = Date.now() + player.userData.throwReloadDuration 
    }
    const timerId = setInterval(() => {
      if (count === duration) {
        player.userData.nextThrowTime = Date.now()
        scene.remove(arrow)
        clearInterval(timerId)
        destructArrow()
      } else {
        if (player.userData.moveDegree > 0  && player.userData.moveDegree < 90) {
          arrow.position.x -= speed * Math.sin(player.userData.moveDegree) ;
          arrow.position.z -= speed * Math.cos(player.userData.moveDegree) 
        }
        count++
      }
    }, 1000 / 60);
    return arrow
  }

}


function destructArrow(arrow) {
  arrow = null
}



