import { GameObject, Renderer, Texture } from 'engine';

export class SimpleTextureRenderer extends Renderer{

    public texture: Texture | null;

    constructor(gameobject: GameObject, texture?: Texture){
        super(gameobject);
        this.texture = texture ?? null;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if(this.texture){
            let pos = this.gameobject.transform.position;
            let sca = this.gameobject.transform.scale;
            ctx.drawImage(this.texture.image, pos.x - sca.x/2, pos.y - sca.y/2, sca.x, sca.y);
        }
    }
}