package org.kiakaha.santacatalina;

import org.kiakaha.santacatalina.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
	
}
