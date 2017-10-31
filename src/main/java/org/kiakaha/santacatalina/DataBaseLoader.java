package org.kiakaha.santacatalina;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.kiakaha.santacatalina.model.Category;
import org.kiakaha.santacatalina.model.Order;
import org.kiakaha.santacatalina.model.OrderItem;
import org.kiakaha.santacatalina.model.Product;
import org.kiakaha.santacatalina.repositories.CategoryRepository;
import org.kiakaha.santacatalina.repositories.OrderItemRepository;
import org.kiakaha.santacatalina.repositories.OrderRepository;
import org.kiakaha.santacatalina.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataBaseLoader implements CommandLineRunner {

	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;
	private final OrderRepository orderRepository;
	private final OrderItemRepository orderItemRepository;

	@Autowired
	public DataBaseLoader(OrderItemRepository orderItemRepository,ProductRepository productRepository, CategoryRepository categoryRepository,OrderRepository orderRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
		this.orderRepository = orderRepository;
		this.orderItemRepository = orderItemRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
		byte[] a2 = new byte[1];
		Category categorySalad = new Category("Ensalada", true,a2);
		this.categoryRepository.save(categorySalad);
		this.productRepository.save(new Product("Cesar", BigDecimal.valueOf(95.00), "", true, false, categorySalad,a2));
		this.productRepository.save(new Product("Espinaca", BigDecimal.valueOf(95.00), "", true, false, categorySalad,a2));
		this.productRepository.save(new Product("Jamón y palitos", BigDecimal.valueOf(95.00), "", true, false, categorySalad,a2));
		this.productRepository.save(new Product("Roquefort", BigDecimal.valueOf(95.00), "", true, false, categorySalad,a2));
		this.productRepository.save(new Product("Salmón", BigDecimal.valueOf(95.00), "", true, false, categorySalad,a2));

		
		Category categoryHotSandwiches = new Category("Sandwich Calientes", true,a2);
		this.categoryRepository.save(categoryHotSandwiches);
		this.productRepository.save(new Product("Bondiola", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches,a2));
		this.productRepository.save(new Product("Hamburguesa Veggie", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches,a2));
		this.productRepository.save(new Product("Hojaldre de Salmon", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches,a2));
		this.productRepository.save(new Product("Salchichas Alemanas", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches,a2));
		this.productRepository.save(new Product("Tapa de Asado", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches,a2));
		this.productRepository.save(new Product("Wrap de Pollo", BigDecimal.valueOf(95.00), "", true, false, categoryHotSandwiches,a2));

		Category categoryDayDish = new Category("Plato del día", true,a2);
		this.categoryRepository.save(categoryDayDish);
		this.productRepository.save(new Product("Plato del día", BigDecimal.valueOf(95.00), "", true, false, categoryDayDish,a2));
		
		Category categoryJuices = new Category("Jugos", true,a2);
		this.categoryRepository.save(categoryJuices);
		this.productRepository.save(new Product("Naranja", BigDecimal.valueOf(45.00), "", true, false, categoryJuices,a2));
		this.productRepository.save(new Product("Naranja y Frutilla", BigDecimal.valueOf(45.00), "", true, false, categoryJuices,a2));
		this.productRepository.save(new Product("Pomelo", BigDecimal.valueOf(45.00), "", true, false, categoryJuices,a2));
		this.productRepository.save(new Product("Sandía y frutilla", BigDecimal.valueOf(45.00), "", true, false, categoryJuices,a2));

		
		Category categoryPie = new Category("Tarta", true,a2);
		this.categoryRepository.save(categoryPie);
		this.productRepository.save(new Product("Arroz Yamani", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Atún", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Berenjena", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Brocolli y Queso Azul", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Calabaza", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Caprese", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Cebolla y Queso", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Cebolla y Roquefort", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Hongos", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Jamon y Queso", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Pollo y Puerro", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Ratatoulli", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Verdura", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Zapallito", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));
		this.productRepository.save(new Product("Zuccini", BigDecimal.valueOf(95.00), "", true, false, categoryPie,a2));

		Category categoryDesserts = new Category("Postres", true,a2);
		this.categoryRepository.save(categoryDesserts);
		this.productRepository.save(new Product("creme brulee", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("postre oreo", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("chocotorta", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("Cheesecake", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("Clafoutis", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("Carrot cake", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("panqueques con DDL", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("Arroz con leche", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("Manjar de durazno", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("Chocolate y naranja", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));
		this.productRepository.save(new Product("Frutas", BigDecimal.valueOf(40.00), "", true, false, categoryDesserts,a2));

		
		Category categoryColdSandwiches = new Category("Sandwich Frio", true,a2);
		this.categoryRepository.save(categoryColdSandwiches);
		this.productRepository.save(new Product("Pollo y Curry", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches,a2));
		this.productRepository.save(new Product("Salmon", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches,a2));
		this.productRepository.save(new Product("Salmon Crudo y Brie", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches,a2));
		this.productRepository.save(new Product("Vegetariano", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches,a2));
		this.productRepository.save(new Product("Wrap Clasico", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches,a2));
		Product product = new Product("Wrap de Atun", BigDecimal.valueOf(95.00), "", true, false, categoryColdSandwiches,a2);
		this.productRepository.save(product);


		Category categoryDrinks = new Category("Bebidas", true,a2);
		this.categoryRepository.save(categoryDrinks);
		this.productRepository.save(new Product("Pepsi Comun", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("Pepsi Light", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("Pepsi Black", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("7 up comun", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("7 up free", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("h20 citrus", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("h20 limonet", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("PDT Pomelo", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("PDT Pomelo free", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		this.productRepository.save(new Product("Agua con Gas", BigDecimal.valueOf(40.00), "", true, false, categoryDrinks,a2));
		
		for(int i =0 ; i<100 ; i++) {
			List<OrderItem> listItems = new ArrayList<OrderItem>();
			Order order = new Order("IV"+i,false,new Date(),i);
			this.orderRepository.save(order);
			for(int j = 0 ; j< 4; j++) {
				OrderItem orderItem = new OrderItem(BigDecimal.valueOf(1.00),BigDecimal.valueOf(40.00),product.getName(),order);
				this.orderItemRepository.save(orderItem);
				listItems.add(orderItem);
			}
			order.setItems(listItems);
			this.orderRepository.save(order);
		}

	}
}