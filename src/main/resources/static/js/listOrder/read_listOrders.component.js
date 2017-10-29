window.ReadListOrdersComponent = React.createClass({
    getInitialState: function() {
        return {
            orders: []
        };
    },
    
    loadOrdersFromServer: function () {
	    var self = this;
	    if(this.props.code == '' ){
	    		var url = "/api/orders?size=500"
	    }else{
	    		var url = "/api/orders/search/findByCodeContainingIgnoreCase?code="+this.props.code+"&size=500"
	    }
	    $.ajax({
	    		type: "GET",
	        contentType: "application/json",
	      url: url
	    }).then(function (data) {
	      self.setState({orders: data._embedded.orders});
	    });
	  },
 
    componentDidMount: function() {
    		this.loadOrdersFromServer();
    },
    
     componentDidUpdate: function () {
      this.loadOrdersFromServer();
    },
 
    render: function() {
        // list of products
        var filteredListOrders = this.state.orders;
        $('.page-header h1').text('Pedidos');
 
        return (
            <div className='overflow-hidden'>
                <SearchFiltered changeAppMode={this.props.changeAppMode} code={this.props.code}  changeCode={this.props.changeCode} />
 				
                <ListOrdersTable
                    listOrders={filteredListOrders}
                    changeAppMode={this.props.changeAppMode} />
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});