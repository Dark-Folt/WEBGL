// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//creation du rendu 

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//ajout du rendu dans la page html
document.body.appendChild(renderer.domElement);

/**
 * un objet = geometry + material
 */

camera.position.z = 5;

// 1-creation de la forme geometrique de la sphère
var boxGeo = new THREE.BoxGeometry(1, 1, 1);

// 2-creation du materiau pour la sphère avec un objet color
var boxMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 3-creation de l'objet
var boxObj = new THREE.Mesh(boxGeo, boxMat);

//ajout de l'objet à la scene
scene.add(boxObj);


//cette fonction s'execute tout le temps comme void draw
var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

render();