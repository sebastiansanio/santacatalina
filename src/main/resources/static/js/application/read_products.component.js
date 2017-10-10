window.ReadProductsComponent = React.createClass({
    getInitialState: function() {
        return {
            products: []
        };
    },
    
    loadProductsFromServer: function () {
	    var self = this;
	    $.ajax({
	      url: "http://localhost:8080/api/products"
	    }).then(function (data) {
	      self.setState({products: data._embedded.products});
	    });
	  },
 
    componentDidMount: function() {
    		this.loadProductsFromServer();
    },
 
 
    render: function() {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');
 
        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
 
                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});