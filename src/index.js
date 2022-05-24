import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import PropTypes from 'prop-types';
// import Profile from './components/user';
// import datauser from './components/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const data = datauser;


// const data = {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }


// function Profile(props) {
//   console.log(props)
// return (<div class="profile">
// <div class="description">
//   <img
//     src={props.avatar}
//     alt="User avatar"
//     class="avatar"
//   />
//   <p class="name">{props.username}</p>
//   <p class="tag">{props.tag}</p>
//   <p class="location">{props.location}</p>
// </div>

// <ul class="stats">
//   <li>
//     <span class="label">followers: {props.stats.followers}</span>
//     <span class="quantity">1000</span>
//   </li>
//   <li>
//     <span class="label">views: {props.stats.views}</span>
//     <span class="quantity">2000</span>
//   </li>
//   <li>
//     <span class="label">likes: {props.stats.likes}</span>
//     <span class="quantity">3000</span>
//   </li>
// </ul>
// </div>
// )};
// console.log(profileEl)


// ReactDOM.createRoot(document.getElementById('root')).render(<Profile
//   username={data.username}
//   tag={data.tag}
//   location={data.location}
//   avatar={data.avatar}
//   stats={data.stats}
// />);

// ReactDOM.render(<Profile
//   username={data.username}
//   tag={data.tag}
//   location={data.location}
//   avatar={data.avatar}
//   stats={data.stats}
// />);

// деструктуризація !!!