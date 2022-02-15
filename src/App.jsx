import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./assets/style/main.scss";
import Home from "./components/pages/Home";
import RecipeDetails from "./components/pages/RecipeDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={RecipeDetails} path="/recipeDetails/:id" />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
