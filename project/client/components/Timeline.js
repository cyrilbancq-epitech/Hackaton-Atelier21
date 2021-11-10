import { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';


export default function Timeline() {
    const VALUES = [
        '2008',
        '2010',
        '2013',
        '2015',
        '2019',
        '2019',
        '2019',
    ];
    const [state, setState] = useState({ value: 0, previous: 0 });
    return (
    <div className="timeline">
        <div className="timeline-wrapper">
            {/* Bounding box for the Timeline */}
            <div style={{ width: '100%', height: '72.5vh', margin: '2rem auto', background: '#f8f8f8', foreground: '#5CB2F9 !important', outline: '#5CB2F9'  }}>
            <HorizontalTimeline
                style={{ foreground: "#5CB2F9", outline: "#5CB2F9" }}
                index={state.value}
                indexClick={(index) => {
                setState({ value: index, previous: state.value });
                }}
                values={ VALUES } />
            </div>
            <div className='text-center'>
            {/* any arbitrary component can go here */} 
            {state.value}
            </div>
        </div>
    </div>
    )
}


