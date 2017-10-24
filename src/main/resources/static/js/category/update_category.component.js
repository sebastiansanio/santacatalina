window.UpdateCategoryComponent = React.createClass({
	getInitialState: function() {
	    return {
	        id: 0,
	        name: '',
	        image:null,
	        successUpdate: null
	       
	    };
	},
	
	  loadCategory: function(){
		  var categoryId = this.props.categoryId;
		    $.ajax({
		        type: "GET",
		        url: "/api/categories/"+categoryId,
		        contentType: "application/json",
		        success : function(category) {
		        		this.setState({id: category.id});
		            this.setState({name: category.name});
			        document.getElementById("ItemPreview").src = "data:image/png;base64," + category.image;
		        }.bind(this),
		        error: function(xhr, resp, text){
		            console.log(xhr, resp, text);
		        }
		    });
	  },
	 
	  
	
	componentDidMount: function(){
	 
	    this.loadCategory();
	    
	    $('.page-header h1').text('Categoria');
	},
	 
	
	onNameChange: function(e){
	    this.setState({name: e.target.value});
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
	        image:document.getElementById("image").value
	    };
	    
	    $.ajax({
	        type: "PUT",
	        url: "/api/categories/"+this.state.id,
	        contentType: "application/json",
	        data: JSON.stringify(form_data),
	        success : function(response) {
		        this.setState({successUpdate: "La categoria fue actualizada correctamente"});
		    
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successUpdate: "No se pudo actualizar la categoria"});
	            console.log(xhr, resp, text);
	        }
	    });
	    
	    event.preventDefault();
	 
	},
	 
	render: function() {
	 
	    return (
	        <div>
	            {
	                this.state.successUpdate == "La categoria fue actualizada correctamente" ?
	                    <div className='alert alert-success'>
	                			La categoria fue actualizada correctamente
	                    </div>
	                : null
	            }
	 
	            {
	                this.state.successUpdate == "No se pudo actualizar la categoria" ?
	                    <div className='alert alert-danger'>
	                       No se pudo actualizar la categoria
	                    </div>
	                : null
	            }
	 
	            <a href='#'
	                onClick={() => this.props.changeAppMode('read')}
	                className='btn btn-primary margin-bottom-1em'>
	                Listas categorias
	            </a>
	                <input type="hidden" name="image" id="image" value={this.state.image} />
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