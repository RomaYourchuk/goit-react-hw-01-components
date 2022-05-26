import PropTypes from 'prop-types';
import s from './friends.module.css';

function FriendList ({friends}) {
    return(
        <ul className={s.friend_list}>
            {friends.map(friend => (
        <li key={friend.id}>
            <span className={s.status} style={{color: friend.isOnline ? 'green' : 'red'}}>{friend.siOnline}</span>
            <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={s.name}>{friend.name}</p>
        </li>
      ))}
        </ul>
    )
}

FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.object,
            siOnline: PropTypes.bool,
        }),
    ),
};

export default FriendList;
