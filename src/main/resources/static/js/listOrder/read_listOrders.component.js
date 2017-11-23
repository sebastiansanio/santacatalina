window.ReadListOrdersComponent = React.createClass({
    getInitialState: function() {
        return {
            orders: [],
            numberPage:0,
            code:'',
            totalElements:0
        };
    },
    
    loadOrdersFromServer: function (numberPage,code) {
	    var self = this;
	    if(code == '' ){
	    		var url = "/api/orders?page="+numberPage+"&size=100"
	    }else{
	    		var url = "/api/orders/search/findByCodeContainingIgnoreCase?code="+code+"&size=100"
	    }
	    $.ajax({
	    		type: "GET",
	        contentType: "application/json",
	      url: url
	    }).then(function (data) {
	      self.setState({orders: data._embedded.orders});
	      if(code == '' ){
	      	self.setState({totalElements: data.page.totalElements});
	      }
	    });
	  },
 
    componentDidMount: function() {
    		this.loadOrdersFromServer(this.state.numberPage,this.state.code);
    },
    
     changeNumberPage: function(newNumberPage){
        this.loadOrdersFromServer(newNumberPage, '');
        this.setState({numberPage: newNumberPage});
        this.setState({code: ''});
        
    },
    
    changeCode: function(newCode){
    		this.loadOrdersFromServer(this.state.numberPage,newCode);
        this.setState({code: newCode});
    },
    
    
 
    render: function() {
        // list of products
        var filteredListOrders = this.state.orders;
        $('.page-header h1').text('Pedidos');
 
        return (
            <div className='overflow-hidden'>
                <SearchFiltered changeAppMode={this.props.changeAppMode} code={this.state.code}  changeCode={this.changeCode} />
	        		
 				
                <ListOrdersTable
                    listOrders={filteredListOrders}
                    changeAppMode={this.props.changeAppMode} />
            	    
            	    <Pagination numberPage={this.state.numberPage}  totalElements={this.state.totalElements} changeNumberPage={this.changeNumberPage}/>
              
	        		<a href="export/excel">Descarga excel</a>
              </div> 
        );
    }
});