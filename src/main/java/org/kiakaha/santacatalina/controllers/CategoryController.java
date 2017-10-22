package org.kiakaha.santacatalina.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CategoryController {
 
    @RequestMapping(value = "/category")
    public String index() {
        return "categoryView.html";
    }
}
