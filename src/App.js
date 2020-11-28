import Container from './components/Container';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Container bgColor="#E7ECF2">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Container>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Container>

      <Container bgColor="#E7ECF2">
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory transactions={transactions} />
      </Container>
    </div>
  );
}
