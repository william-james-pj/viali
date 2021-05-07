import Layout from './layout/Layout';
import GlobalStyles from './styles/GlobalStyles';

import history from './services/history';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router history={history}>
      <Layout />
      <GlobalStyles />
    </Router>
  );
}

export default App;
