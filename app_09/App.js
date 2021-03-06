/**
 * Ce programme permet de creer un box illuminé 
 */
const WW = window.innerWidth;
const WH = window.innerHeight;

// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, WW / WH, 0.1, 1000);
camera.position.set(25, 10, 25);
camera.lookAt(scene.position);


//creation du rendu 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WW, WH);
renderer.setClearColor(0xffffff, 0.8);
document.body.appendChild(renderer.domElement);


/**
 * un objet = geometry + material
 */


//creation de l'axe
var axesHelper = new THREE.AxesHelper(30);

//creation d'un plan
var planeGeo = new THREE.PlaneGeometry(25, 25);
var planeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
var plane = new THREE.Mesh(planeGeo, planeMat);
//allongement du plan
plane.rotation.x = -1 * Math.PI / 2;


//creation d'un boite
var boxGeo = new THREE.BoxGeometry(10, 10, 10);
var boxMat = new THREE.MeshPhongMaterial({ color: 0xfd00dd });
var box = new THREE.Mesh(boxGeo, boxMat);
box.position.set(0, 6, 0);


//creation d'une sphère
var sphGeo = new THREE.SphereGeometry(1, 30, 30);
var sphMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
var sphere = new THREE.Mesh(sphGeo, sphMat);

//creation d'une autre sphere
var sphMat2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var sphere2 = new THREE.Mesh(sphGeo, sphMat2);

//creation d'un point lumineux
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(30, 30, 30);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-330, 0, 0);


var guiControl = new function() {
    this.spherePosX = 0;
    this.spherePosY = 5;
    this.boxRotateX = 0.03;
}

var controls = new THREE.OrbitControls(camera, renderer.domElement);
var gui = new dat.GUI();
gui.add(guiControl, 'spherePosX', 0, 30);
gui.add(guiControl, 'spherePosY', 0, 10);
gui.add(guiControl, 'boxRotateX', 0, 1);


//ajout des objets à la scene
scene.add(plane);
scene.add(box);
scene.add(sphere);
scene.add(sphere2);
scene.add(pointLight);
scene.add(spotLight);



var t = 0;

//cette fonction s'execute tout le temps comme void draw
var render = function() {
    sphere.position.x = guiControl.spherePosX;
    sphere.position.y = guiControl.spherePosY;

    sphere2.position.x = guiControl.spherePosX;
    sphere2.position.y = guiControl.spherePosY + 5;

    controls.update();
    requestAnimationFrame(render);

    box.rotation.y += guiControl.boxRotateX;
    sphere.position.x += 10 * Math.cos(t * 2 * Math.PI);
    sphere.position.y += 10 * Math.sin(t * 2 * Math.PI);

    sphere2.position.x += 10 * Math.cos(t * 2 * Math.PI);
    sphere2.position.y += 20 * Math.sin(-t * 2 * Math.PI);
    if (t > 1) {
        t = 0;
    }
    t += 0.02;


    renderer.render(scene, camera);
};

render();