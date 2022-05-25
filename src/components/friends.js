import PropTypes from 'prop-types';

function FriendList ({friends}) {
    return(
        <ul class="friend-list">
            {friends.map(friend => (
        <li key={friend.id}>
            <span class="status">{friend.siOnline}</span>
            <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p class="name">{friend.name}</p>
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

// function FriendListItem ({avatar, name, isOnline}) {
//     return(
//     <li class="item">
//         {name.map(name => (

//         ))}
//         <span class="status"></span>
//         <img class="avatar" src="" alt="User avatar" width="48" />
//         <p class="name"></p>
//     </li>
//     )
// }