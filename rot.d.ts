interface ROTStatic {
    RNG: RNG;
    Map: MapStatic;
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

// Random Number Gen
interface RNG {
    getUniform(): number
    getNormal(mean, stddev): number;
    getPercentage(): number;

    getState(): Array<number>;
    setState(state: Array<number>): void;

    getSeed(): number;
    setSeet(seed: number): void;


}

// Map components
interface MapStatic {
    Digger: Digger;
    Uniform: Uniform;
    Rogue: Rogue;
}

interface MapCreateCallback {
    (x: number, y: number, cellValue: number):void;
}

interface RoomCallback { (x: number, y: number): void; }
interface IsWallCallback { (x: number, y: number): boolean; }

interface Room {
    getCenter(): number;
    getLeft(): number;
    getTop(): number;
    getBottom(): number;
    getRight(): number;

    addDoor(x: number, y: number): Room;
    addDoors(callback: IsWallCallback): Room;
    clearDoors(): Room;

}

// Dungeon Generators
interface DiggerOptions {
    roomWidth?: Array<number>;
    roomHeight?: Array<number>;
    corridorLength?: Array<number>;
    dugPercentage?: number;
    timeLimit?: number;
}

interface Digger {
    new (width?: number, height?: number, options?: DiggerOptions): Digger;

    create(callback?:MapCreateCallback): Digger;

    getRooms(): Array<Room>;
}

interface UniformOptions {
    roomWidth?: Array<number>;
    roomHeight?: Array<number>;
    dugPercentage?: number;
    timeLimit?: number;
}

interface Uniform {
    new (width?: number, height?: number, options?: UniformOptions): Uniform;

    create(callback?: MapCreateCallback): Uniform;

    getRooms(): Array<Room>;
}

interface Rogue {
    new (width?: number, height?: number): Rogue;

    create(callback?: MapCreateCallback): Rogue;
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