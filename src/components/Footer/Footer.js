/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class Footer extends Component {

  // static propTypes = {
  //   viewport: PropTypes.shape({
  //     width: PropTypes.number.isRequired,
  //     height: PropTypes.number.isRequired,
  //   }).isRequired,
  // };

  render() {
    // // This is just an example how one can render CSS
    // const { width, height } = this.props.viewport;
    // this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <div className="Footer">
        <div className="Footer-container">
          <span className="Footer-text--muted" target="_blank">Made with love on a train </span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="http://medium.com/@iamrvazquez" target="_blank">Medium</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="http://twitter.com/iamrvazquez" target="_blank">Twitter</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="http://github.com/vazquez" target="_blank">GitHub</a>
          {/*<a className="Footer-link" href="/not-found" onClick={Link.handleClick}>Not Found</a>*/}
          {/*<span className="Footer-spacer"> | </span>
          <span ref="viewport" className="Footer-viewport Footer-text Footer-text--muted">Viewport:</span>*/}
        </div>
      </div>
    );
  }

}

export default Footer;
