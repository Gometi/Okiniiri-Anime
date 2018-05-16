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
            <p className="slider__para"> More than two years have passed since the most recent adventures in the Hidden Leaf Village, ample time for 
            ninja wannabe Naruto Uzumaki to have developed skills worthy of recognition and respect. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" className="try" src="http://www.pngmart.com/files/4/Kaneki-Ken-PNG-Photos.png" />
          <Carousel.Caption>
            <h3> Tokyo Ghoul</h3>
            <p className="slider__para"> Tokyo Ghoul is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized 
            in Shueisha's seinen manga magazine Weekly Young Jump between September 2011 and September .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" className="try" src="https://images4.alphacoders.com/906/906589.png" />
          <Carousel.Caption>
            <h3>Violet Evergarden</h3>
            <p className="slider__para">Violet Evergarden is a Japanese light novel series written by Kana Akatsuki and illustrated by Akiko Takase.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}
export default Slideshow;