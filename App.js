import './App.css';
import Home from './component/Home';
import Footer from './component/Footer';
import { Auth0Provider } from '@auth0/auth0-react';
function App() {

  return (
    <div style={{height:"70vh"}}>
      <Home/>
   </div>
  );
}

export default App;
