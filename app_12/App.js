/**
 * Ce programme permet de creer un axe avec un tore 
 */
// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//creation du rendu 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//modification de la couleur de fond
//renderer.setClearColor(0xffffff, 0.8);

//IL ne faut pas oublié le lookAt sinon on ne voir rien
camera.position.set(25, 25, 25);
camera.lookAt(scene.position);
/**
 * un objet = geometry + material
 */




//creation d'un repere
var axesHelper = new THREE.AxesHelper(15);

var planeGeo = new THREE.PlaneGeometry(15, 15);
var planeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
var plane = new THREE.Mesh(planeGeo, planeMat);
//allongement du plan
plane.rotation.x = -1 * Math.PI / 2;


//creation d'une sphere
var sphereGeo = new THREE.SphereGeometry(4, 50, 50);
var sphereMat = new THREE.MeshBasicMaterial({ color: 0xff00ff });
var sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.position.set(0, 5, 0);


var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(30, 30, 30);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-330, 0, 0);




//ajout des objets à la scene
scene.add(axesHelper);
scene.add(sphere);
scene.add(plane);
scene.add(spotLight);
scene.add(pointLight);


/**
 * Cette fonction s'execute à un intervalle de temps regulier
 */
var render = function() {
    requestAnimationFrame(render);
    sphere.rotation.y += 0.03 * Math.PI / 2;
    renderer.render(scene, camera);
};

render();