import PropTypes from 'prop-types';
import s from './friends.module.css';


function FriendListItem({ avatar, name, isOnline }) {
    return (
      <li>
        <span className={s.status} style={{color: isOnline ? 'green' : 'red'}}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
      </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;
  