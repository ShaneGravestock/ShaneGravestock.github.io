import React, { Component } from 'react';
import './gallery-grid.css'


let galleryItems = [
    {
        src: "BASHH.jpg",
        external_url: "https://www.youtube.com/watch?v=3K_wMpiz2qE"
    },
    {
        src: "Cape Films.jpg",
        external_url: "https://www.youtube.com/watch?v=jiYP6urAECk"
    },
    {
        src: "CBBC.jpg",
        external_url: "https://www.bbc.co.uk/cbbc/shows/the-playlist"
    },
    {
        src: "Cinema Lumina.jpg",
        external_url: "https://www.cinemalumina.com/"
    },
    {
        src: "Founders Factory.jpg",
        external_url: "https://foundersfactory.com/"
    },
    {
        src: "Foundry-42.jpg",
        external_url: "https://cloudimperiumgames.com/"
    },
    {
        src: "Instinctif Partners.jpg",
        external_url: "https://instinctif.com/uk/"
    },
    {
        src: "Irwin Mitchell.jpg",
        external_url: "https://www.irwinmitchell.com/"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://www.jumpstartproductions.co.uk/"
    },
    {
        src: "Lidl.jpg",
        external_url: "https://www.youtube.com/watch?v=g9UEOww8LCk"
    },
    {
        src: "Proper Charlie Productions.jpg",
        external_url: "https://www.facebook.com/propercharlieuk/"
    },
    {
        src: "Shopmium.jpg",
        external_url: "https://www.shopmium.com/uk"
    },
    {
        src: "Tony Burke.jpg",
        external_url: "https://www.tonyburke.org/"
    },
    {
        src: "UK Power Networks.jpg",
        external_url: "https://vimeo.com/267422697/64caa64320"
    },
    {
        src: "United Magic Studios.jpg",
        external_url: "https://www.unitedmagic.co.uk/"
    },
    {
        src: "Walt-Disney.jpg",
        external_url: "https://www.thewaltdisneycompany.com/"
    },
    {
        src: "York-St-John-University.jpg",
        external_url: "https://vimeo.com/214697360"
    },
    {
        src: "Strawberry Blond TV.jpg",
        external_url: "https://www.strawberryblond.co.uk/"
    },
]

class Profile extends Component {
    render() {
        return (
            <div className="container-profile">
                <header>
                    <img alt="header-banner" src={require("../Banner.jpg")} width="100%" height="auto"/>
                </header>
                <section>
                    <p>Hey there, I’m Shane Gravestock, a sound designer/mixer and composer based in Liverpool. If you like my portfolio, looking to work with me or just to connect then get in touch on my <a href="/contact">contact page.</a></p>
                    <br/>
                    <p>My journey into audio started off as a drummer in a punk band when I was 17. At the time I recorded local bands at my school’s recording studio. From there I studied music technology at university, got a interest in sound for film and joined a production/post house in Brighton for 3 years to then go onto freelancing. Freelance has allowed me to work with many different clients in various formats such as film, TV, branded content, and video games, which has given me diverse experience to bring to new projects. </p>
		<br/>
                    <p>Recently a documentary I worked on called Maisie has won “best documentary” at <a href="https://www.diff.ie/News/virgin-media-dublin-international-film-festival22-dfcc-award-winners-announced/">Dublin International Film Festival</a> along with premiering at <a href="https://sheffdocfest.com/film/maisie/">Sheffield DocFest.</a> </p>
                </section>

                <footer className="company-grid">
                    {galleryItems.map((image, index) => {
                        return <GalleryItem key={index} src={require("../companies/" + image.src)} external_url={image.external_url}/>
                    })}
                </footer>
            </div>
        );
    }
}

class GalleryItem extends Component {
    render() {
        return (
            <div>
                <a href={this.props.external_url}  target="_blank" rel="noopener noreferrer"><img alt="company-logo" width="100%" src={this.props.src}/></a>
            </div>
        )
    }
}

export default Profile;
