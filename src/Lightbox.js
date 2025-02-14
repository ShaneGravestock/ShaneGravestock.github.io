import React, { useState } from 'react';
import './Lightbox.css';
const Lightbox = ({item, position, onClick}) => {

    const [toggleInfo, setToggleInfo] = useState(false)

    return (
        <div className="lightbox-container" >
            <NextItem pos={position} onClick={onClick}/>
            <PrevItem pos={position} onClick={onClick}/>
            <div className="lightbox">
                <div className="lightbox-header">
                    <div className="lightbox-title">
                        <h2>{item.title}</h2>
                        <h4>{item.desc}</h4>
                    </div>
                    <div className="controls">
                        <CloseLightbox onClick={onClick}/>
                    </div>
                </div>

                <div className="content">
                    <div className={`_${item.aspect_ratio}`} style={{position:"relative"}}>
                        <iframe loading="lazy" title="video source" src={item.video_url} style={{
                            position:"absolute",
                            top:"0",
                            left:0,
                            width:"100%",
                            height:"100%"}} frameBorder="0" allowFullScreen>
                        </iframe>
                    </div>
                    <div className={`description desc-toggle-${toggleInfo}`}>
                        {item.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

const NextItem = ({pos, onClick}) => {

    const nextItem = (pos) => {
        console.log('clicked', pos);
        onClick(pos+1)
    }

    return (
        <div className="next-item" onClick={() => nextItem(pos)}></div>
    )
}

const PrevItem = ({pos, onClick}) => {

    const prevItem = (pos) => {
        onClick(pos-1)
    }

    return (
        <div className="prev-item" onClick={() => prevItem(pos)}></div>
    )
}

const CloseLightbox = ({onClick}) => {

    const close = () => {
        onClick(null)
    }
    
    return (
        <div className="close-lightbox" onClick={() => close()}></div>
    )
}

export default Lightbox;
