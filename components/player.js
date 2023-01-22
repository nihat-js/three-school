import * as  THREE from 'three';
const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const player = new THREE.Mesh( boxGeometry, boxMaterial );
player.position.set(0,.5,-2)



player.userData = {
  throwReloadDuration : 1000,
  nextThrowTime : Date.now() ,
  moveDegree : Math.PI/360*50,
}


export  {player  } ;

      