window.ListOrderRow = React.createClass({

	onSave: function(e){
	    var form_data={
	        code: this.props.order.code,
	        status: jQuery(e.target).is(":checked"),
	        number: this.props.order.number,
	        date: this.props.order.date
	    };
	    
	    $.ajax({
	        type: "PUT",
	        url: "/api/orders/"+this.props.order.id,
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
	    
	    this.props.changeAppMode('read', this.props.order.id)
	},
    
    render: function() {
    return (
        <tr>
            <td>{this.props.order.code}</td>
            <td>{!this.props.order.status ? 'Sin confirmar': 'Confirmado'}</td>
            <td>{this.props.order.items.length}</td>
            <td><input 
		    		type="checkbox" 
		    		name="active"
		    		id="active"
		    		className='form-control'
		    		checked={this.props.order.status}
		    		onChange={this.onSave}/></td>
            <td>{this.props.order.date? this.props.order.date.substring(0,10): null}</td>
            <td>
                <a href='#'
                    onClick={() => this.props.changeAppMode('readOne', this.props.order.id, this.props.order.items)}
                    className='btn btn-info m-r-1em'> Ver Pedido
                </a>
            </td>
        </tr>
        );
    }
});