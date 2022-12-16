import PropTypes from 'prop-types';
import { Friend } from '../FriendListItem/FriendListItem';
import { ListOfFriends, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Friend friend={friend} />
        </FriendItem>
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
