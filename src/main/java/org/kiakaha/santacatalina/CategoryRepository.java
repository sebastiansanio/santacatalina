package org.kiakaha.santacatalina;

import java.util.List;

import org.kiakaha.santacatalina.model.Category;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = InLineCategory.class)
public interface CategoryRepository extends PagingAndSortingRepository<Category, Long>  {
	
	List<Category> findByNameContainingIgnoreCase(@Param("name") String name);

}
