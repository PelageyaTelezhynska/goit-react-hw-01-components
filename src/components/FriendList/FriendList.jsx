import PropTypes from 'prop-types';
import { Friend } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friendList }) => {
  return (
    <ul>
      {friendList.map(friend => {
        <li key={friend.id}>{Friend}</li>;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
