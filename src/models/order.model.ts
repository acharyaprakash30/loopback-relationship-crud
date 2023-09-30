import {
  Entity,
  belongsTo,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {UserOrder} from './user-order.model';
import {User} from './user.model';

export enum OrderStatus {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PENDING = 'pending',
  DELIVERED = 'delivered',
}

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => User, {name: 'user'})
  userId: number;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'boolean',
    jsonSchema: {
      enum: Object.values(OrderStatus),
      default: OrderStatus.PENDING,
    },
  })
  status?: OrderStatus;

  @hasMany(() => UserOrder, {keyTo: 'orderId'})
  userOrders: UserOrder[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
