package org.kiakaha.santacatalina.repositories;

import org.kiakaha.santacatalina.model.Category;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = InLineCategory.class,collectionResourceRel = "orders", itemResourceRel = "order")
public interface OrderRepository extends PagingAndSortingRepository<Category, Long>  {
	

}
