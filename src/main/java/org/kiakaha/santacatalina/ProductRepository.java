package org.kiakaha.santacatalina;

import java.util.List;

import org.kiakaha.santacatalina.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = InLineProduct.class)
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
	
	List<Product> findByNameContainingIgnoreCase(@Param("name") String name);
	
	
	
}
