import React, { Component } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox'

const galleryItems = [

                        {
        title: "Keratin",
        desc: "Post sound. Music by James Warburton",
        image_src: "Keratin.jpg",
        video_url: "https://player.vimeo.com/video/497573191",
        aspect_ratio: "16-9"
    },
            
            
            {
        title: "A Bright Warm Day in May",
        desc: "Post sound",
        image_src: "BrightWarmDay.jpg",
        video_url: "https://player.vimeo.com/video/428026738",
        aspect_ratio: "16-9"
    },
    
    
                {
        title: "Wake Up",
        desc: "Post sound",
        image_src: "WakeUp.jpg",
        video_url: "https://player.vimeo.com/video/444984125",
        aspect_ratio: "16-9"
    },
    
                {
        title: "Spray",
        desc: "Location sound and post sound",
        image_src: "Spray.jpg",
        video_url: "https://player.vimeo.com/video/380208174",
        aspect_ratio: "16-9"
    },
    
       
        
    
        {
        title: "MyGreenPod.com - Octopus",
        desc: "Location sound and post sound",
        image_src: "OctopusEnergy.jpg",
        video_url: "https://player.vimeo.com/video/322276667",
        aspect_ratio: "16-9"
    },
    
    
        {
        title: "The Printmaker",
        desc: "Location sound and post sound",
        image_src: "ThePrintmaker.jpg",
        video_url: "https://player.vimeo.com/video/348205226",
        aspect_ratio: "16-9"
    },    
    
    
        {
        title: "Xbox Ad – Re-design",
        desc: "Re-design: Sound effects and mix",
        image_src: "Xbox Ad Re-Design.jpg",
        video_url: "https://player.vimeo.com/video/254230405",
        aspect_ratio: "16-9"
    },
    
            {
        title: "No Time to Waste for Rare Disease Patients",
        desc: "Sound effects and mix",
        image_src: "Dementia.jpg",
        video_url: "https://www.youtube.com/embed/rIzhPoNLhig",
        aspect_ratio: "16-9"
    },    
    
        {
        title: "Just Cause 4 - Grapple Hook Air Lifter Pro Tips",
        desc: "Post sound",
        image_src: "JustCause4.jpg",
        video_url: "https://www.youtube.com/embed/m3pe_YHYsEM",
        aspect_ratio: "16-9"
    },
    
    {
        title: "Meet Meat",
        desc: "Post sound",
        image_src: "MeetMeat.jpg",
        video_url: "https://www.youtube.com/embed/EIUf-VWZ2Hg",
        aspect_ratio: "16-9"
    }, 
    
            {
        title: "CBBC – The Playlist - Series 2 - The Vamps",
        desc: "Sound recordist",
        image_src: "ThePlaylist_TheVamps.jpg",
        video_url: "https://player.vimeo.com/video/286330495",
        aspect_ratio: "16-9"
    },
    
                {
        title: "Darksiders III - Keepers of the Void DLC",
        desc: "Post sound",
        image_src: "Darksiders3DLC.jpg",
        video_url: "https://www.youtube.com/embed/05mo_zeBu8A",
        aspect_ratio: "16-9"
    },
    
                 {
        title: "Davent - Christmas Countdown",
        desc: "Sound recordist",
        image_src: "DaventCalendar.jpg",
        video_url: "https://www.youtube.com/embed/0QaoCSdNX_0",
        aspect_ratio: "16-9"
    },
    
                    {
        title: "Plastic Free Pledge - Bottle Boy",
        desc: "Sound recordist",
        image_src: "Tony-Burke-Bottle-Boy.jpg",
        video_url: "https://player.vimeo.com/video/294219728",
        aspect_ratio: "16-9"
    },
    
            {
        title: "TRILOGY - Short Magic Film - Maximilian Magic",
        desc: "Sound effects and mix",
        image_src: "Maximilian_Magic.jpg",
        video_url: "https://www.youtube.com/embed/48kRARpCi84",
        aspect_ratio: "16-9"
    },    
    
            {
        title: "UK Power Networks – Short",
        desc: "Sound recordist and post sound",
        image_src: "UK Power Networks_Short.jpg",
        video_url: "https://player.vimeo.com/video/267422697",
        aspect_ratio: "16-9"
    },
    
            {
        title: "CBBC – The Playlist - Series 2 - Sabrina Carpenter",
        desc: "Sound recordist",
        image_src: "ThePlaylist-Sabrina.jpg",
        video_url: "https://player.vimeo.com/video/304843899",
        aspect_ratio: "16-9"
    },
    
        {
        title: "Sunburn Trailer 1",
        desc: "Sound design and sound mix",
        image_src: "Sunburn-Trailer01.jpg",
        video_url: "https://player.vimeo.com/video/292606380",
        aspect_ratio: "16-9"
    }, 
    
            {
        title: "The Physiological Society - Conquering Exam Stress",
        desc: "Sound design and sound mix",
        image_src: "Exam-Stress.jpg",
        video_url: "https://www.youtube.com/embed/-RZ86OB9hw4",
        aspect_ratio: "16-9"
    },
    
    {
        title: "BASHH – Sexual Health Care",
        desc: "Sound design and sound mix",
        image_src: "BASHH.jpg",
        video_url: "https://www.youtube.com/embed/3K_wMpiz2qE",
        
        aspect_ratio: "16-9"
    },
    

    {
        title: "Fukui Looping",
        desc: "Sound design and mix",
        image_src: "Fukui_Looping.jpg",
        video_url: "https://player.vimeo.com/video/189653401",
        aspect_ratio: "16-9"
    },
    
    {
        title: "Irwin Mitchell – Hannah Cockroft",
        desc: "Sound recordist, sound design and sound mix",
        image_src: "IM-DontQuitDoIt.jpg",
        video_url: "https://www.youtube.com/embed/9V6k5POdwhI",
        aspect_ratio: "16-9"
    },
    
   
    {
        title: "Imaginography Logo Reveal",
        desc: "Sound design and sound mix",
        image_src: "Logo-Reveal.jpg",
        video_url: "https://player.vimeo.com/video/156334709",
        aspect_ratio: "16-9"
    },

    {
        title: "Stonegate Pubs",
        desc: "Sound design and sound mix",
        image_src: "Stonegate.jpg",
        video_url: "https://player.vimeo.com/video/145541484",
        aspect_ratio: "16-9"
    },
    
        {
        title: "Sci-Fi 48 Hour Film Challenge",
        desc: "Sound design, sound mix, sound recordist, and producer",
        image_src: "48-Hour-Sci-Fi.jpg",
        video_url: "https://player.vimeo.com/video/212563122",
        aspect_ratio: "2-39-1"
    }, 
    


]

class Gallery extends Component {

    state = {
        currentActive: null
    }

    setLightbox = (pos) => {
        if ((pos && pos < galleryItems.length && pos > 0) || pos === 0) {
            let newObj = galleryItems[pos]
            newObj.count = pos
            this.setState({currentActive: newObj})
        } else {
            this.setState({currentActive: null})
        }
        
    }

    render() {
        const GalleryImages = galleryItems.map((image, index) => {
            return <Image className={`gallery-item`} aspect_ratio={image.aspect_ratio} key={index} title={image.title} desc={image.text} image_src={image.image_src} video_url={image.video_url} onClick={() => this.setLightbox(index)}/>
        })
        
        return (
            <div className="container">
                <ul className="gallery-container">{GalleryImages}</ul>
                {this.state.currentActive ? <Lightbox item={this.state.currentActive} func={this.setLightbox}/> : ''}
            </div>
        )
    }
}

class Image extends Component {
    render() {

        const {className, title, onClick, image_src } = this.props;

        return (
            <li className={className} onClick={onClick}>
                <img loading="lazy" src={require("./gallery/" + image_src)} alt={title}/>
                <span className="player-button">&#xf04b;</span>
            </li>
        )
    }
}


export {Gallery, galleryItems};
