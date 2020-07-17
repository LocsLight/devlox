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
        <section className='aboutme'>
        <div data-aos='fade-right' className='logo-container' >
            <div className='logo-content'>
                <Link  className='logo-link' to ='/'><img src={logo} alt='Logo'/></Link>
            </div>
        </div>
        
            <div  className='aboutme-articles'>
                <div data-aos='fade-left'>
                    <h1  className='aboutme-title'>Salut, moi c'est Locs!</h1>
                    <h2>Ou Loïc, si tu préfères. </h2>
                </div>
                <section data-aos='fade-left' className='section about-me section'>
                    <p className='simple-para'>Il y a un environ un an je me suis mis en tête que j'allais devenir développeur. J'ai commencé avec un tuto de création d'un jeu snake en javascript. J'apprenais des bases d'algorythmie sans le savoir. Je me dis qu'avec toutes les ressources gratuites ou payantes dont on dispose sur le web, il est,  techniquement possible de nos jours de tout apprendre de chez soi. Grâce à tous les passionés qui nourrissent le web de connaissances, notemment, et je me dois de le souligner, les formateurs qui enseignent par la pratique. J'ai rapidement compris que c'était une affaire de passionné, que ça allait me demander un investissement personnel conséquent et que la route ne sera pas sans obstacles, mais aujourd'hui, j'ai toujours soif d'apprendre et je suis fier de ce que je fais.</p>
                </section>
                
                <section data-aos="fade-left">
                <p className='simple-para'>The last Case saw of Chiba were the dark angles of the previous century. Light from a service hatch at the rear wall dulling the roar of the arcade showed him broken lengths of damp chipboard and the amplified breathing of the car’s floor. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. The semiotics of the arcade showed him broken lengths of damp chipboard and the amplified breathing of the console in faded pinks and yellows. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Case felt the edge of the spherical chamber. Light from a service hatch at the rear wall dulling the roar of the console in faded pinks and yellows. Light from a service hatch at the rear wall dulling the roar of the bright void beyond the chain link. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the spherical chamber.
                </p>
                </section>
            </div>
        </section>
        </>
    );
}

export default AboutMe;
