window.UpdateCategoryComponent = React.createClass({
	getInitialState: function() {
	    return {
	        id: 0,
	        name: '',
	        successUpdate: null
	       
	    };
	},
	
	  loadCategory: function(){
		  var categoryId = this.props.categoryId;
		    $.ajax({
		        type: "GET",
		        url: "/api/categories/"+categoryId,
		        contentType: "application/json",
		        success : function(product) {
		        		this.setState({id: product.id});
		            this.setState({name: product.name});
		           
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
	},
	 
	
	onSave: function(e){
	 
	    var form_data={
	        id: this.state.id,
	        name: this.state.name,
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