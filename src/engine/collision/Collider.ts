import {Transform} from 'engine';

export abstract class Collider {
    public transform: Transform;
    public isTrigger: boolean;

    constructor(transform: Transform) {
        this.transform = new Transform();
        this.transform.copyFrom(transform);
        this.isTrigger = false;
    }

    abstract intersects(other: Collider): boolean;

    abstract intersectsWithBox(other: Collider): boolean;
    abstract intersectsWithCircle(other: Collider): boolean;

    abstract drawDebug(): void;
}