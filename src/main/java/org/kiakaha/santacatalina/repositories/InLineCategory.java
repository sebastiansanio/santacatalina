package org.kiakaha.santacatalina.repositories;

import org.kiakaha.santacatalina.model.Category;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "inlineCategory", types = { Category.class })
public interface InLineCategory {
	Long getId();
	String getName();
	boolean isActive();
	byte[] getImage();
}
