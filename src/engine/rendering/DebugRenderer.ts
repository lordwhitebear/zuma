import { BoxCollider, Collider, EngineSettings, Renderer, Transform } from "engine";

export class DebugRenderer extends Renderer {
    private collider;
    constructor(transform: Transform, collider: Collider) {
        super(transform);
        this.collider = Collider;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        if(this.active) {
            ctx.lineWidth = EngineSettings.DebugLineWidth;
            ctx.strokeStyle = EngineSettings.DebugColor;
            ctx.fillStyle = "transparent";
            let t = this.transform
            if(this.collider instanceof BoxCollider) {
                let collider = (BoxCollider)this.collider;
            } else {
                throw new Error('DebugRenderer does not support this collider type')
            }
        }
    }
}