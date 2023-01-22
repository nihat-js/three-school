import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

const planeGeometry = new THREE.PlaneGeometry(100,100)
const planeMaterial = new THREE.MeshBasicMaterial({color : 0x8de701 , map : textureLoader.load('textures/plane.svg',() => console.log('loaded') ) })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -  Math.PI / 2;

export  {plane} 