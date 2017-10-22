window.ReadProductsComponent = React.createClass({
    getInitialState: function() {
        return {
            products: []
        };
    },
    
    loadProductsFromServer: function () {
	    var self = this;
	    if(this.props.name == '' ){
	    		var url = "/api/products"
	    }else{
	    		var url = "/api/products/search/findByNameContainingIgnoreCase?name="+this.props.name
	    }
	    $.ajax({
	      url: url
	    }).then(function (data) {
	      self.setState({products: data._embedded.products});
	    });
	  },
 
    componentDidMount: function() {
    		this.loadProductsFromServer();
    },
    
     componentDidUpdate: function () {
      this.loadProductsFromServer();
    },
 
    render: function() {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Productos');
 
        return (
            <div className='overflow-hidden'>
                <SearchFiltered changeAppMode={this.props.changeAppMode} name={this.props.name}  changeName={this.props.changeName} />
 				
                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});