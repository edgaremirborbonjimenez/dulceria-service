export interface ItemByIdDTO{
    id:string;
}

export interface ItemsList{
    itemsList:ItemDTO[];
}

export interface ItemStockListDTO{
    itemsList:ItemStock;
}

export interface ItemStock{
    id:string;
    amount:number;
}

export interface CreateItemDTO{
    name:string;
    price:number;
    size:Size;
}

export interface ItemDTO{
    id:string;
    name:string;
    price:number;
    size:Size;
}

export enum Size{
    S = 0,
    R = 1,
    L = 2,
    NA = 3,
}