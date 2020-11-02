// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//creation du rendu
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//creation d'un objet
/**
 * un objet = geometry + material
 */

// 1-creation de la forme geometrique de la sphère
var sphGeo = new THREE.SphereGeometry(1, 30, 30);

// 2-creation du materiau pour la sphère avec un objet color
var sphMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// 3-creation de l'objet
var sphere = new THREE.Mesh(sphGeo, sphMat);

//ajout de l'objet à la scene
scene.add(sphere);


//cette fonction s'execute tout le temps comme void draw
camera.position.z = 5;
var sphGeo = new THREE.SphereGeometry(1, 30, 30);
var sphMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var sph = new THREE.Mesh(sphGeo, sphMat);
scene.add(sph);

var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();