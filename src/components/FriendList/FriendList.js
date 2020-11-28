import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './friednList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(person => (
        <FriendListItem
          key={person.id}
          avatar={person.avatar}
          name={person.name}
          isOnline={person.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
