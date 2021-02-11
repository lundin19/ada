import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ContactPage } from "../pages/contactpage/ContactPage";
import { FrontPage } from "../pages/FrontPage/Frontpage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";

export function Routes (){

    return (
    <Switch>
      <Route path="/home">
        <FrontPage />
      </Route>

      <Route path="/products">
        <ProductPage/>
      </Route>

      <Route path="/contact">
        <ContactPage/>
      </Route>
      
      <Route path="/login">
        <LoginPage/>
      </Route>

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route path="/">
        <h2>404 siden findes ikke....</h2>
      </Route>
    </Switch>
    )
}