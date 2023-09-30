import {repository} from '@loopback/repository';
import {OrderRequest} from '../models/DTO/order-request.dto';
import {OrderRepository, UserOrderRepository} from '../repositories';

export class TransactionService {
  constructor(
    @repository(OrderRepository) private orderRepo: OrderRepository,
    @repository(UserOrderRepository) private userOrderRepo: UserOrderRepository,
  ) {}

  async createOrderWithUserOrders(
    orderRequestItem: OrderRequest,
  ): Promise<OrderRequest> {
    const orderData: OrderRequest = orderRequestItem;

    return orderData;
  }
}
