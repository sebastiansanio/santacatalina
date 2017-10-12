package org.kiakaha.santacatalina.resources;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.kiakaha.santacatalina.model.Product;
import org.kiakaha.santacatalina.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductResource {
	
	private ProductService productService;
	 
	public ProductResource(ProductService productService) {
		this.productService = productService;
	}
 
	@RequestMapping(value = "product", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Product> getAllProducts() {
		return productService.findAll();
	}
 
	@RequestMapping(value = "product", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Product> createProduct(@RequestBody Product product) throws URISyntaxException {
		try {
			Product result = productService.save(product);
			return ResponseEntity.created(new URI("/api/product/" + result.getId())).body(result);
		} catch (EntityExistsException e) {
			return new ResponseEntity<Product>(HttpStatus.CONFLICT);
		}
	}
 
	@RequestMapping(value = "product", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) throws URISyntaxException {
		if (product.getId() == null) {
			return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
		}
 
		try {
			Product result = productService.update(product);
 
			return ResponseEntity.created(new URI("/api/product/" + result.getId())).body(result);
		} catch (EntityNotFoundException e) {
			return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
		}
	}
 
	@RequestMapping(value = "/product/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
		productService.delete(id);
 
		return ResponseEntity.ok().build();
	}
	
	@RequestMapping(value = "/product/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Product get(@PathVariable Long id) {
		return productService.findOne(id);
	}

}
