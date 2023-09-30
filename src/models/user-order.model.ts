import {Entity, model, property} from '@loopback/repository';

@model()
export class UserOrder extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  // @belongsTo(() => Order, {name: 'order'})
  orderId: number;

  @property({
    type: 'number',
    required: true,
  })
  productId: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserOrder>) {
    super(data);
  }
}

export interface UserOrderRelations {
  // describe navigational properties here
}

export type UserOrderWithRelations = UserOrder & UserOrderRelations;
