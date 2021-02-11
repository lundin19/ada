import React, { useEffect, useState } from "react";
import { NavLink as Link, useRouteMatch } from "react-router-dom";
import { doFetch } from "../../helpers/fetch";
import Style from './productNav.module.scss';

export function ProductNav() {

  let { url } = useRouteMatch();

  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    const getProdList = async () => {
      let catUrl = "https://api.mediehuset.net/bakeonline/categories";
      let res = await doFetch(catUrl);
      setProdList(res);
    };
    
    getProdList();
  }, []);

  return (
    <nav className={Style.productNav}>
      {prodList.items
        ? prodList.items.map((category, i) => {
            return <Link activeStyle={{fontSize: "1.05rem", fontWeight:"bold"}} key={i} to={`${url}/${category.id}`}>{category.title}</Link>;
          })
        : null}
    </nav>
  );
}
