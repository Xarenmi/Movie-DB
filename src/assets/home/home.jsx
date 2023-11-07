import React from 'react';
import Footer from '../footer/footer.jsx';
import CoverCarousel from '../components/carousel/carousel.jsx';

const xaren = {
    penName: 'Xarenmi',
    gitHub: 'https://github.com/Xarenmi/',
}

const halloweenMovies = [
    {
        name: "Pet Sematary: Bloodlines",
        coverUrl: "https://www.infobae.com/new-resizer/C2h4HuI7OV6hWY5Cllb25I-JgUE=/arc-anglerfish-arc2-prod-infobae/public/ILSHLGNUCVCDRBUTP4DBGGS53U.jpg",
    },
    {
        name: "The Nun II",
        coverUrl: "https://www.infobae.com/new-resizer/oCGstZL28UsPXEqkhSylhH9yV8E=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TJTFJ4XZ6ZDTTHUFLDSXM23JX4.jpg",
    },
    {
        name: "Haunted Mansion",
        coverUrl: "https://media.glamour.mx/photos/64bec20e4b0bc56740ccc55b/16:9/w_1280,c_limit/mansion_embrujada_pelicula_disney.jpg",
    },
    {
        name: "Tin & Tina",
        coverUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/tin-tina-2996322.jpg",
    },
    {
        name: "Deinfluencer",
        coverUrl: "https://metadata-static.plex.tv/7/gracenote/76d47b26841688174c96bdc1abefe1ee.jpg",
    },
];

export default function Home() {
    return (
        <main>
        <section id="carousel">
            <CoverCarousel imgArr={halloweenMovies} />
        </section>
{/*         <section id="cards">
            {array.forEach(element => {
                <Card movie={element} />
            });}
        </section> */}
        <footer className='footer'>
            <Footer developer={xaren}/>
        </footer>
        </main>
    );
}
