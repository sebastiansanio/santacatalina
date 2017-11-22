package org.kiakaha.santacatalina.repositories;

import java.util.List;

import org.kiakaha.santacatalina.model.Order;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = InLineOrder.class,collectionResourceRel = "orders", itemResourceRel = "order")
public interface OrderRepository extends PagingAndSortingRepository<Order, Long>  {
	
	List<Order> findByCodeContainingIgnoreCase(@Param("code") String code);

	
	
}
