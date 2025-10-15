import { Collider, CircleCollider, Transform } from "engine";

export class BoxCollider extends Collider {
    constructor(transform: Transform) {
        super(transform);
    }

    intersects(other: Collider): boolean {
        if(other instanceof BoxCollider) return this.intersectsWithBox(other);
        if(other instanceof CircleCollider) return this.intersectsWithCircle(other);
        return false;
    }

    intersectsWithBox(other: Collider): boolean {
        let o = other.transform;
        let t = this.transform;
        return false;
    }
    intersectsWithCircle(other: Collider): boolean {
        throw new Error("Method not implemented.");
    }

    drawDebug(): void {
        throw new Error("Method not implemented.");
    }
    
}