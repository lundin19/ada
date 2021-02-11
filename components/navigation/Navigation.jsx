import React from 'react'
import { Link } from 'react-router-dom'
import Style from './navigation.module.scss'

export function Navigation () {

        return (
            <nav className={Style.navBar}>
                <ul>
                    <li><Link to="/frontpage">FORSIDE</Link></li>
                    <li><Link to="/productpage">PRODUKTER</Link></li>
                    <li>BAGERIET</li>
                    <li><Link to="/contactpage">KONTAKT</Link></li>
                    <li><Link to="/loginpage">LOGIN</Link></li>
                </ul>
            </nav>
        )
}