window.SearchFiltered = React.createClass({
	onNameChange: function(e) {
	    this.props.changeName(e.target.value);
	},
	
    render: function(){
        return (
        		
        		
        		<div className="panel panel-default">
        		  <div className="panel-heading">
        		    <h3 className="panel-title">Filtros</h3>
        		  </div>
        		  <div className="panel-body">
        		  <div className="input-group">
	        		  <input
			            type='text'
			            className='form-control'
			            value={this.props.name}
			            required
			            onChange={this.onNameChange} 
		                />
	        		  <span className="input-group-addon" id="basic-addon1">Nombre</span>
	        		</div>
        		  </div>
        		</div>
        );
    }
});