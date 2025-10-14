import {Transform} from 'engine';

export abstract class Collider {
    protected transform: Transform;
    protected isTrigger: boolean;

    constructor(transform: Transform) {
        this.transform = new Transform();
        this.transform.copyFrom(transform);
        this.isTrigger = false;
    }
}