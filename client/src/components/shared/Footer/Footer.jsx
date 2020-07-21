import React from 'react'
import './Footer.css'

const Footer = () =>
  <footer className="footer">
    <div className="links">
      <div className="myalpaca">
        <p className="bold">myAlpaca</p>
        <p>Subscribe to receive study abroad tips & news!</p>
        <div>
          <input className="input-sub" type="email" placeholder="Email" required></input>
          <button className="button">Subscribe</button>
        </div>
      </div>
      <div className="social">
        <p>Find Us on Social</p>
        <div className="social-images">
          <a href="https://www.facebook.com/groups/Alpacafarmlife/" title="Alpaca's Facebook" target="_blank"><img src="https://i.imgur.com/2TqgwYD.jpg" alt="Facebook Icon"></img></a>
          <a href="https://twitter.com/hashtag/alpacas?f=image" title="Alpaca's Twitter" target="_blank"><img src="https://i.imgur.com/JfHhwjh.jpg" alt="Twitter Icon"></img></a>
          <a href="https://www.pinterest.com/knitcrazedgirl/alpacas/" title="Alpaca's Pintrest" target="_blank"><img src="https://i.imgur.com/DAUWYMu.jpg" alt="Pintrest Icon"></img></a>
        </div>
      </div>
      <div className="term-use">
        <a href="" title="Terms of Use" target="_blank">Terms of Use</a>
        <a href="" title="Privacy Policy" target="_blank">Privacy Policy</a>
        <a href="" title="Contact Us" target="_blank">Contact Us</a>
      </div>
      <div className="faq">
        <a href="" title="FAQ" target="_blank">FAQ</a>
        <a href="" title="About" target="_blank">About</a>
        <a href="" title="Work for Us" target="_blank">Work for Us</a>
        
      </div>
    </div>
    <p className="copyright">© 2020 Alpaca LLC.</p>
  </footer>

export default Footer