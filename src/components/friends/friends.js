import PropTypes from 'prop-types';
import s from './friends.module.css';
import FriendListItem from './friendListItem';

function FriendList ({friends}) {
    return(
        <ul className={s.friend_list}>
            {friends.map(friend => (
        <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
      ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

export default FriendList;
