import Container from 'components/Container/Container';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import friend from '../friends.json';
import user from '../user.json';
import statisticalData from '../data.json';
import transactions from '../transactions.json';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friend} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
}
export default App;
