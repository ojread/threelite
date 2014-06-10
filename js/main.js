var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({
	color: 0x00ff00,
	wireframe: true
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

var keyboard = new THREEx.KeyboardState();


window.addEventListener('resize', function () {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
});

function render() {
	requestAnimationFrame(render);

	if (keyboard.pressed('left')) {
		cube.rotation.y += 0.01;
	}
	if (keyboard.pressed('right')) {
		cube.rotation.y -= 0.01;
	}
	if (keyboard.pressed('up')) {
		cube.rotation.x += 0.01;
	}
	if (keyboard.pressed('down')) {
		cube.rotation.x -= 0.01;
	}

	renderer.render(scene, camera);
};

render();