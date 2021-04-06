import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/demo-site">
            {/*this route is only used for hosting on github pages */}
            <MainPage></MainPage>
          </Route>
          <Route exact path="/:page/:subpage">
            <ContentPage></ContentPage>
          </Route>
          <Route path="/:page">
            <ContentPage></ContentPage>
          </Route>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
