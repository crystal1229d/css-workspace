import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CreditCard from './credit_card/credit_card';
import ItemCard from './item_card/item_card';
import MainMenu from './main_menu/main_menu';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <MainMenu />
            </Route>
            <Route path="/card-glass-01">
                <CreditCard />
            </Route>
            <Route path="/card-glass-02">
              <ItemCard />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
