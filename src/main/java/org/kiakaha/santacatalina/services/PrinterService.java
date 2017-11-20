package org.kiakaha.santacatalina.services;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import org.kiakaha.santacatalina.model.Order;
import org.kiakaha.santacatalina.model.OrderItem;
import org.springframework.stereotype.Service;

@Service
public class PrinterService {
	private static final String PORT = "/dev/ttyUSB0";
	private static final String TITLE = "Lebron Bar";

	public void print(Order order) throws IOException {
		FileWriter fw = new FileWriter(PORT);

		PrintWriter pw = new PrintWriter(fw);

		pw.print(TITLE);
		pw.print("\r\n");
		pw.print("---------------------------------------");
		pw.print("\r\n");
		pw.print("Cod pedido: " + order.getCode());
		pw.print("\r\n");
		pw.print("Mesa: " + order.getNumber());
		pw.print("\r\n");
		pw.print("Observaciones: " + "Esto es una observacion");
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
