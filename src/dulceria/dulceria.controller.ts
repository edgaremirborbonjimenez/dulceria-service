import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateItemDTO, ItemByIdDTO, ItemDTO, ItemsList, ItemStockListDTO, Size } from './dulceria.types';
import { DulceriaService } from './dulceria.service';
import { Item } from 'src/entities/item.entity';

@Controller()
export class DulceriaController {
    constructor(
        private readonly dulceriaService:DulceriaService
    ){}

@GrpcMethod('DulceriaService','CreateNewItem')
createNewItem(data:CreateItemDTO):Promise<Item>{
    return this.dulceriaService.createNewItem(data);
}

@GrpcMethod('DulceriaService','RemoveItem')
removeItem(data:ItemByIdDTO):Promise<Item>{
    return this.dulceriaService.removeItem(data);
}

@GrpcMethod('DulceriaService','AddItemStock')
addItemStock(data:ItemStockListDTO){}

@GrpcMethod('DulceriaService','TakeItemStock')
takeItemStock(data:ItemStockListDTO){}

@GrpcMethod('DulceriaService','UpdateItem')
updateItem(data:ItemDTO){}

@GrpcMethod('DulceriaService','GetAllItems')
getAllItems():ItemsList{
    const item: ItemDTO = {
        id:'Hola',
        name:'123',
        price:50,
        size:Size.NA
    }
    const items:ItemsList = {
        itemsList:[item]
    };
    return items;
}

@GrpcMethod('DulceriaService','GetItemById')
getItemById(ItemByIdDTO){}

}
