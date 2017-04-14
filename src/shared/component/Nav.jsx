// @flow

import $ from 'jquery'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../../shared/routes'
import { APP_NAME } from '../config'

const handleNavClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const Nav = () =>
  <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button
      className="navbar-toggler nav-toggler-right"
      type="button"
      role="button"
      data-toggle="collapse"
      data-target=".js-navbar.collapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to={HOME_PAGE_ROUTE}>{APP_NAME}</Link>
    <div className="js-navbar-collapse collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {[
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
          { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
          { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
        ].map(link => (
          <li className="nav-item" key={link.route}>
            <NavLink
              className="nav-link"
              to={link.route}
              activeStyle={{ color: 'white' }}
              exact
              onClick={handleNavClick}
            >{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>

export default Nav
