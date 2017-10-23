window.CreateProductComponent = React.createClass({
	getInitialState: function() {
	    return {
	    		categories: [],
	        selectedCategoryId: -1,
	        name: '',
	        description: '',
	        price: '',
	        image:null,
	        successCreation: null
	    };
	},
	
	componentDidMount: function() {
		$.ajax({
	        type: "GET",
	        url: "http://localhost:8080/api/categories",
	        contentType: "application/json",
	        success : function(categories) {
	        	 this.setState({
	 	            categories: categories._embedded.categories
	 	        });
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successCreation: "No se pudo crear el producto"});
	            console.log(xhr, resp, text);
	        }
	    });
	},
	 
	onCategoryChange: function(e) {
	    this.setState({selectedCategoryId: e.target.value});
	    this.setState({image: document.getElementById("image").value});
	},
	 
	onNameChange: function(e) {
	    this.setState({name: e.target.value});
	    this.setState({image: document.getElementById("image").value});
	},
	 
	onDescriptionChange: function(e) {
	    this.setState({description: e.target.value});
	    this.setState({image: document.getElementById("image").value});
	},
	 
	onPriceChange: function(e) {
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
	    }
	    reader.readAsArrayBuffer(fileData)
	    
	},
	
	
	onSave: function(e){
	    var form_data={
	        name: this.state.name,
	        description: this.state.description,
	        price: this.state.price,
	        category: this.state.selectedCategoryId,
	        image:document.getElementById("image").value
	    };
	    console.log(JSON.stringify(form_data))
	    $.ajax({
	        type: "POST",
	        url: "http://localhost:8080/api/products",
	        contentType: "application/json",
	        data: JSON.stringify(form_data),
	        success : function(response) {
		        this.setState({successCreation: "El producto fue creado correctamente"});
		        this.setState({name: ""});
	            this.setState({description: ""});
	            this.setState({price: ""});
		    
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successCreation: "No se pudo crear el producto"});
	            console.log(xhr, resp, text);
	        }
	    });
	    
	    event.preventDefault();
	},
	
	  
	render: function() {
		
		// make categories as option for the select tag.
	    var categoriesOptions = this.state.categories.map(function(category){
	        return (
	            <option key={category._links.category.href} value={category._links.category.href}>{category.name}</option>
	        );
	    });
		 
	    return (
	    <div>
	        {
	 
	            this.state.successCreation == "El producto fue creado correctamente" ?
	                <div className='alert alert-success'>
	            El producto fue creado correctamente
	                </div>
	            :  null
	        }
	 
	        {
	 
	            this.state.successCreation == "No se pudo crear el producto" ?
	                <div className='alert alert-danger'>
	                    No se pudo crear el producto
	                </div>
	            : null
	        }
	 
	        <a href='#'
	            onClick={() => this.props.changeAppMode('read')}
	            className='btn btn-primary margin-bottom-1em'> Listar Productos
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
	                        onChange={this.onDescriptionChange}>
	                        </textarea>
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
                        value={this.state.selectedCategoryId}>
                        <option value="-1">Select category...</option>
                        {categoriesOptions}
                        </select>
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
	                        onClick={this.onSave}>Grabar</button>
	                    </td>
	                </tr>
	                </tbody>
	            </table>
	        </form>
	    </div>
	    );
	}
});