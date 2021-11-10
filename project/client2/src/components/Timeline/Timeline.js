import React from 'react';
import { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import "./Timeline.scss";

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
    return (
    <div className="timeline">
        <div className="timeline-wrapper">
            {/* Bounding box for the Timeline */}
            <div style={{ width: '100%', height: '76vh', margin: '2rem auto' }}>
            <HorizontalTimeline
                styles={{background: '#FFF', foreground: '#5CB2F9', outline: '#5CB2F9' }}
                getLabel={function(date) { return date.slice(0, 4); }}
                index={state.value}
                indexClick={(index) => {
                setState({ value: index, previous: state.value });
                }}
                values={ VALUES } />
            </div>
            <div className='text-center'>
            {/* any arbitrary component can go here */} 
            
            </div>
        </div>
    </div>
    )
}

export default Timeline;

