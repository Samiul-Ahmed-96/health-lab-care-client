import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import GetApoinment from './Pages/Booking/GetApoinment/GetApoinment';
import ServiceDetail from './Pages/Booking/ServiceDetail/ServiceDetail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Service/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/home">
              <Home/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/service">
              <Service/>
          </Route>
          <Route path="/signup">
              <SignUp/>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
              <ServiceDetail/>
          </PrivateRoute>
          <PrivateRoute path="/apoinment">
              <GetApoinment/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
