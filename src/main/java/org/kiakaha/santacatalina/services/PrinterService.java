package org.kiakaha.santacatalina.services;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import org.kiakaha.santacatalina.model.Order;
import org.kiakaha.santacatalina.model.OrderItem;
import org.kiakaha.santacatalina.model.Parameter;
import org.kiakaha.santacatalina.repositories.ParameterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrinterService {
	private static final String TITLE = "Lebron Bar";

	@Autowired
	private ParameterRepository parameterRepository;
	
	public void print(Order order) throws IOException {
		Parameter parameter = parameterRepository.findOne("PRINTER_PORT");
		System.out.println("Parámetro: " +parameter);
		FileWriter fw = new FileWriter(parameter.getValue());

		PrintWriter pw = new PrintWriter(fw);
		pw.print(TITLE);
		pw.print("\r\n");
		pw.print("---------------------------------------");
		pw.print("\r\n");
		pw.print("Cod pedido: " + order.getCode());
		pw.print("\r\n");
		pw.print("Mesa: " + order.getTable());
		pw.print("\r\n");
		pw.print("Observaciones: " + order.getNote());
		pw.print("\r\n");
		pw.print("---------------------------------------");
		pw.print("\r\n");

		for (OrderItem item : order.getItems()) {
			pw.print(item.getNameProduct() + ": " + item.getQuantity());
			pw.print("\r\n");
		}
		pw.print("---------------------------------------");
		for (int i = 0; i < 12; i++) {
			pw.print("\r\n"); // Para que se pueda cortar el ticket
		}

		pw.close();
	}

}
