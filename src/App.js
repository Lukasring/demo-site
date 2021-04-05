import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
import ContentPage from "./pages/ContentPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/demo-page">
              <MainPage></MainPage>
            </Route>
            <Route path="/:page">
              <ContentPage></ContentPage>
            </Route>
            <Route exact path="/">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
