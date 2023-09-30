import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {UserOrder, UserOrderRelations} from '../models';

export class UserOrderRepository extends DefaultCrudRepository<
  UserOrder,
  typeof UserOrder.prototype.id,
  UserOrderRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(UserOrder, dataSource);
  }
}
