import {inject} from '@loopback/core';
import {post, requestBody, response} from '@loopback/rest';
import {OrderDTO, OrderRequest} from '../models/DTO/order-request.dto';
import {TransactionService} from '../services';

export class OrderController {
  constructor(
    @inject('services.TransactionService')
    private transactionService: TransactionService,
  ) {}

  @post('/order')
  @response(200, {
    description: 'Order request response',
    content: {
      'application/json': {
        schema: OrderDTO,
      },
    },
  })
  async createOrderWithUserOrders(
    @requestBody() orderRequest: OrderRequest,
  ): Promise<OrderRequest> {
    // const {userOrders, ...orderData} = orderRequest;

    const createdOrder =
      await this.transactionService.createOrderWithUserOrders(orderRequest);
    return createdOrder;
  }
}
