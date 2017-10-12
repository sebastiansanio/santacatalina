package org.kiakaha.santacatalina.service;

import java.util.List;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.kiakaha.santacatalina.ProductRepository;
import org.kiakaha.santacatalina.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	private ProductRepository productRepository;
	 
	@Autowired
	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
 
	public Product save(Product product) {
		if (product.getId() != null && productRepository.exists(product.getId())) {
			throw new EntityExistsException("Ya existe el producto en la base");
		}
 
		return productRepository.save(product);
	}
 
	public Product update(Product product) {
		if (product.getId() != null && !productRepository.exists(product.getId())) {
			throw new EntityNotFoundException("El producto no existe en la base");
		}
 
		return productRepository.save(product);
	}
 
	public List<Product> findAll() {
		return (List<Product>) productRepository.findAll();
	}
 
	public Product findOne(Long id) {
		return productRepository.findOne(id);
	}
 
	public void delete(Long id) {
		productRepository.delete(id);
	}
		

}
