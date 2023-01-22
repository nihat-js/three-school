import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { player } from './components/player';
import { plane } from './components/plane';
import {  arrow } from './components/arrow';

import { keyboard } from './controllers/keyboard';

const renderer = new  THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100) 

export const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87ceeb)
scene.add(player,plane,arrow)


const controls = new OrbitControls( camera, renderer.domElement );
controls.update();



function render(){
  camera.position.set(player.position.x   , 12  , player.position.z+12 )
  camera.rotation.x =-Math.PI/4
  requestAnimationFrame(render)
  renderer.render(scene,camera)
}

render()