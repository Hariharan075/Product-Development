import './App.css';
import './index.css';
import Login from './components/login';
import Signup from './components/signup';
import Chatbot from './ChatBot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AdminHome from './components/AdminBars';
import Home from "./components/home";
import Termsandconditions from './sidenav/termsandconditions';
import Privacypolicy from './sidenav/privacypolicy';
import Faqs from './sidenav/faqs';
import ImageChanger from './sidenav/settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './sidenav/sidebar';
import ShowPost from './components/ShowPost';
import { addPost } from './features/Post';
import CreatePost from './components/CreatePost';
function App() {
  return (
    <div className="App">
    <Router>
  
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/chat" component={Chatbot}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/adminDash" component={Home}/>
      <Route path="/adminDash" component={Home}/>
      <Route path="/terms" component={Termsandconditions}/>
      <Route path="/privacy" component={Privacypolicy}/>
      <Route path="/faq" component={Faqs}/>
      <Route path="/settings" component={ImageChanger}/>
      <Route path="/post" component={ShowPost}/>
      <Route path="/addpost" component={CreatePost}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
