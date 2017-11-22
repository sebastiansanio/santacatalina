package org.kiakaha.santacatalina.json;

import java.util.List;

public class JsonOrder {

	private String code;
	private String table;
	private String note;
	
	private List<JsonOrderItem> items;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
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

	public List<JsonOrderItem> getItems() {
		return items;
	}

	public void setItems(List<JsonOrderItem> items) {
		this.items = items;
	}

	
}
