import {BrowserRouter as Router, Route} from "react-router-dom";
import Employees from "./views/Employees";

function App() {

    return (
        <Router>
            <Route><Employees/></Route>
        </Router>
    );
}

export default App;
