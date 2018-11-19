import * as THREE from 'three';

export default canvas => {

    const width = canvas.width;
    const height = canvas.height;

    init();

  function init () {
     // renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor( 0x222222 );
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setSize( width, height );
    
      // scene
      const scene = new THREE.Scene();

      // lights
      const light = new THREE.DirectionalLight(0xffffcc, 1);
      light.position.set(0,100,30);
      scene.add(light);
      const ambientLight = new THREE.AmbientLight(0xffaa55);
      scene.add(ambientLight);
    
      // camera
      const camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        1,
        10000
      );
      camera.position.set( 100, 100, 100 );
      camera.lookAt( scene.position );
    
      // cube
      const geometry = new THREE.CubeGeometry(20, 20, 20);
      const material = new THREE.MeshLambertMaterial({ color: 0xFBBC05 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
    

    render();

    window.addEventListener('resize', () => {
        onWindowResize();
    }, false);

  }

  function update () {
    render()
  }

  function render () {
    const {scene, camera} = canvas;
    requestAnimationFrame( () => {
      render();
    });
    const renderer = canvas
    renderer.render( scene, camera );
  }
  
  function onWindowResize() {
    const { width, height, camera, renderer } = canvas;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function onMouseMove() {
  }

  return {
    update,
    onWindowResize,
    onMouseMove
  }
}