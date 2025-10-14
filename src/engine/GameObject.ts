import {Transform, Renderer, Collider} from 'engine';

export class GameObject {
    public name: string;
    public transform: Transform;
    public renderer: Renderer | null;
    public collider: Collider | null;

    constructor(name: string, transform: Transform) {
        this.name = name;
        this.transform = new Transform;
        this.transform.copyFrom(transform);
        this.renderer = null;
        this.collider = null;
    }
}