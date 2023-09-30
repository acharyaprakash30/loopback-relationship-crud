import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Order, OrderRelations, User, UserOrder} from '../models';
import {UserOrderRepository} from './user-order.repository';
import {UserRepository} from './user.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {
  //for user orders
  public readonly userOrders: HasManyRepositoryFactory<
    UserOrder,
    typeof Order.prototype.id
  >;

  //for user orders
  public readonly user: BelongsToAccessor<User, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('UserOrderRepository')
    userOrderRepositoryGetter: Getter<UserOrderRepository>,

    @repository.getter('userRepository')
    userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Order, dataSource);

    //for user orders
    this.userOrders = this.createHasManyRepositoryFactoryFor(
      'userOrders',
      userOrderRepositoryGetter,
    );
    this.registerInclusionResolver(
      'userOrders',
      this.userOrders.inclusionResolver,
    );

    //for user
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
