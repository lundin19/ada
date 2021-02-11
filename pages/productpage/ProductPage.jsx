import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { ProductNav } from "../../components/ProductNav/ProductNav";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { ProductList } from "../../components/ProductList/ProductList";
import Style from './productPage.module.scss'
import { CommentSection } from "../../components/Comments/CommentSection";

export function ProductPage(props) {
  let { url } = useRouteMatch();

  return (
    <>
    <header className={Style.productHeader}>
      <h2>Vores elskede bagværk</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae aspernatur possimus fuga laborum quos. Quisquam nostrum totam optio saepe.</p>
    </header>
    
    <section className={Style.productContainer}>
      <ProductNav />

      <Switch>
        <Route exact path={url}>
          <Redirect to={`${url}/1`}></Redirect> 
        </Route>

        <Route exact path={`${url}/:categoryId`}>
          <ProductList />
        </Route>

        <Route path={`${url}/:categoryId/:productId`}>
          <ProductDetails />
          <CommentSection loginData={props.loginData} setLoginData={props.setLoginData}/>
        </Route>
      </Switch>
      </section>
  </>
  );
}