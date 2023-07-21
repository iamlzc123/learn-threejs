import { PerspectiveCamera } from "three";

// return the camera
function createCamera(): PerspectiveCamera {
    const fov = 35;
    const aspect = 1// dom?.clientWidth / dom?.clientHeight
    const near = 0.1;
    const far = 100;
    const camera: PerspectiveCamera = new  PerspectiveCamera(fov,aspect,near, far);
    camera.position.set(0,0,10);
    return camera;
}


export {
    createCamera
}