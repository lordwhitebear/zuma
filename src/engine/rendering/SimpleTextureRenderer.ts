import { Renderer, Texture, Transform } from 'engine';

export class SimpleTextureRenderer extends Renderer{

    public texture: Texture | null;

    constructor(transform: Transform, texture?: Texture){
        super(transform);
        this.texture = texture ?? null;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if(this.texture){
            let pos = this.transform.position;
            let sca = this.transform.scale;
            ctx.drawImage(this.texture.image, pos.x - sca.x/2, pos.y - sca.y/2, sca.x, sca.y);
        }
    }
}