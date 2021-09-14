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
          <Route path="/login" component={Views.Login} />
          <Route path="/register" component={Views.Register} />
          <Route exact path="/event/:id" component={Views.Event} />
          <Route path="/host" component={Views.HostEvent} />
          
          <Route path="/test" component={Views.Test} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
