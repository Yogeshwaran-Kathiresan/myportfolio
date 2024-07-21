import AboutImage from '../assets/about.png'

export default function About() {
    const config = {
        line1: 'Hello, My name is Yogeshwaran K. I am a Full-Stack Web Developer. I am proficient in Front-End tools like React, Redux, Redux Toolkit, Javascript, PHP, Laravel, Axios, Tailwind Css, Bootstrap, CSS3 and well-versed in many more modern frameworks and libraries that enhance the user experience.',
        line2: 'I have expertise in both frontend and backend development, and a particular passion for creating intuitive, user-friendly interfaces. My projects have ranged from developing single-page applications to creating responsive, mobile-first designs that improve user engagement and accessibility.',
        line3: 'Additionally, I have honed my skills in backend technologies such as Node.js, Express and Laravel, allowing me to build and integrate APIs efficiently. This full stack expertise enables me to understand the complexities of the entire web development process and to troubleshoot issues effectively.'
    }
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImage} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 mb-5 w-[170px] border-primary'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}