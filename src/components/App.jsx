import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.js';
import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

// import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <GlobalStyle />
    </Container>
  );
};
