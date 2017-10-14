package org.kiakaha.santacatalina;

import java.math.BigDecimal;

import org.kiakaha.santacatalina.model.Category;
import org.kiakaha.santacatalina.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataBaseLoader implements CommandLineRunner {
 
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
 
    @Autowired
    public DataBaseLoader(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
 
    @Override
    public void run(String... strings) throws Exception {
    		Category category1 = new Category("Pastas", true);
    		Category category2 = new Category("Carnes", true);
    		Category category3 = new Category("Postres", true);
    		Category category4 = new Category("Bebidas", true);
    	 	this.categoryRepository.save(category1);
         this.categoryRepository.save(category2);
         this.categoryRepository.save(category3);
         this.categoryRepository.save(category4);
        this.productRepository.save(new Product("Tarta jamon y queso", BigDecimal.valueOf(60.00) , " ",true,false, category3));
        this.productRepository.save(new Product("Albondigas", BigDecimal.valueOf(80.00), "",true,false,category4));
        this.productRepository.save(new Product("Fideos", BigDecimal.valueOf(90.00), "",true,false,category1));
        this.productRepository.save(new Product("Tomates", BigDecimal.valueOf(40.00), "",true,false,category2));
    }
}