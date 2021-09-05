import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Views from './views';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Views.Home} />
          <Route exact path="/login" component={Views.Login} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
