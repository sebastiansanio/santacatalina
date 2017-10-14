package org.kiakaha.santacatalina;

import org.kiakaha.santacatalina.model.Category;
import org.kiakaha.santacatalina.model.Product;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineCategory", types = { Product.class }) 
public interface InLineCategory {
	String getName();
	String getPrice();
	String getDescription();
	String getImage();
	String isDeleted();
	String isActive();

	  Long getId();

	  Category getCategory();
}
