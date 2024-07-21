import HeroImg from '../assets/hero.png'
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";



export default function Hero() {
    const config = {
        subtitile: 'I am a Full-Stack Developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/yogeshwaran-k-536a62182/',
            github: 'https://github.com/Yogeshwaran-Kathiresan',
            whatsapp: 'https://wa.me/7639941268'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>Hi <br />I'm Yogeshwaran K
                <p className='text-2xl'>{config.subtitile}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} target='_blank' className='pr-5 hover:text-white'><FaLinkedin size={40}/></a>
                <a href={config.social.github} target='_blank' className='pr-5 hover:text-white'><FaGithub size={40}/></a>
                <a href={config.social.whatsapp} target='_blank' className=' hover:text-white'><FaWhatsapp size={40} /></a>
            </div>
        </div>
        <img src={HeroImg} alt='hero_img' className='md:w-1/3'/>
    </section>
}