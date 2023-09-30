import {Model, model, property} from '@loopback/repository';

export interface OrderRequest {
  id: number;
  date: string;
  status: string;
  userId: number;
  userOrders?: UserOrder[];
}

export interface UserOrder {
  id: number;
  productId: number;
  quantity: number;
  orderId?: number;
}

@model()
export class UserOrderDTO extends Model {
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
  userId: number;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  status?: string;

  constructor(data?: Partial<UserOrderDTO>) {
    super(data);
  }
}

@model()
export class OrderDTO extends Model {
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
  userId: number;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  status?: string;

  userOrders: UserOrderDTO[];

  constructor(data?: Partial<OrderDTO>) {
    super(data);
  }
}
