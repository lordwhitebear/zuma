/**
 * Represents a 2D Vector.
 * Provides static behavior for Vector multiplication & normalization.
 * @author Zhen Loffreto
 */
export class Vector2 {
    public x: number;
    public y: number;

    static up(): Vector2 {
        return new Vector2(0, 1)
    }
    static down(): Vector2 {
        return new Vector2(0, -1)
    }
    static left(): Vector2 {
        return new Vector2(-1, 0)
    }
    static right(): Vector2 {
        return new Vector2(1, 0)
    }

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
}