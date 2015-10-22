/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation container-fluid')} role="navigation">
        <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
        <a className="Navigation-link" href="/projects" onClick={Link.handleClick}>Projects</a>
        <a className="Navigation-link" href="http://medium.com/@iamrvazquez" target="_" onClick={Link.handleClick}>Blog</a>
        <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Contact</a>
      </div>
    );
  }

}

export default Navigation;
