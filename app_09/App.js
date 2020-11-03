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

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(30, 30, 30);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-330, 0, 0);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//ajout des objets à la scene
scene.add(plane);
scene.add(box);
scene.add(sphere);
scene.add(pointLight);
scene.add(spotLight);



var pos = 10;
var t = 0;

//cette fonction s'execute tout le temps comme void draw
var render = function() {
    sphere.position.x = pos;
    sphere.position.y = pos;

    controls.update();
    requestAnimationFrame(render);
    box.rotation.y += 0.03 * Math.PI / 2;
    sphere.position.x += pos * Math.cos(t * 2 * Math.PI);
    sphere.position.y += pos * Math.sin(t * 2 * Math.PI);
    if (t > 1) {
        t = 0;
    }
    t += 0.02;


    renderer.render(scene, camera);
};

render();