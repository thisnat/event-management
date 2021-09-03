import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Views from './views';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Views.Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
