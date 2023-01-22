import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { cube1 } from './components/cube1';
import { plane } from './components/plane';
import {  arrow } from './components/arrow';

import { keyboard } from './controllers/keyboard';

const renderer = new  THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100) 

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87ceeb)
scene.add(cube1,plane,arrow)


const controls = new OrbitControls( camera, renderer.domElement );
controls.update();



function render(){
  camera.position.set(cube1.position.x   , 10   , cube1.position.z+10 )
  camera.rotation.x =-Math.PI/4
  requestAnimationFrame(render)
  renderer.render(scene,camera)
}

render()