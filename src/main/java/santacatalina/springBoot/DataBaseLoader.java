package santacatalina.springBoot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataBaseLoader implements CommandLineRunner {
 
    private final EmployeeRepository employeeRepository;
    private final ProductRepository productRepository;
 
    @Autowired
    public DataBaseLoader(EmployeeRepository employeeRepository,ProductRepository productRepository) {
        this.employeeRepository = employeeRepository;
        this.productRepository = productRepository;
    }
 
    @Override
    public void run(String... strings) throws Exception {
        this.employeeRepository.save(new Employee("Joe Biden", 45, 5));
        this.employeeRepository.save(new Employee("President Obama", 54, 8));
        this.employeeRepository.save(new Employee("Crystal Mac", 34, 12));
        this.employeeRepository.save(new Employee("James Henry", 33, 2));
        this.productRepository.save(new Product("Tarta jamon y queso", 60.00 , " ",true));
        this.productRepository.save(new Product("Albondigas", 80.00, "",true));
        this.productRepository.save(new Product("Fideos", 90.00, "",true));
        this.productRepository.save(new Product("Tomates", 40.00, "",true));
    }
}