window.CategoriesTable = React.createClass({
    render: function() {
 
    var rows = this.props.categories.map(function(category, i) {
            return (
                <CategoryRow
                    key={i}
                    category={category}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
 
        return(
            !rows.length
                ? <div className='alert alert-danger'>No categories found.</div>
                :
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});