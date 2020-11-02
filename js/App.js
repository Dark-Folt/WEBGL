// 1 creation de la scene
var scene = new THREE.Scene();  

// 2 ajout de la camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

//creation du rendu 
var renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

/**
 * un objet = geometry + material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

//ajout de l'objet à la scene
scene.add( cube );

camera.position.z = 15;

//cette fonction s'execute tout le temps comme void draw
var render = function () {
    requestAnimationFrame( render );

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
};

render();
 */

camera.position.z=5;
var sphGeo= new THREE.SphereGeometry(1,2000,2000);
var sphMat=new THREE.MeshBasicMaterial({color: 0xff0000});
var sph = new THREE.Mesh(sphGeo,sphMat);
scene.add(sph);

var render = function () {
    requestAnimationFrame( render );
    renderer.render(scene, camera);
};

render();
