import * as THREE from 'three';


const Arrow = {
  speed  : 2 ,
  start  (speed = this.speed){
    setInterval(() => {
      arrow.geometry.position.x += speed
      arrow.geometry.position.x += speed;

    },1000/60 );
  }
}

const arrowGeometry = new THREE.BoxGeometry( .2 , .2, .5 );
const arrowMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );

const arrow = new THREE.Mesh( arrowGeometry, arrowMaterial );

export  { arrow , Arrow } 