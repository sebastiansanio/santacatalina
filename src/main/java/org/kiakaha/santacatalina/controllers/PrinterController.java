package org.kiakaha.santacatalina.controllers;

import org.kiakaha.santacatalina.model.Order;
import org.kiakaha.santacatalina.repositories.OrderRepository;
import org.kiakaha.santacatalina.services.PrinterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/printer")
public class PrinterController {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private PrinterService printerService;

	@Autowired
	private OrderRepository orderRepository;

	@GetMapping(path = "/print/{orderId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean print(@PathVariable(value="orderId") long orderId) {
		Order order = orderRepository.findOne(orderId);
		try {
			printerService.print(order);
			return true;
		} catch (Exception e) {
			LOGGER.error("Error en impresión de pedido", e);
		}
		return false;

	}
}
