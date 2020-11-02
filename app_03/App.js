/**
 * Ce programme permet de creer un axe
 */
// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//creation du rendu 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(scene.position);

/**
 * un objet = geometry + material
 */


//ajout de l'objet à la scene
var axisHelper = new THREE.AxisHelper(5);
scene.add(axisHelper);

//cette fonction s'execute tout le temps comme void draw
var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();