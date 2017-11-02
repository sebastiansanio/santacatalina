window.ProductRow = React.createClass({
	
	onSave: function(e){
	    var form_data={
	        id: this.props.product.id,
	        name: this.props.product.name,
	        description: this.props.product.description,
	        price: this.props.product.price,
	        active: jQuery(e.target).is(":checked"),
	        image:this.props.product.image,
	        category:{
	        		href:this.props.product._links.category.href
	        }
	    };
	    
	    $.ajax({
	        type: "PUT",
	        url: "/api/products/"+this.props.product.id,
	        contentType: "application/json",
	        data: JSON.stringify(form_data),
	        success : function(response) {
		        this.setState({successUpdate: "El producto fue actualizado correctamente"});
		    
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successUpdate: "No se pudo actualizar el producto"});
	            console.log(xhr, resp, text);
	        }
	    });
	    
	    this.props.changeAppMode('read', this.props.product.id)
	},
    
    render: function() {
    return (
        <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>${parseFloat(this.props.product.price).toFixed(2)}</td>
            <td>{this.props.product.active ? 'Habilitado':'Deshabilitado'}</td>
            <td>{this.props.product.category.name}</td>
            <td><input 
		    		type="checkbox" 
	        		name="active"
	        		id="active"
	        		className='form-control'
	        		defaultChecked={this.props.product.active}
	        		onChange={this.onSave}/></td>
            <td>
                <a href='#'
                    onClick={() => this.props.changeAppMode('readOne', this.props.product.id)}
                    className='btn btn-info m-r-1em'> Ver
                </a>
                <a href='#'
                    onClick={() => this.props.changeAppMode('update', this.props.product.id)}
                    className='btn btn-primary m-r-1em'> Editar
                </a>
            </td>
        </tr>
        );
    }
});