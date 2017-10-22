package org.kiakaha.santacatalina.repositories;

import java.math.BigDecimal;

import org.kiakaha.santacatalina.model.Category;
import org.kiakaha.santacatalina.model.Product;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineCategory", types = { Product.class })
public interface InLineProduct {
	String getName();
	BigDecimal getPrice();
	String getDescription();
	byte[] getImage();
	boolean isDeleted();
	boolean isActive();
	Long getId();
	Category getCategory();
}
