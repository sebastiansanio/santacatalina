package org.kiakaha.santacatalina.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Parameter {
	
	@Id
	private String key;
	private String value;
	
	public Parameter(String key, String value) {
		this.key = key;
		this.value = value;
	}
	
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}

	public Parameter() {
		super();
	}
	
}
