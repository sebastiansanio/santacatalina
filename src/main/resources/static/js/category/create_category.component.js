window.CreateCategoryComponent = React.createClass({
	getInitialState: function() {
	    return {
	        name: '',
	        image:null,
	        successCreation: null
	    };
	},
	
	 
	 
	onNameChange: function(e) {
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
	    }
	    reader.readAsArrayBuffer(fileData)
	    
	},
	 
	
	onSave: function(e){
	 
	    var form_data={
	        name: this.state.name,
	        image:document.getElementById("image").value
	    };
	    
	    
	    $.ajax({
	        type: "POST",
	        url: "/api/categories",
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
		                <td>
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