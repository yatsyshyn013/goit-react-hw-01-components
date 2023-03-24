import PropTypes from 'prop-types';
import { Table, TableHead, TableItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>

    <tbody>
      {items.map(item => (
          <TableItem key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
          </TableItem>
        ))}          
   
    </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
        
    ).isRequired
}