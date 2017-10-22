package org.kiakaha.santacatalina.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProductController {
 
    @RequestMapping(value = "/product")
    public String index() {
        return "productView.html";
    }
}
