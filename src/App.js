import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Views from './views';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Views.Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
