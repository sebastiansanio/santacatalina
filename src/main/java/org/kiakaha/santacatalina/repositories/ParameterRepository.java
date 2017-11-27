package org.kiakaha.santacatalina.repositories;

import org.kiakaha.santacatalina.model.Parameter;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ParameterRepository extends PagingAndSortingRepository<Parameter, String>  {
	
}
