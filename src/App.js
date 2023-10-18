import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Body from "./components/Body/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryPage from "./components/Country-page/countryPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <main className={mainClass}>
      <Router>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route path="/">
            <Body></Body>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
