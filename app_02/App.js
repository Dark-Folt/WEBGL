// 1 creation de la scene
var scene = new THREE.Scene();

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 3 creation du rendu 
var renderer = new THREE.WebGLRenderer();

// 4 on specifie la taille du rendu de la scene
renderer.setSize(window.innerWidth, window.innerHeight);

// 5 on ajoute le rendu dans la page HTML
document.body.appendChild(renderer.domElement);

/**
 * un objet = geometry + material
 */

//il ne faut pas oublié de mettre une valeur Z pour voir l'objet
camera.position.z = 5;

//Processus pour la creation du tore
// 1 creation de la geometrie
var toreGeo = new THREE.TorusGeometry(2, 0.4, 6, 100);

//2 creation du materiau
var toreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

//creation du tore
var tore = new THREE.Mesh(toreGeo, toreMat);

//ajout du tore a la scene
scene.add(tore);


//cette fonction s'execute tout le temps comme void draw
var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

render();