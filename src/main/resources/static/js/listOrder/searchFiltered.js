window.SearchFiltered = React.createClass({
	onCodeChange: function(e) {
	    this.props.changeCode(e.target.value);
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
			            value={this.props.code}
			            required
			            onChange={this.onCodeChange} 
		                />
	        		  <span className="input-group-addon" id="basic-addon1">Codigo</span>
	        		</div>
        		  </div>
        		</div>
        );
    }
});