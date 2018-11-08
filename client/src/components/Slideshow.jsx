import React, { Component } from "react";
// import { Carousel} from 'react-bootstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Slideshow.css';

const items = [
  {
    src: "https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png",
    altText: "slide1",
    caption: "Naruto Shippuden",
    captionText: "More than two years have passed since the most recent adventures in the Hidden Leaf Village, ample time for ninja wannabe Naruto Uzumaki to have developed skills worthy of recognition and respect."
  },
  {
    src: "http://www.pngmart.com/files/4/Kaneki-Ken-PNG-Photos.png",
    altText: "slide2",
    caption: "Tokyo Ghoul",
    captionText: "Tokyo Ghoul is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized in Shueisha's seinen manga magazine Weekly Young Jump between September 2011 and September 2014."
  },
  {
    src: "https://images4.alphacoders.com/906/906589.png",
    altText: "slide3",
    caption: "Violet Evergarden",
    captionText: "Violet Evergarden is a Japanese light novel series written by Kana Akatsuki and illustrated by Akiko Takase."
  }
]

class Slideshow extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((anime) => {
      return (
        <CarouselItem
        className="custom-tag"
        tag="div"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={anime.src}
        >
          <img className="try d-block img-fluid" src={anime.src} alt={anime.altText} />
          <CarouselCaption className="caption-color" captionText={anime.captionText} captionHeader={anime.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: auto;
                height: 50rem;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );


    //   return(
    //     <div>
    //     <Carousel>
    //     <Carousel.Item>
    //       <img  className="try" alt="900x500" src="https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png" />
    //       <Carousel.Caption>
    //         <h3> Naruto Shippuden </h3>
    //         <p className="slider__para"> More than two years have passed since the most recent adventures in the Hidden Leaf Village, ample time for 
    //         ninja wannabe Naruto Uzumaki to have developed skills worthy of recognition and respect. </p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img  alt="900x500" className="try" src="http://www.pngmart.com/files/4/Kaneki-Ken-PNG-Photos.png" />
    //       <Carousel.Caption>
    //         <h3> Tokyo Ghoul</h3>
    //         <p className="slider__para"> Tokyo Ghoul is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized 
    //         in Shueisha's seinen manga magazine Weekly Young Jump between September 2011 and September .</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img  alt="900x500" className="try" src="https://images4.alphacoders.com/906/906589.png" />
    //       <Carousel.Caption>
    //         <h3>Violet Evergarden</h3>
    //         <p className="slider__para">Violet Evergarden is a Japanese light novel series written by Kana Akatsuki and illustrated by Akiko Takase.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    //     </div>
    // )
  }

}
export default Slideshow;