/**
 * Ce programme permet de creer un axe
 * et un cube vert
 * la sphere est au dessus du cube
 */
// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//creation du rendu 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



/**
 * un objet = geometry + material
 */


//creation des objets que l'on va utiliser
var axisHelper = new THREE.AxisHelper(5);

/**
 * Creation d'un cube
 */
var cubeGeo = new THREE.BoxGeometry(1);
var cubeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var cubeObj = new THREE.Mesh(cubeGeo, cubeMat);

/**
 * Creation d'une sphere
 */
var sphGeo = new THREE.SphereGeometry(1, 30, 30);
var sphMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var sphObj = new THREE.Mesh(sphGeo, sphMat);




/**
 * Gestion des postions des objets
 */

cubeObj.position.set(0, 0, 0);
sphObj.position.set(0, 1, 0);



//vue de notre objet
camera.position.set(5, 5, 5);
camera.lookAt(scene.position);


//ajout des objets dans la scene
scene.add(axisHelper);
scene.add(cubeObj);
scene.add(sphObj);


//cette fonction s'execute tout le temps comme void draw
var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();