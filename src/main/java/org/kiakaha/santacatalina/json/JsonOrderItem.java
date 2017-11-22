package org.kiakaha.santacatalina.json;

import java.math.BigDecimal;

public class JsonOrderItem {

	private long product;
	private BigDecimal quantity;
	
	public long getProduct() {
		return product;
	}
	public void setProduct(long product) {
		this.product = product;
	}
	public BigDecimal getQuantity() {
		return quantity;
	}
	public void setQuantity(BigDecimal quantity) {
		this.quantity = quantity;
	}
	
}
