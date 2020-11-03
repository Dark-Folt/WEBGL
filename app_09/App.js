/**
 * Ce programme permet de creer un box illuminé 
 */
const WW = window.innerWidth;
const WH = window.innerHeight;

// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, WW / WH, 0.1, 1000);
camera.position.set(25, 25, 25);
camera.lookAt(scene.position);

//creation du rendu 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WW, WH);
document.body.appendChild(renderer.domElement);


/**
 * un objet = geometry + material
 */


//creation de l'axe
var axesHelper = new THREE.AxesHelper(15);
scene.add(axesHelper);

//ajout de l'objet à la scene
var boxGeo = new THREE.BoxGeometry(10, 10, 10);
var boxMat = new THREE.MeshPhongMaterial({ color: 0xfd00dd });
var box = new THREE.Mesh(boxGeo, boxMat);
scene.add(box);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(30, 30, 30);
scene.add(pointLight);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-330, 0, 0);
scene.add(spotLight);

//cette fonction s'execute tout le temps comme void draw
var render = function() {
    requestAnimationFrame(render);
    box.rotation.y += 0.03 * Math.PI / 2;

    renderer.render(scene, camera);
};

render();