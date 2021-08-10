import { PerspectiveCamera } from "three";

export default function createCamera(): PerspectiveCamera {
  const fov = 75;
  const aspect = 16 / 9;
  const near = 0.1;
  const far = 5;
  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;

  return camera;
}
