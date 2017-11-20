package org.kiakaha.santacatalina.controllers;

import java.util.Date;

import org.kiakaha.santacatalina.json.JsonOrder;
import org.kiakaha.santacatalina.model.Order;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/rest/order")
public class OrderRestController {

	
    @RequestMapping(method= RequestMethod.PUT, produces = { "application/json" })
    public Order save(@RequestBody JsonOrder jsonOrder) {
    	Order order = new Order();
    	order.setCode(jsonOrder.getCode());
    	order.setDate(new Date());
    	order.setNote(jsonOrder.getNote());
    	
    	return order;
    	
    }
}
