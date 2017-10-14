package org.kiakaha.santacatalina;

import org.kiakaha.santacatalina.model.Category;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CategoryRepository extends PagingAndSortingRepository<Category, Long>  {

}
