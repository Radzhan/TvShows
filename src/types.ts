export interface ResponseArray {
    show: {
        name: string;
        id: number;
    };
};
export interface ResponseObj {
    name: string,
    id: number;
};
export interface ResponseOne {
    name: string;
    image: { medium: string }
    summary: string;
    type: string;
    runtime: number;
};
export interface ResponseOneObj {
    name: string;
    image: string;
    summary: string;
    type: string;
    runtime: number;
};