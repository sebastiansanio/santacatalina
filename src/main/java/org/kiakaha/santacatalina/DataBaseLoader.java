package org.kiakaha.santacatalina;

import java.math.BigDecimal;

import org.kiakaha.santacatalina.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataBaseLoader implements CommandLineRunner {
 
    private final ProductRepository productRepository;
 
    @Autowired
    public DataBaseLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
 
    @Override
    public void run(String... strings) throws Exception {
        this.productRepository.save(new Product("Tarta jamon y queso", BigDecimal.valueOf(60.00) , " ",true,false));
        this.productRepository.save(new Product("Albondigas", BigDecimal.valueOf(80.00), "",true,false));
        this.productRepository.save(new Product("Fideos", BigDecimal.valueOf(90.00), "",true,false));
        this.productRepository.save(new Product("Tomates", BigDecimal.valueOf(40.00), "",true,false));
    }
}