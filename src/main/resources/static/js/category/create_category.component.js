window.CreateCategoryComponent = React.createClass({
	getInitialState: function() {
	    return {
	        name: '',
	        successCreation: null
	    };
	},
	
	 
	 
	onNameChange: function(e) {
	    this.setState({name: e.target.value});
	},
	 
	
	onSave: function(e){
	 
	    var form_data={
	        name: this.state.name,
	    };
	    
	    
	    $.ajax({
	        type: "POST",
	        url: "http://localhost:8080/api/categories",
	        contentType: "application/json",
	        data: JSON.stringify(form_data),
	        success : function(response) {
		        this.setState({successCreation: "La categoria fue creada correctamente"});
		        this.setState({name: ""});
	            this.setState({description: ""});
	            this.setState({price: ""});
		    
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successCreation: "No se pudo crear la categoria"});
	            console.log(xhr, resp, text);
	        }
	    });
	    event.preventDefault();
	},
	render: function() {
		
		 
	    return (
	    <div>
	        {
	 
	            this.state.successCreation == "La categoria fue creada correctamente" ?
	                <div className='alert alert-success'>
	            			La categoria fue creada correctamente
	                </div>
	            :  null
	        }
	 
	        {
	 
	            this.state.successCreation == "No se pudo crear la categoria" ?
	                <div className='alert alert-danger'>
	            			No se pudo crear la categoria"
	                </div>
	            : null
	        }
	 
	        <a href='#'
	            onClick={() => this.props.changeAppMode('read')}
	            className='btn btn-primary margin-bottom-1em'> Listar Categorias
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
	                        onClick={this.onSave}>Save</button>
	                    </td>
	                </tr>
	                </tbody>
	            </table>
	        </form>
	    </div>
	    );
	}
});