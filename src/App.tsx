import { BrowserRouter as Router } from "react-router-dom";
import { ApplicationProvider } from "./resources/ApplicationProvider";
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import ARoutes from './ARoutes';
import './assets/css/mobile.css';
import './assets/css/desktop.css';
import './assets/css/tablet.css';

function App() {
  return (
    <ApplicationProvider>
      <Router>
          <ARoutes />
      </Router>
    </ApplicationProvider>
  )
}

export default App
