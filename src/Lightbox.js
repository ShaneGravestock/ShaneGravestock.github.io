import React, { Component } from 'react';
import './Lightbox.css';
const Lightbox = ({item, func}) => {

    const [toggleInfo, setToggleInfo] = useState(second)

    close = (func) => {
        func(null)
    }

    toggleDesc = () => {
        setToggleInfo(!toggleInfo);
    }

    return (
        <div className="lightbox-container" >
            <NextItem pos={item.count} func={func}/>
            <PrevItem pos={item.count} func={func}/>
            <div className="lightbox">
                <div className="lightbox-header">
                    <div className="lightbox-title">
                        <h2>{item.title}</h2>
                        <h4>{item.desc}</h4>
                    </div>
                    <div className="controls">
                        <CloseLightbox func={func}/>
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

const NextItem = ({pos, func}) => {

    const nextItem = (pos, func) => {
        func(pos+1)
    }

    return (
        <div className="next-item" onClick={() => {nextItem(pos, func)}}></div>
    )
}

const PrevItem = ({pos, func}) => {

    const prevItem = (pos, func) => {
        func(pos-1)
    }

    return (
        <div className="prev-item" onClick={() => {prevItem(pos, func)}}></div>
    )
}

const CloseLightbox = ({func}) => {

    const close = (func) => {
        func(null)
    }
    
    return (
        <div className="close-lightbox" onClick={() => {close(func)}}></div>
    )
}

export default Lightbox;
