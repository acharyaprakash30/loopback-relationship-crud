import {Entity, hasMany, model, property} from '@loopback/repository';
import {Order} from './order.model';

@model()
export class User extends Entity {
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
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  phoneNo: string;

  @property({
    type: 'number',
    default: 0,
  })
  total?: number;

  @hasMany(() => Order, {keyTo: 'userId'})
  orders: Order[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
