import type { GameObject } from "engine";

/**
 * Basic behavior of all Renderer types.
 * All Renderer objects have their draw method called in runtime.
 * @author Zhen Loffreto
 */
export abstract class Renderer {
    protected gameobject: GameObject;
    constructor(gameobject: GameObject) {
        this.gameobject = gameobject;
    }
    abstract draw(ctx: CanvasRenderingContext2D): void;
}