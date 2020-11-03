var chrono = new THREE.Clock();
var temps;
var vAng = 3;
var keys = { left: 0, right: 0 };

window.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        keys.left = 1;
    }
    if (event.keyCode == 39) {
        keys.right = 1;
    }
});

window.addEventListener('keyup', function(event) {
    if (event.keyCode == 37) {
        keys.left = 0;
    }
    if (event.keyCode == 39) {
        keys.right = 0;
    }
});






var scene = new THREE.Scene();
var camera = new
THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 300)
camera.lookAt(scene.position);





var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);





var axisHelper = new THREE.AxisHelper(70);
scene.add(axisHelper);





var boxGeo = new THREE.BoxGeometry(50, 50, 50);
var boxMat = new THREE.MeshLambertMaterial({ color: 0xff00ff });
var box = new THREE.Mesh(boxGeo, boxMat);
scene.add(box);





var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(60, 60, 60);
scene.add(pointLight);







var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-300, 0, 0);
scene.add(spotLight);


chrono.start();
animation = function() {
    deltatemps = chrono.getDelta();
    if (keys.left == 1) {
        box.rotation.y = box.rotation.y - vAng * deltatemps;
    }
    if (keys.right == 1) {
        box.rotation.y = box.rotation.y + vAng * deltatemps;
    }
}

function render() {
    requestAnimationFrame(render);
    animation();
    renderer.render(scene, camera);
}
render();