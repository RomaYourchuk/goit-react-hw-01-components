import PropTypes from 'prop-types';


function TransactionHistory({items, children}) {
    return(
        <table class="transaction-history">
             <thead>
             <tr>
             <th>Type</th>
             <th>Amount</th>
             <th>Currency</th>
             </tr>
            </thead>
            {items.map(item => (
                <tbody>
                <tr key={item.id}>
                <td>{children}{item.type}</td>
                <td>{children}{item.amount}</td>
                <td>{children}{item.currency}</td>
                </tr>
            </tbody>
            ))}
            
        </table>
    )
}

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;