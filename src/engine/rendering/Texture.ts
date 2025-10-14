/**
 * Holds an HTMLImageElement.
 * Constructor creates HTMLImageElement from given path.
 * Wrapper object that allows easy resizing
 * @author Zhen Loffreto
 */
export class Texture {
    public image: HTMLImageElement;

    constructor(imgpath: string) {
        let tempimage = new Image();
        tempimage.src = imgpath;
        this.image = tempimage;
    }

    setImageSize(width: number, height: number) {
        this.image.width = width;
        this.image.height = height;
    }
}