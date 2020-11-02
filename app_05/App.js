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

//IL ne faut pas oublié le lookAt sinon on ne voir rien
camera.position.set(5, 5, 5);
camera.lookAt(scene.position);
/**
 * un objet = geometry + material
 */




//creation d'un repere
var axesHelper = new THREE.AxesHelper(5);

//creation d'un tore
var toreGeo = new THREE.TorusGeometry(2, 0.2, 10, 100);
var toreMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var tore = new THREE.Mesh(toreGeo, toreMat);



//ajout des objets à la scene
scene.add(axesHelper);
scene.add(tore);


//cette fonction s'execute tout le temps comme void draw

var render = function() {
    requestAnimationFrame(render);

    //tore.rotation.y += 0.01 * Math.PI / 2;
    tore.rotation.x = Math.PI / 2;
    tore.position.y += 0.01;
    renderer.render(scene, camera);
};

render();