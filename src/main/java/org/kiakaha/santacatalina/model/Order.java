package org.kiakaha.santacatalina.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Data;

@Data
@Entity()
@Table(name="TORDER",uniqueConstraints = {@UniqueConstraint(columnNames = {"date", "number"})})
public class Order {

	@Id
	@GeneratedValue
	private Long id;
	
	@OneToMany
	private List<OrderItem> items;
	
	private String code;
	private Date date;
	private long number;
	private String table;
	private String note;
	
	private boolean status;
	
	public Order() {
	}

	public Order(String code, boolean status, Date date, long number) {
		this.code = code;
		this.status = status;
		this.date = date;
		this.number = number;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<OrderItem> getItems() {
		return items;
	}
	public void setItems(List<OrderItem> items) {
		this.items = items;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getTable() {
		return table;
	}

	public void setTable(String table) {
		this.table = table;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
