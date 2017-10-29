window.ListOrderRow = React.createClass({
    
    render: function() {
    return (
        <tr>
            <td>{this.props.order.code}</td>
            <td>{!this.props.order.status ? 'Sin confirmar': 'Confirmado'}</td>
            <td>{this.props.order.items.length}</td>
            <td>{this.props.order.date}</td>
            <td>
                <a href='#'
                    onClick={() => this.props.changeAppMode('readOne', this.props.order.id, this.props.order.items)}
                    className='btn btn-info m-r-1em'> Ver Pedido
                </a>
            </td>
        </tr>
        );
    }
});