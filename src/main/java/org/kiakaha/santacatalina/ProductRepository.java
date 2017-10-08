package org.kiakaha.santacatalina;

import org.kiakaha.santacatalina.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
	
}
