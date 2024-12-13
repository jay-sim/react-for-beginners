import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import Coins from "./components/Coins.js";
import ToDo from "./components/ToDo.js";
import Movies from "./components/Movies.js";


// 아래 코드는 react-router-dom 5.x버전일때의 문법
function App() {
    return (
        <Router>
            <Switch>
            <Route path="/todo">
                    <ToDo />
                </Route>
                <Route path="/coin">
                    <Coins />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/movie/:id"> {/* :변수명 으로 적어줌으로서 변수로서 사용가능함 */}
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );

}

export default App;