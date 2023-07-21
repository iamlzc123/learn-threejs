import { Mesh, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { createCamera } from "./camera";
import { createCube } from "./cube";
import { createRenderer } from "./render";
import { createScene } from "./scene";


class World {
    private camera: PerspectiveCamera;
    private scene:Scene;
    private renderer: WebGLRenderer;
    private cube : Mesh;
    private container : HTMLElement;
    constructor(container:HTMLElement) {
        this.camera = createCamera();
        this.scene = createScene();
        this.cube = createCube();
        this.renderer = createRenderer();
        this.container = container;
    }
    render() {
        // 开始
        this.scene.add(this.cube);
        this.renderer.render(this.scene, this.camera);
        this.container.appendChild(this.renderer.domElement)
    }
}

export {
    World
}

