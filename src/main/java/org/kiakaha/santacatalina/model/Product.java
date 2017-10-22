package org.kiakaha.santacatalina.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Product {

	@Id
	@GeneratedValue
	private Long id;
	@Column(unique= true)
	private String name;

	private BigDecimal price;
	private String description;
	
	@ManyToOne
	private Category category;

	private boolean deleted;
	private boolean active;
	
	@Lob
	@Column(length=100000)
	private byte[] image;
	private Date dateCreated;
	public Product() {
	}

	public Product(String name, BigDecimal price, String description, boolean active, boolean deleted,Category category) {
		this.name = name;
		this.price = price;
		this.description = description;
		this.active = active;
		this.deleted = deleted;
		this.category = category;

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
}
