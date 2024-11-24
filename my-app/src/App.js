import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Home from './page/home';
import SignIn from './page/signin';
import User from './page/user';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
