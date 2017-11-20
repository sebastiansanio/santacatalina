package org.kiakaha.santacatalina.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/order")
public class OrderController {
 
    @RequestMapping(method=RequestMethod.GET)
    public String index() {
        return "orderView.html";
    }

}
