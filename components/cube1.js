import * as  THREE from 'three';

const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

const cube1 = new THREE.Mesh( boxGeometry, boxMaterial );
cube1.position.set(0,.5,-2)



export  {cube1} ;

