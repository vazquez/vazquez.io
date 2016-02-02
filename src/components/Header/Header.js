/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="container">
          {/* <Navigation className="Header-nav" /> */}
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img src={require('./logo-small.svg')} width="36" height="36" alt="Ricardo Vazquez" />
          </a>
          <h5 className="masthead">Ricardo Vazquez <em>Portfolio</em></h5>
          <section className="Header-banner">
            <article>
              <img src={require('./ricardo.svg')} width="145" height="199" alt="The Portrait of Ricardo Vazquez"/>
            </article>
            <article>
              <h1>I'm Ricardo Vazquez</h1>
              <p> I'm a Product Designer in Toronto.</p>
              <p>My latest project is <a href="#" onClick={Link.handleClick}>Mozilla Webmaker Android</a>.</p>
              <p>My latest thoughts are <a href="#" onClick={Link.handleClick}>My First Year at Mozilla</a>.</p>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;
