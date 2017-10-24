window.ReadOneProductComponent = React.createClass({
	getInitialState: function() {
	    return {
	        id: 0,
	        name: '',
	        description: '',
	        price: 0,
	        urlCategory: '',
	        image:'',
	        active:null,
	        category:[]
	    };
	},
	
	loadCategory: function () {
 	 	var self = this;
 	 	$.ajax({
	        type: "GET",
	        url: this.state.urlCategory,
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
	  
	  loadProduct: function(){
		  var productId = this.props.productId;
		    $.ajax({
		        type: "GET",
		        url: "/api/products/"+productId,
		        contentType: "application/json",
		        success : function(product) {
		        		this.setState({id: product.id});
		            this.setState({name: product.name});
		            this.setState({description: product.description});
		            this.setState({price: product.price});
		            this.setState({image: product.image});
		            if(product.active == true){
		            		document.getElementById("active").checked = true;
		            }else{
		            		document.getElementById("active").checked = false;
		            }
		            this.setState({urlCategory: product._links.category.href});
		            document.getElementById("ItemPreview").src = "data:image/png;base64," + product.image;
		            this.loadCategory();
		        }.bind(this),
		        error: function(xhr, resp, text){
		            console.log(xhr, resp, text);
		        }
		    });
	  },
	 
	componentDidMount: function(){
	    this.loadProduct();
	    $('.page-header h1').text('Listar Productos');
	},
	
	 
	render: function() {
		 
	    return (
	        <div>
	            <a href='#'
	                onClick={() => this.props.changeAppMode('read')}
	                className='btn btn-primary margin-bottom-1em'>
	                Listar Productos
	            </a>
	 
	            <form onSubmit={this.onSave}>
	                <table className='table table-bordered table-hover'>
	                    <tbody>
	                    <tr>
	                        <td>Name</td>
	                        <td>{this.state.name}</td>
	                    </tr>
	 
	                    <tr>
	                        <td>Description</td>
	                        <td>{this.state.description}</td>
	                    </tr>
	 
	                    <tr>
	                        <td>Price ($)</td>
	                        <td>${parseFloat(this.state.price).toFixed(2)}</td>
	                    </tr>
	                    
	                    <tr>
                        		<td>Habilitado</td>
                        		<td>
                        		
                        		<input 
                        			type="checkbox" 
                            		name="active"
                            		id="active"
                            		className='form-control'
                            		/>
                            	</td>
                        </tr>
	 
	                    <tr>
	                        <td>Category</td>
	                        <td>{this.state.category.name}</td>
	                    </tr>
	                    
	                    <tr>
                        <td>imagen</td>
                        	<td><img id="ItemPreview" src=""/></td>
                        </tr>
	 
	                    </tbody>
	                </table>
	            </form>
	        </div>
	    );
	}
});
