import React, {  useRef } from 'react';
import { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import "./Timeline.scss";

import { gsap } from 'gsap';
import background from './background.jpeg';
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";

const Timeline = ({ projects }) => {
    console.log("timeline :", projects)
    const VALUES = [
        "2021",
        '1206',
        '1999',
        '2007',
        "2021"
    ];

    const [state, setState] = useState({ value: 0, previous: 0 });
    const [indice, setIndice] = useState(0);
    let target = useRef(null);

    const handleChangeBackground = (img, target) => {
        let temp = 0;
        switch(img) {
            case 0:
                temp = background;
                break;
            case 1:
                temp = img1;
                break;
            case 2:
                temp = img2;
                break;
            case 3:
                temp = img3;
                break;
            case 4:
                temp = img4;
                break;
            default:
                temp = background;
                break;
        }
        
        gsap.to(target, {
          duration: 0,
          background: `url(${temp}) center center`
        });
        gsap.to(target, {
          duration: 0.4,
          opacity: 1,
          ease: "power3.inOut"
        });
      };

    // useEffect(() => {
        
    // }, [state.value]);

    return (
    <div className="timeline" ref={el => (target = el)}>
        <div className="timeline-wrapper">
            {/* Bounding box for the Timeline */}
            <div style={{ width: '100%', height: '76vh', margin: '2rem auto' }}>
            <HorizontalTimeline
                styles={{background: '#FFF', foreground: '#5CB2F9', outline: '#5CB2F9' }}
                getLabel={function(date) { return date.slice(0, 4); }}
                index={state.value}
                indexClick={(index) => {
                setState({ value: index, previous: state.value });
                setIndice(index);
                handleChangeBackground(index, target);
                }}
                values={ VALUES } />
            </div>
            <div className='text-center'>
            {/* any arbitrary component can go here */} 
                {/* <h1>{projects[indice].title !== undefined && projects[indice].title}</h1> */}
            </div>
        </div>
    </div>
    )
}

export default Timeline;

