import { WebGLRenderer } from "three";

export default function createRenderer(): WebGLRenderer {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}
