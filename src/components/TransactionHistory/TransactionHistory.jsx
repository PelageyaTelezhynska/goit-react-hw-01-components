import PropTypes from 'prop-types';
import { capitalazeFirstLetter } from 'capitalazeFirstLetter';
import { Table, Thead, Th, TrList } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>TYPE</Th>
          <Th>AMOUNT</Th>
          <Th>CURRENCY</Th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TrList key={id}>
            <td>{capitalazeFirstLetter(type)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TrList>
        ))}
      </tbody>
    </Table>
  );
};
