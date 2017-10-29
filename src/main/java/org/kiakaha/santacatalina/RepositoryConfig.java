package org.kiakaha.santacatalina;

import org.kiakaha.santacatalina.model.Category;
import org.kiakaha.santacatalina.model.Order;
import org.kiakaha.santacatalina.model.OrderItem;
import org.kiakaha.santacatalina.model.Product;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Product.class);
        config.exposeIdsFor(Category.class);
        config.exposeIdsFor(Order.class);
        config.exposeIdsFor(OrderItem.class);
    }
}