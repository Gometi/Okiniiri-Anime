import React from "react";
import { Link } from 'react-router-dom';
import { Carousel, Jumbotron, Image } from 'react-bootstrap';
import './Slideshow.css';
function Slideshow() {
    return(
        <div>
        <Carousel>
        <Carousel.Item>
          <img  className="try" alt="900x500" src="https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png" />
          <Carousel.Caption>
            <h3> Naruto Shippuden </h3>
            <p> A young adult who posses the power of Kyubi goes soul searching</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" className="try" src="http://www.pngmart.com/files/4/Kaneki-Ken-PNG-Clipart.png" />
          <Carousel.Caption>
            <h3> Tokio Ghoul</h3>
            <p> A university student gets bitten by a ghoul and the rest is ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" className="try" src="https://images4.alphacoders.com/906/906589.png" />
          <Carousel.Caption>
            <h3>Violet Evergarden</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}
export default Slideshow;