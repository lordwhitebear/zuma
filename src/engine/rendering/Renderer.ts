import type { Transform } from "engine";

/**
 * Basic behavior of all Renderer types.
 * All Renderer objects have their draw method called in runtime.
 * @author Zhen Loffreto
 */
export abstract class Renderer {
    protected transform: Transform;
    public active: boolean;
    constructor(transform: Transform) {
        this.transform = transform;
        this.active = true;
    }
    abstract draw(ctx: CanvasRenderingContext2D): void;
}