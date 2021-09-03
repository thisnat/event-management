import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Views from './views';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Views.Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
