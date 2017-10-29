package org.kiakaha.santacatalina.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class OrderItem {

	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	private Product product;
	
	private String nameProduct;
	@ManyToOne
	private Order order;
	private BigDecimal quantity;
	private BigDecimal price;
	
	
	public OrderItem() {
	}

	public OrderItem(BigDecimal quantity, BigDecimal price, String nameProduct,Order order) {
		this.quantity = quantity;
		this.price = price;
		this.nameProduct = nameProduct;
		this.order = order;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNameProduct() {
		return nameProduct;
	}
	public void setNameProduct(String nameProduct) {
		this.nameProduct = nameProduct;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	public BigDecimal getQuantity() {
		return quantity;
	}
	public void setQuantity(BigDecimal quantity) {
		this.quantity = quantity;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	
}
