import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Category, CategoryWithRelations} from './category.model';

@model({settings: {strict: true}})
export class Product extends Entity {
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
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  // @property({
  //   type: 'number',
  //   required: true,
  // })

  @belongsTo(() => Category, {name: 'category'})
  categoryId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  category?: CategoryWithRelations;
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
