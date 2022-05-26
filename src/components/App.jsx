import Profile from "./user/user";
import datauser from '../components/user.json';

import Statistics from './statistics/statistics.js';
import DataStatistics from '../components/data.json';

import friends from "../components/friends.json";
import FriendList from './friends/friends.js';

import TransactionHistory from './transactions/transactions.js';
import transactions from '../components/transactions.json';

const data = datauser;
const dataStatistics = DataStatistics;
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};


