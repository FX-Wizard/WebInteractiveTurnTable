import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import GLTFLoader from 'three-gltf-loader';

import monaco from './assets/dodgeMonacoBody.gltf';
import hubcaps from './assets/hubcaps.gltf';
import policePackage from './assets/policePackage.gltf';
import bluesmoblie from './assets/bluesBrothers.gltf';

class Viewport {

    constructor (opts = {}) {
      
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.output = opts.output || document.createElement('div');
  
      // renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor( 0x222222 );
      this.renderer.setPixelRatio(window.devicePixelRatio || 1);
      this.renderer.setSize( this.width, this.height );
      this.output.appendChild( this.renderer.domElement );
  
      // scene
      this.scene = new THREE.Scene();
  
      // lights
      this.keyLight = new THREE.DirectionalLight(0xffffff);
      this.keyLight.position.set(100, 100, 30);
      this.scene.add(this.keyLight);
      
      this.light = new THREE.DirectionalLight(0xffffcc, 1);
      this.light.position.set(0,100,30);
      this.scene.add(this.light);
      
      const ambientLight = new THREE.AmbientLight(0xcccccc);
      this.scene.add(ambientLight);
  
      // camera
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.1,
        10000
      );
      this.camera.position.set( 100, 100, 100 );
      this.camera.lookAt({x: 0, y: 10, z:0});

      this.controlRig();

      // assets
      
      this.assetLoader(hubcaps);
      this.assetLoader(policePackage);
      this.assetLoader(bluesmoblie);
      this.assetLoader(monaco);
      
      // render
      this.render();
  
      // listener
      window.addEventListener('resize', () => {
          this.onResize();
      }, false);
    }

    assetLoader(asset) {
      const loader = new GLTFLoader();

      loader.parse(asset, "", (gltf) => {
        console.log("asset name:", asset)
        this.scene.add(gltf.scene);
      })
    }

    test() {
      this.testModel = this.assetLoader(bluesmoblie);
      console.log("model:", this.testModel);
    }

    showObject(name) {
      this.scene.traverse(
        function(object) {
          if (object.name === name) {
            object.visible = true;
          }
        }
      );
    }

    hideObject(name) {
      this.scene.traverse(
        function(object) {
          if (object.name === name) {
            object.visible = false;
          }
        }
      );
    }

    controlRig() {
      this.controls = new OrbitControls(
        this.camera,
        document.getElementsByClassName("content")[0]
      );
      this.controls.target = this.scene.position;
      this.controls.rotateSpeed = 1;
      this.controls.zoomSpeed = 1.2;
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.3;
      this.controls.enablePan = false;
      this.controls.maxPolarAngle = 1.4;
      this.controls.minDistance = 60;
      this.controls.maxDistance = 250;
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 1;
    }
  
    render () {
      requestAnimationFrame( () => {
        this.render();
      });
      this.controls.update()
      this.renderer.render( this.scene, this.camera );
    }
  
    onResize () {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );
    }
  }
  

export default Viewport;