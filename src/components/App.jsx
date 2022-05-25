import Profile from "./user";
import datauser from '../components/user.json';

import Statistics from './statistics.js';
import DataStatistics from '../components/data.json';

import friends from "../components/friends.json";
import FriendList from '../components/friends.js';

import TransactionHistory from '../components/transactions.js';
import transactions from '../components/transactions.json';


const data = datauser;
const dataStatistics = DataStatistics;
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} 
    >
      <div><Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
      <Statistics title="Upload stats" stats={dataStatistics} />
      {/* <Statistics stats={OnDataStatistics} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </div>
     
      {/* React homework template */}
    </div>
  );
};


/* <Statistics title="Upload stats" stats={OnDataStatistics.stats} />
<Statistics stats={OnDataStatistics.stats} /> */