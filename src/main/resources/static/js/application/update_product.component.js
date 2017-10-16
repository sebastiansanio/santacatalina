window.UpdateProductComponent = React.createClass({
	getInitialState: function() {
	    return {
	        categories: [],
	        selectedCategoryId: 0,
	        id: 0,
	        name: '',
	        description: '',
	        price: 0,
	        successUpdate: null,
	        urlCategory:''
	       
	    };
	},
	
	  loadProduct: function(){
		  var productId = this.props.productId;
		    $.ajax({
		        type: "GET",
		        url: "http://localhost:8080/api/products/"+productId,
		        contentType: "application/json",
		        success : function(product) {
		        		this.setState({id: product.id});
		            this.setState({name: product.name});
		            this.setState({description: product.description});
		            this.setState({price: product.price});
		            this.setState({urlCategory: product._links.category.href});
		           
		        }.bind(this),
		        error: function(xhr, resp, text){
		            console.log(xhr, resp, text);
		        }
		    });
	  },
	 
	 

	  
	  loadCategories: function () {
		  var self = this;
	 	 	$.ajax({
		        type: "GET",
		        url: "http://localhost:8080/api/products",
		        contentType: "application/json",
		        success : function(data) {
		        	 this.setState({
		        		 categories: data._embedded.products
		 	        });
		        }.bind(this),
		        error: function(xhr, resp, text){
		            console.log(xhr, resp, text);
		        }
		    });
		  },
	  
	
	componentDidMount: function(){
	 
	    this.loadProduct();
	    this.loadCategories();
	    
	    $('.page-header h1').text('Read Product');
	},
	 
	
	onCategoryChange: function(e){
	    this.setState({urlCategory: e.target.value});
	},
	 
	onNameChange: function(e){
	    this.setState({name: e.target.value});
	},
	 
	onDescriptionChange: function(e){
	    this.setState({description: e.target.value});
	},
	 
	onPriceChange: function(e){
	    this.setState({price: e.target.value});
	},
	
	onSave: function(e){
	 
	    var form_data={
	        id: this.state.id,
	        name: this.state.name,
	        description: this.state.description,
	        price: this.state.price,
	        category:{
	        		href:this.state.urlCategory
	        }
	    };
	    
	   
	   
	   
	    
	    $.ajax({
	        type: "PUT",
	        url: "http://localhost:8080/api/products/"+this.state.id,
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
	    
	    event.preventDefault();
	 
	},
	 
	render: function() {
		var map = [];
		var categoriesOptions = this.state.categories.map(function(category){
			alert(jQuery.inArray(category.category.name, map ))
			if(jQuery.inArray( category.category.name, map )== -1){
				map.push(category.category.name);
				alert(map)
				return (
						<option key={category._links.category.href} value={category._links.category.href}>{category.category.name}</option>
				);
			}else{
				
			}
	    });
	 
	    return (
	        <div>
	            {
	                this.state.successUpdate == "El producto fue actualizado correctamente" ?
	                    <div className='alert alert-success'>
	                			El producto fue actualizado correctamente
	                    </div>
	                : null
	            }
	 
	            {
	                this.state.successUpdate == "No se pudo actualizar el producto" ?
	                    <div className='alert alert-danger'>
	                       No se pudo actualizar el producto
	                    </div>
	                : null
	            }
	 
	            <a href='#'
	                onClick={() => this.props.changeAppMode('read')}
	                className='btn btn-primary margin-bottom-1em'>
	                Read Products
	            </a>
	 
	            <form>
	                <table className='table table-bordered table-hover'>
	                    <tbody>
	                    <tr>
	                        <td>Name</td>
	                        <td>
	                            <input
	                                type='text'
	                                className='form-control'
	                                value={this.state.name}
	                                required
	                                onChange={this.onNameChange} />
	                        </td>
	                    </tr>
	 
	                    <tr>
	                        <td>Description</td>
	                        <td>
	                            <textarea
	                                type='text'
	                                className='form-control'
	                                required
	                                value={this.state.description}
	                                onChange={this.onDescriptionChange}></textarea>
	                        </td>
	                    </tr>
	 
	                    <tr>
	                        <td>Price ($)</td>
	                        <td>
	                            <input
	                                type='number'
	                                step="0.01"
	                                className='form-control'
	                                value={this.state.price}
	                                required
	                                onChange={this.onPriceChange}/>
	                        </td>
	                    </tr>
	 
	                    <tr>
	                        <td>Category</td>
	                        <td>
	                            <select
	                                onChange={this.onCategoryChange}
	                                className='form-control'
	                                value={this.state.urlCategory}>
	                                <option>Select category...</option>
	                                {categoriesOptions}
	                                </select>
	                        </td>
	                    </tr>
	 
	                    <tr>
	                        <td></td>
	                        <td>
	                            <button
	                                className='btn btn-primary'
	                                onClick={this.onSave}>Save Changes</button>
	                        </td>
	                    </tr>
	 
	                    </tbody>
	                </table>
	            </form>
	        </div>
	    );
	}
});