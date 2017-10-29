package org.kiakaha.santacatalina.repositories;

import java.util.Date;
import java.util.List;

import org.kiakaha.santacatalina.model.Order;
import org.kiakaha.santacatalina.model.OrderItem;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "inlineOrderItems", types = { Order.class })
public interface InLineOrder {
	Long getId();
	String getCode();
	Date getDate();
	boolean isStatus();
	List<OrderItem> getItems();
	
}
