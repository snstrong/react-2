import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MenuItemForm from "./MenuItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const addMenuItem = (formItem) => {
    let item = { ...formItem, id: formItem.name };
    SnackOrBoozeApi.addNewItem(item, item.type);
    setIsLoading(true);
  };

  useEffect(() => {
    async function getMenuItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getMenuItems();
  }, [isLoading]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind={"/snacks"} />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem items={drinks} cantFind={"/drinks"} />
            </Route>
            <Route path="/add-new">
              <MenuItemForm addMenuItem={addMenuItem} />
            </Route>

            <Route>
              <h2>Page Not Found</h2>
              <p>Sorry, I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
