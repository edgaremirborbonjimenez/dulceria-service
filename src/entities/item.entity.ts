import { Column, Entity } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { Size } from "src/dulceria/dulceria.types";

@Entity({name:"items",schema:"public"})
export class Item extends AbstractEntity{
    @Column({
        name: 'name',
        type: "varchar",
        length: 30,
        nullable: false
    })
    name:string;

    @Column({
        name: 'price',
        type: "double precision",
        nullable: false
    })
    price:number;

    @Column({
        name:'size',
        nullable: false,
        type: "enum",
        enum: Size,
        default: Size.NA
    })
    size:Size;

    @Column(
        {
            name:'stack',
            nullable: false,
            type: "smallint",
            default: 0
        }
    )
    stock:number
}