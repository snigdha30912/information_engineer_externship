import './App.css';
import Data from './Data';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom';
import TopNavBar from './TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      {/* created routes */}
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Data />
          </Route>
        </Switch>
      </div>      
    </div>
  );
}

export default App;
