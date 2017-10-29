window.ListOrdersTable = React.createClass({
    render: function() {
    var rows = this.props.listOrders.map(function(order, i) {
            return (
                <ListOrderRow
                    key={i}
                    order={order}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
 
        return(
            !rows.length
                ? <div className='alert alert-danger'>No se encontraron pedidos.</div>
                :
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Estado</th>
                            <th>Cantidad Items</th>
                            <th>Fecha</th>
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