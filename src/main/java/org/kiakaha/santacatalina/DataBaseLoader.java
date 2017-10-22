package org.kiakaha.santacatalina;

import java.math.BigDecimal;

import org.kiakaha.santacatalina.model.Category;
import org.kiakaha.santacatalina.model.Product;
import org.kiakaha.santacatalina.repositories.CategoryRepository;
import org.kiakaha.santacatalina.repositories.ProductRepository;
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
		
		Category categorySalad = new Category("Ensalada", true);
		this.categoryRepository.save(categorySalad);
		this.productRepository.save(new Product("Cesar", BigDecimal.valueOf(95.00), "", true, false, categorySalad));
		this.productRepository.save(new Product("Espinaca", BigDecimal.valueOf(95.00), "", true, false, categorySalad));
		this.productRepository.save(new Product("Jamón y palitos", BigDecimal.valueOf(95.00), "", true, false, categorySalad));
		this.productRepository.save(new Product("Roquefort", BigDecimal.valueOf(95.00), "", true, false, categorySalad));
		this.productRepository.save(new Product("Salmón", BigDecimal.valueOf(95.00), "", true, false, categorySalad));

		
		Category categoryHotSandwiches = new Category("Sandwich Calientes", true);
		this.categoryRepository.save(categoryHotSandwiches);
		this.productRepository.save(new Product("Bondiola", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches));
		this.productRepository.save(new Product("Hamburguesa Veggie", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches));
		this.productRepository.save(new Product("Hojaldre de Salmon", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches));
		this.productRepository.save(new Product("Salchichas Alemanas", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches));
		this.productRepository.save(new Product("Tapa de Asado", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches));
		this.productRepository.save(new Product("Wrap de Pollo", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches));

		Category categoryDayDish = new Category("Plato del día", true);
		this.categoryRepository.save(categoryDayDish);
		this.productRepository.save(new Product("Plato del día", BigDecimal.valueOf(95.00), "", true, false, categoryDayDish));
		
		Category categoryJuices = new Category("Jugos", true);
		this.categoryRepository.save(categoryJuices);
		this.productRepository.save(new Product("Naranja", BigDecimal.valueOf(45.00), "", true, false, categoryJuices));
		this.productRepository.save(new Product("Naranja y Frutilla", BigDecimal.valueOf(45.00), "", true, false, categoryJuices));
		this.productRepository.save(new Product("Pomelo", BigDecimal.valueOf(45.00), "", true, false, categoryJuices));
		this.productRepository.save(new Product("Sandía y frutilla", BigDecimal.valueOf(45.00), "", true, false, categoryJuices));

		
		Category categoryPie = new Category("Tarta", true);
		this.categoryRepository.save(categoryPie);
		this.productRepository.save(new Product("Arroz Yamani", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Atún", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Berenjena", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Brocolli y Queso Azul", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Calabaza", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Caprese", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Cebolla y Queso", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Cebolla y Roquefort", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Hongos", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Jamon y Queso", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Pollo y Puerro", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Ratatoulli", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Verdura", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Zapallito", BigDecimal.valueOf(95.00), "", true, false, categoryPie));
		this.productRepository.save(new Product("Zuccini", BigDecimal.valueOf(95.00), "", true, false, categoryPie));

		Category categoryDesserts = new Category("Postres", true);
		this.categoryRepository.save(categoryDesserts);
		this.productRepository.save(new Product("creme brulee", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("postre oreo", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("chocotorta", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("Cheesecake", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("Clafoutis", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("Carrot cake", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("panqueques con DDL", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("Arroz con leche", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("Manjar de durazno", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("Chocolate y naranja", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));
		this.productRepository.save(new Product("Frutas", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts));

		
		Category categoryColdSandwiches = new Category("Sandwich Frio", true);
		this.categoryRepository.save(categoryColdSandwiches);
		this.productRepository.save(new Product("Pollo y Curry", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches));
		this.productRepository.save(new Product("Salmon", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches));
		this.productRepository.save(new Product("Salmon Crudo y Brie", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches));
		this.productRepository.save(new Product("Vegetariano", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches));
		this.productRepository.save(new Product("Wrap Clasico", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches));
		this.productRepository.save(new Product("Wrap de Atun", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches));


		Category categoryDrinks = new Category("Bebidas", true);
		this.categoryRepository.save(categoryDrinks);
		this.productRepository.save(new Product("Pepsi Comun", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("Pepsi Light", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("Pepsi Black", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("7 up comun", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("7 up free", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("h20 citrus", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("h20 limonet", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("PDT Pomelo", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("PDT Pomelo free", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));
		this.productRepository.save(new Product("Agua con Gas", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks));


	}
}