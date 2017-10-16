package org.kiakaha.santacatalina;

import org.kiakaha.santacatalina.model.Category;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "inlineCategory", types = { Category.class })
public interface InLineCategory {
	Long getId();
	String getName();
	String isActive();
}
