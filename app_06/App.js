/**
 * Ce programme permet de creer un plan 
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
var axesHelper = new THREE.AxesHelper(5);

//ajout de l'objet à la scene
var planeGeo = new THREE.PlaneGeometry(7, 7, 7);
var planeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
var plane = new THREE.Mesh(planeGeo, planeMat);

scene.add(plane);
scene.add(axesHelper);

//cette fonction s'execute tout le temps comme void draw
var render = function() {
    requestAnimationFrame(render);

    //Attention au signe de votre angle de rotation, car le "dessous" d'un plan est invisible.
    plane.rotation.x = -1 * Math.PI / 2;
    renderer.render(scene, camera);
};

render();