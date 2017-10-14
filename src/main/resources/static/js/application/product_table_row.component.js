window.ProductRow = React.createClass({
	getInitialState: function() {
        return {
            category: []
        };
    },
    
    loadProductsFromServer: function () {
    	 	var self = this;
	    	$.ajax({
		        type: "GET",
		        url: this.props.product._links.category.href,
		        contentType: "application/json",
		        success : function(category) {
		        	 this.setState({
		        		 category: category
		 	        });
		        }.bind(this),
		        error: function(xhr, resp, text){
		            console.log(xhr, resp, text);
		        }
		    });
	  },
 
    componentDidMount: function() {
    		this.loadProductsFromServer();
    },
    render: function() {
    return (
        <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>${parseFloat(this.props.product.price).toFixed(2)}</td>
            <td>{this.state.category.name}</td>
            <td>
                <a href='#'
                    onClick={() => this.props.changeAppMode('readOne', this.props.product.id)}
                    className='btn btn-info m-r-1em'> Read One
                </a>
                <a href='#'
                    onClick={() => this.props.changeAppMode('update', this.props.product.id)}
                    className='btn btn-primary m-r-1em'> Edit
                </a>
                <a
                    onClick={() => this.props.changeAppMode('delete', this.props.product.id)}
                    className='btn btn-danger'> Delete
                </a>
            </td>
        </tr>
        );
    }
});