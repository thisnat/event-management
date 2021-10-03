import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Views from './views';
import Navbar from './components/navbar/Navbar';
import GuestNavbar from './components/navbar/GuestNavbar';
import Footer from './components/Footer';

import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify'

function App() {
  const user = localStorage.getItem('userData');
  const token = Cookies.get("token");

  if (user && token) {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Views.Home} />
            <Route exact path="/login" component={Views.Login} />
            <Route exact path="/register" component={Views.Register} />
            <Route exact path="/event/:id" component={Views.Event} />
            <Route exact path="/event/:id/setting" component={Views.EventSetting} />
            <Route exact path="/reserve/:id" component={Views.Reserve} />
            <Route exact path="/host" component={Views.HostEvent} />
            <Route exact path="/me" component={Views.Account} />
            <Route exact path="/myevent" component={Views.MyEvent} />
            <Route exact path="/myzone" component={Views.MyZone} />

            <Route path="/test" component={Views.Test} />
            <Route component={Views.NotFound} />
          </Switch>
        </Router>
        <ToastContainer />
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <GuestNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Views.Home} />
          <Route exact path="/login" component={Views.Login} />
          <Route exact path="/register" component={Views.Register} />
          <Route exact path="/event/:id" component={Views.Event} />

          <Route component={Views.NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
