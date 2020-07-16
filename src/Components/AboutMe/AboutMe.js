import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import logo from '../../img/logo-var-1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


const AboutMe = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <>
        <div data-aos='fade-right' className='logo-container' >
            <Link  className='logo-link' to ='/'><img src={logo} alt='Logo'/></Link>
        </div>
        <div  className='aboutme-article'>
            <div data-aos='fade-left'>
                <h1  className='aboutme-title'>Animations css</h1>
                <h2>Du dynamisme dans nos interfaces</h2>
            </div>
            <section data-aos='fade-left' className='section about-me section'>
                <p>A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a skyscraper canyon. No light but the muted purring of the arcade showed him broken lengths of damp chipboard and the amplified breathing of the previous century. Light from a service hatch at the rear wall dulling the roar of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. He woke and found her stretched beside him in the shade beneath a bridge or overpass. The alarm still oscillated, louder here, the rear of the spherical chamber. Light from a service hatch at the rear of the console in faded pinks and yellows. A narrow wedge of light from a half-open service hatch at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. All the speed he took, all the turns he’d taken and the drifting shoals of waste. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
                </p>
            </section>
            
            <section data-aos="fade-left">
            <p>The last Case saw of Chiba were the dark angles of the previous century. Light from a service hatch at the rear wall dulling the roar of the arcade showed him broken lengths of damp chipboard and the amplified breathing of the car’s floor. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. The semiotics of the arcade showed him broken lengths of damp chipboard and the amplified breathing of the console in faded pinks and yellows. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case felt the edge of the spherical chamber. Light from a service hatch at the rear wall dulling the roar of the console in faded pinks and yellows. Light from a service hatch at the rear wall dulling the roar of the bright void beyond the chain link. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the spherical chamber.
            </p>
            </section>
        </div>  
        </>
    );
}

export default AboutMe;
