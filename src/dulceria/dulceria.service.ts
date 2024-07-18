import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { Repository } from 'typeorm';
import { CreateItemDTO, ItemByIdDTO} from './dulceria.types';

@Injectable()
export class DulceriaService {
    constructor(
        @InjectRepository(Item) private readonly itemsRepository:Repository<Item>,
    ){}

    async createNewItem(item:CreateItemDTO):Promise<Item>{
        return this.itemsRepository.save(item);
    }

    async removeItem(data:ItemByIdDTO):Promise<Item>{
        const itemSaved:Item = await this.itemsRepository.findOne(
            {
                where:{
                    id:data.id
                }
            }
        );
        const itemDeleted:Item = await this.itemsRepository.remove(itemSaved);
        return itemDeleted;
    }
}
