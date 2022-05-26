import PropTypes from 'prop-types';
import s from './user.module.css'


export default function Profile(props) {
        return (<div className="profile">
        <div className={s.description}>
            <img
            src={props.avatar}
            alt="User avatar"
            className={s.avatar}
            />
            <p className={s.name}>{props.username}</p>
            <p className={s.tag}>{props.tag}</p>
            <p className={s.location}>{props.location}</p>
        </div>
        
        <ul className={s.stats}>
            <li>
            <span className={s.label}>followers: </span>
            <span className={s.quantity}> {props.stats.followers}</span>
            </li>
            <li>
            <span className={s.label}>views: </span>
            <span className={s.quantity}>{props.stats.views}</span>
            </li>
            <li>
            <span className={s.label}>likes:</span>
            <span className={s.quantity}>{props.stats.likes}</span>
            </li>
        </ul>
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(
        PropTypes.number).isRequired
}