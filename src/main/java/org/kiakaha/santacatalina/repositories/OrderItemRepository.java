package org.kiakaha.santacatalina.repositories;

import org.kiakaha.santacatalina.model.OrderItem;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "orderItems", itemResourceRel = "orderItem")
public interface OrderItemRepository extends PagingAndSortingRepository<OrderItem, Long>  {
	

}
