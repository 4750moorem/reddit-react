import React, {createContext, useContext, useState} from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import SubReddit from "./SubReddit";


export type AppContextProps = {
    setPageTitle : (title : string) => void
    title        : string
}
export const AppContext = createContext<AppContextProps>({
    setPageTitle : (s : string) => {return},
    title : ""
})
function App() {
    const [pageTitle, setPageTitle] = useState("")

    const Context = {
        setPageTitle : setPageTitle,
        title        : pageTitle
    }

    return (
        <AppContext.Provider value={Context}>
          <header className="header">
             <h2> {pageTitle} </h2>
          </header>

          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/:r">
                  <SubReddit/>
              </Route>
          </Switch>
        </AppContext.Provider>
      );
}

export default App;
