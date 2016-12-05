'use strict';

var renderer;
var width;
var height;
function initThree()
{
    width = document.getElemntById("Canvas3d").clientWidth;
    height = document.getElemntById("Canvas3d").clientHeight;
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(width,height);
    document.getElemntById("Canvas3d").appendChild(renderer.domElement);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(50, width/height, 1,1000);
    camera.position x = 100;
    camera.position y = 20;
    camera position z = 50;

    camera.up x = 0;
    camera.up y = 1;
    camera.up z = 0;
    camera.lookat(x:0, y:0, z:0);
}

var scene;
function initScene() {
	scene = new THREE.Scene();
}

var light; 
	function initLight() {
		light = new THREE.DirectionalLight(0xFFFFFF, 1.0,0);
		light.position.set (100,100,200);
		scene.add(light);
}

var cube;
function initObject() {
    //must include material 
    cube = THREE.Mesh(new THREE.CubeGeometry(50,50,50)), new THREE.MeshLambertMaterial({color:0xf00000}));
    //add object to scene
    scene.add(cube); 
    //add a posiition
    cube.position.set(0,0,0);
}

function threeStart() {
    initThree();
    initCamera();
    initScene(); 
    initLight(); 
    initObject();
    renderer.clear();
    renderer.render(scene,camera); 
}