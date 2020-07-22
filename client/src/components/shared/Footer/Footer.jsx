import React from 'react'
import './Footer.css'

const Footer = () =>
  <footer className="footer">
    <div className="links">
      <div className="myalpaca">
        <p className="bold">myAlpaca</p>
        <p className="subs-desc">Subscribe to receive study abroad tips & news!</p>
        <div>
          <input className="input-sub" type="email" placeholder="Email" required></input>
          <button className="button">Subscribe</button>
        </div>
      </div>
      <div className="social">
        <p className="find-us">Find Us on Social</p>
        <div className="social-images">
          <a className="footer-a" href="https://www.facebook.com/groups/Alpacafarmlife/" title="Alpaca's Facebook" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/PbqmKif.png" alt="Facebook Icon"></img></a>
          <a className="footer-a" href="https://twitter.com/hashtag/alpacas?f=image" title="Alpaca's Twitter" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/Gv0vVBR.png" alt="Twitter Icon"></img></a>
          <a className="footer-a" href="https://www.pinterest.com/knitcrazedgirl/alpacas/" title="Alpaca's Pintrest" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/PclPQt2.png" alt="Pintrest Icon"></img></a>
        </div>
      </div>
      <div className="term-use">
        <a className="footer-a" href="https://i.kym-cdn.com/photos/images/original/000/915/056/50e.jpg" title="Terms of Use" target="_blank" rel="noopener noreferrer">Terms of Use</a>
        <a className="footer-a" href="https://i.kym-cdn.com/photos/images/original/000/915/056/50e.jpg" title="Privacy Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a className="footer-a" href="https://i.kym-cdn.com/photos/images/original/000/915/056/50e.jpg" title="Contact Us" target="_blank" rel="noopener noreferrer">Contact Us</a>
      </div>
      <div className="faq">
        <a className="footer-a" href="https://i.kym-cdn.com/photos/images/original/000/915/056/50e.jpg" title="FAQ" target="_blank" rel="noopener noreferrer">FAQ</a>
        <a className="footer-a" href="https://i.kym-cdn.com/photos/images/original/000/915/056/50e.jpg" title="About" target="_blank" rel="noopener noreferrer">About</a>
        <a className="footer-a" href="https://i.kym-cdn.com/photos/images/original/000/915/056/50e.jpg" title="Work for Us" target="_blank" rel="noopener noreferrer">Work for Us</a>
        
      </div>
    </div>
    <p className="copyright">© 2020 Alpaca LLC.</p>
  </footer>

export default Footer