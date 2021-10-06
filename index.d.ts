declare interface Options {
    perPage: number
    gap: number
}

declare class Slider {
    constructor(selector: string, options?: Options);
    selector: string;
    options: Options;
    items: null | Element[];
    contentWidth: number;
    maxScroll: number;
    scroll: number;
    isValid(): boolean;
    mount(): void;
    prev(): void;
    next(): void;
}

export = Slider;