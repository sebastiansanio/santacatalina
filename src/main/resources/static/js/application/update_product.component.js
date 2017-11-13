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
	        image:null,
	        urlCategory:''
	       
	    };
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
		            document.getElementById("ItemPreview").src = "data:image/png;base64," + product.image;
		            this.setState({urlCategory: product._embedded.category.id});
		           
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
		        url: "/api/products?size=1000",
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
	    
	    $('.page-header h1').text('Listar Productos');
	},
	 
	
	onCategoryChange: function(e){
	    this.setState({urlCategory: e.target.value});
	    this.setState({image: document.getElementById("image").value});
	},
	 
	onNameChange: function(e){
	    this.setState({name: e.target.value});
	    this.setState({image: document.getElementById("image").value});
	},
	 
	onDescriptionChange: function(e){
	    this.setState({description: e.target.value});
	    this.setState({image: document.getElementById("image").value});
	},
	
	onActiveChange: function(e) {
		if( $('#active').prop('checked') ) {
			this.setState({active: true});
		}else{
			this.setState({active: false});
		}
	    this.setState({image: document.getElementById("image").value});
	},
	 
	onPriceChange: function(e){
	    this.setState({price: e.target.value});
	    this.setState({image: document.getElementById("image").value});
	},
	
	onImageChange: function(e) {
		var fileData = new Blob([e.target.files[0]]);
	    var reader = new FileReader();
	    reader.onload = function() {
	      var arrayBuffer = reader.result
	      var bytes = new Uint8Array(arrayBuffer);
	      var b64encoded = btoa(String.fromCharCode.apply(null, bytes));
	      document.getElementById("image").value =  b64encoded.toString();
	      document.getElementById("ItemPreview").src = "data:image/png;base64," + b64encoded.toString();
	    }
	    reader.readAsArrayBuffer(fileData)
	    
	},
	
	onSave: function(e){
	 
	    var form_data={
	        id: this.state.id,
	        name: this.state.name,
	        description: this.state.description,
	        price: this.state.price,
	        active: this.state.active,
	        image:document.getElementById("image").value
	    };
	    
	    
	    $.ajax({
	        type: "PUT",
	        url: "/api/products/"+this.state.id,
	        contentType: "application/json",
	        data: JSON.stringify(form_data),
	        success : function(response) {
		        	 $.ajax({
		     	        type: "PUT",
		     	        url: "/api/products/"+this.state.id+"/category",
		     	        contentType: "text/uri-list",
		     	        data: "http://localhost:8080/api/categories/"+this.state.urlCategory,
		     	        success : function(response) {
		     		        this.setState({successUpdate: "El producto fue actualizado correctamente"});
		     		    
		     	        }.bind(this),
		     	        error: function(xhr, resp, text){
		     	        		this.setState({successUpdate: "No se pudo actualizar el producto"});
		     	            console.log(xhr, resp, text);
		     	        }
		     	    });
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
			if(jQuery.inArray( category.category.name, map )== -1){
				map.push(category.category.name);
				return (
						<option key={category.category.id} value={category.category.id}>{category.category.name}</option>
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
	               Listar Productos
	            </a>
	                
	             <input type="hidden" name="image" id="image" value={this.state.image} />
	            <form>
	                <table className='table table-bordered table-hover'>
	                    <tbody>
	                    <tr>
	                        <td>Nombre</td>
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
	                        <td>Descripción</td>
	                        <td>
	                            <textarea
	                                type='text'
	                                className='form-control'
	                                value={this.state.description}
	                                onChange={this.onDescriptionChange}></textarea>
	                        </td>
	                    </tr>
	 
	                    <tr>
	                        <td>Precio ($)</td>
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
	                        <td>Categoria</td>
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
                        <td>Habilitado</td>
                        <td>
                        <input 
		                		type="checkbox" 
		                		name="active"
		                		id="active"
		                		className='form-control'
		                		onChange={this.onActiveChange}/>
                        </td>
                    </tr>
	                    
	                    <tr>
                        <td>Imagen</td>
                        	<td><img id="ItemPreview" src=""/>
	        	                <input 
	        	                className='form-control' 
	        	                	onChange={this.onImageChange} 
	        	                accept=".jpg, .jpeg, .png"
	        	                type="file" 
	        	                	name="img"/>
                        </td>
                        </tr>
	 
	                    <tr>
	                        <td></td>
	                        <td>
	                            <button
	                                className='btn btn-primary'
	                                onClick={this.onSave}>Actualizar</button>
	                        </td>
	                    </tr>
	 
	                    </tbody>
	                </table>
	            </form>
	        </div>
	    );
	}
});