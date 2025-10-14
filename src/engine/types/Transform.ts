import {Vector2} from 'engine'

/**
 * Wrapper object that stores a gameobjects geometric data.
 * @author Zhen Loffreto
 */
export class Transform {
    public position: Vector2;
    public scale: Vector2;
    public angle: number;
    constructor(position: Vector2 = new Vector2(),
                scale: Vector2 = new Vector2(),
                angle: number = 0){
        this.position = position;
        this.scale = scale;
        this.angle = angle;
    }

    copyFrom(other: Transform): void {
        this.position = other.position;
        this.scale = other.scale;
        this.angle = other.angle;
    }
}