import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CreditCard from './credit_card/credit_card';
import DarkLightMode from './dark_light_mode/dark_light_mode';
import GlassDashboard from './glass_dashboard/glass_dashboard';
import GlassWebsite from './glass_website/glass_website';
import ItemCard from './item_card/item_card';
import MainMenu from './main_menu/main_menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                {/* <MainMenu /> */}
                <DarkLightMode />
            </Route>
            <Route path="/card-glass-01"><CreditCard /></Route>
            <Route path="/card-glass-02"><ItemCard /></Route>
            <Route path="/website-glass-03"><GlassWebsite /></Route>
            <Route path="/dashboard-glass-04"><GlassDashboard /></Route>
            <Route path="/dark-light-mode-05"><DarkLightMode /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
