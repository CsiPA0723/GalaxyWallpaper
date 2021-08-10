import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import createCamera from "./components/camera";
import createScene from "./components/scene";
import Loop from "./systems/Loop";
import createRenderer from "./systems/renderer";
import Resizer from "./systems/Resizer";

let camera: PerspectiveCamera;
let renderer: WebGLRenderer;
let scene: Scene;
let loop: Loop;

export default class Galaxy {
  constructor(container: HTMLElement) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);

    container.appendChild(renderer.domElement);

    new Resizer(container, camera, renderer);
  }

  public render(): void {
    renderer.render(scene, camera);
  }

  public start(): void {
    loop.start();
  }

  public stop(): void {
    loop.stop();
  }
}
