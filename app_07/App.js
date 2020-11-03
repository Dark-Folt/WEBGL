/**
 * Ce programme permet de creer une sphere illuminé 
 */
const WW = window.innerWidth;
const WH = window.innerHeight;

// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, WW / WH, 0.1, 1000);

//creation du rendu 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WW, WH);
document.body.appendChild(renderer.domElement);

camera.position.set(5, 5, 5);
camera.lookAt(scene.position);
/**
 * un objet = geometry + material
 */


//creation de l'axe

//creation d'une sphere
var sphGeo = new THREE.SphereGeometry(2, 30, 30);
var sphMat = new THREE.MeshPhongMaterial({ color: 0xff00ff });
var sphere = new THREE.Mesh(sphGeo, sphMat);

//creation de la lumiere ambiante
var lightAmb = new THREE.AmbientLight(0xffffff, 0.1);

// light
var light = new THREE.PointLight(0xffffff, 3);
camera.add(light);

//ajout de l'objet à la scene
scene.add(sphere);
scene.add(camera);
scene.add(lightAmb);



//cette fonction s'execute tout le temps comme void draw
var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();