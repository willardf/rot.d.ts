interface ROTStatic {
    Display: Display;
}

// String extensions
interface FormatFunc {
    (format: string, ...args: any[]): string;
    map: Object;
}

interface String {
    format: FormatFunc;
}

// Display
interface DisplayOptions {
    width?: number;
    height?: number;
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    fg?: string;
    bg?: string;
    spacing?: number;
    border?: number;
    layout?: string;
    tileWidth?: number;
    tileHeight?: number;
    tileMap?: Object;
    tileSet?: Object;
}

interface Display{
    new (options?: DisplayOptions): Display;
    getContainer(): Node;
    setOptions(options: DisplayOptions): void;
    draw(x: number, y: number, character: any, fg: string, bg: string): void;
    drawText(x: number, y: number, text: string, width: number): void;

}

// Helpers (Not in rot.js)
declare enum FontStyle { Bold, Italic, None, Both }

declare var ROT: ROTStatic;