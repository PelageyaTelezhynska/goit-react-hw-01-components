import PropTypes from 'prop-types';
import { Status, Photo, Name } from './FriendListItem.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Photo className="avatar" src={avatar} alt={name} />
      <Name>{name}</Name>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
