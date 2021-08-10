import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import Updatable from "../Updatable";

const clock = new Clock();

export default class Loop {
  public camera: PerspectiveCamera;
  public scene: Scene;
  public renderer: WebGLRenderer;
  public updatables: Updatable[];

  constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  public start(): void {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  public stop(): void {
    this.renderer.setAnimationLoop(null);
  }

  public tick(): void {
    // only call the getDelta function once per frame!
    const delta = clock.getDelta();

    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );

    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}
