window.ListItemsTable = React.createClass({
	getInitialState: function() {
	    return {
	        code: '',
	        date: null,
	        number: 0
	    };
	},
	
	loadOrder: function () {
		$.ajax({
	        type: "GET",
	        url: "/api/orders/"+this.props.orderId,
	        contentType: "application/json",
	        success : function(order) {
	        		this.setState({code: order.code});
	            this.setState({date: order.date});
	            this.setState({number: order.number});
	        }.bind(this),
	        error: function(xhr, resp, text){
	            console.log(xhr, resp, text);
	        }
	    });
	},
	
	componentDidMount: function(){
	    this.loadOrder();
	},

	onConfirm: function(e){
		
	    var form_data={
	        id: this.props.orderId,
	        code: this.state.code,
	        date: this.state.date,
	        number: this.state.number,
	        status: true,
	    };
	    
	    $.ajax({
	        type: "PUT",
	        url: "/api/orders/"+this.props.orderId,
	        contentType: "application/json",
	        data: JSON.stringify(form_data),
	        success : function(response) {
		        this.setState({successUpdate: "El pedido fue actualizado correctamente"});
		    
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successUpdate: "No se pudo actualizar el pedido"});
	            console.log(xhr, resp, text);
	        }
	    });
	    
	    event.preventDefault();
	 
	},
	
	onNotConfirm: function(e){
			
		    var form_data={
		        id: this.props.orderId,
		        code: this.state.code,
		        date: this.state.date,
		        number: this.state.number,
		        status: false,
		    };
		    
		    $.ajax({
		        type: "PUT",
		        url: "/api/orders/"+this.props.orderId,
		        contentType: "application/json",
		        data: JSON.stringify(form_data),
		        success : function(response) {
			        this.setState({successUpdate: "El pedido fue actualizado correctamente"});
			    
		        }.bind(this),
		        error: function(xhr, resp, text){
		        		this.setState({successUpdate: "No se pudo actualizar el pedido"});
		            console.log(xhr, resp, text);
		        }
		    });
		    
		    event.preventDefault();
		 
		},
	
    render: function() {
    var rows = this.props.items.map(function(item, i) {
            return (
                <ListItemRow
                    key={i}
                    item={item}
                		orderId={this.props.orderId}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
 
        return(
            !rows.length
                ? <div className='alert alert-danger'>No se encontraron pedidos.</div>
                :
                	<div>
                
	                <table className='table table-striped table-hover'>
	                    <thead>
	                        <tr>
	                            <th>Cantidad</th>
	                            <th>Precio</th>
	                            <th>Nombre</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        {rows}
	                    </tbody>
	                    
	                </table>
	                
	                <button
	                className='btn btn-primary'
	                	onClick={this.onConfirm}>Confirmar</button>
	                	
	                	<button
	                	className='btn btn-danger'
	                		onClick={this.onNotConfirm}>Desconfirmar</button>
                </div>
                
                
        );
    }
});