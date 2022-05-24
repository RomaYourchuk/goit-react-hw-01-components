// import PropTypes from 'prop-types';


export default function Profile(props) {
            // console.log(props)
        return (<div class="profile">
        <div class="description">
            <img
            src={props.avatar}
            alt="User avatar"
            class="avatar"
            />
            <p class="name">{props.username}</p>
            <p class="tag">{props.tag}</p>
            <p class="location">{props.location}</p>
        </div>
        
        <ul class="stats">
            <li>
            <span class="label">followers: {props.stats.followers}</span>
            <span class="quantity">1000</span>
            </li>
            <li>
            <span class="label">views: {props.stats.views}</span>
            <span class="quantity">2000</span>
            </li>
            <li>
            <span class="label">likes: {props.stats.likes}</span>
            <span class="quantity">3000</span>
            </li>
        </ul>
        </div>
    )
};

// Profile.PropTypes = {
//     username: PropTypes.string
// }