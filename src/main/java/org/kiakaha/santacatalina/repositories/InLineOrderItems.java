package org.kiakaha.santacatalina.repositories;

import java.math.BigDecimal;

import org.kiakaha.santacatalina.model.OrderItem;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "inlineOrder", types = { OrderItem.class })
public interface InLineOrderItems {
	Long getId();
	BigDecimal getQuantity();
	BigDecimal getPrice();
	String getNameProduct();
}
