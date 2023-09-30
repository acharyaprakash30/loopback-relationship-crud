import {Entity, hasMany, model, property} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';

@model()
export class Category extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title?: string;

  @property({
    type: 'string',
    required: true,
  })
  slug?: string;

  @hasMany(() => Product, {keyTo: 'categoryId'})
  products: Product[];

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  product: ProductWithRelations;
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
