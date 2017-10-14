window.SearchFiltered = React.createClass({
	onNameChange: function(e) {
	    this.props.changeName(e.target.value);
	},
	
    render: function(){
        return (
            <div>
            <table>
	            <tbody>
	            <tr>
	                <td>Name</td>
	                <td><input
			            type='text'
			            className='form-control'
			            value={this.props.name}
			            required
			            onChange={this.onNameChange} 
		                /></td>
	                <td><span className="glyphicon glyphicon-search"></span></td>
	            </tr>
	            </tbody>
	            </table>
            </div>
        );
    }
});