/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Contact.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Contact extends Component {

  render() {
    return (
      <div className="Contact">
      <div className="container">
        <section className="row">
          <header className="col-lg-12">
            <h2>I want us to meet.</h2>
          </header>
          <article className="content col-lg-8">
            <p>If you have an idea; if you want to connect; if you'd like me to speak at any event; if you'd like to share a cup of coffee with me; if you'd like to talk about art; if you'd like to talk about code; if you'd like to talk about coding art; if you just want to reach out. I'm your person. I'd love to hear from you. Seriously.</p>

          </article>
          <article className="col-lg-3 col-lg-offset-1">
            <div className="sidebar">
              <h5>The last conf I spoke at</h5>
              <p>CascadiaFest 2015</p>
              <h5>My last proposal is for</h5>
              <p>IXDA 2016</p>
              <p>UXPA 2016</p>
              <h5>I'm active on</h5>
              <p><a href="#">Twitter</a></p>
              <p><a href="#">GitHub</a></p>
              <p><a href="#">Dribbble</a></p>
              <p><a href="#">LinkedIn</a></p>
            </div>
          </article>
          <article className="col-lg-8">
            <form>
              <label for="name">All I need is your name</label>
              <input type="text" id="name" autofocus />
              <label for="email">Your email</label>
              <input type="email" id="email"/>
              <label for="msg">And your message</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
              <input type="submit" value="Send It My Way"/>
            </form>
          </article>
        </section>
      </div>
      </div>
    );
  }

}

export default Contact;
