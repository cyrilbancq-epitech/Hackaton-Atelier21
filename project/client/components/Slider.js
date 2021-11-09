// IMPORT NEXTJS
import Image from 'next/image';

// IMPORT COMPONENTS
import { Carousel } from 'react-bootstrap';

export default function Slider() {
    return (
      <div className="slider">
        <Carousel>
          <Carousel.Item>
          <Image 
              src="/img1.jpeg"
              width={1048}
              height={500}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider-wrapper">
            <Image 
              src="/img2.jpeg"
              width={1048}
              height={500}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <Image 
              src="/img3.jpeg"
              width={1048}
              height={500}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    )
}