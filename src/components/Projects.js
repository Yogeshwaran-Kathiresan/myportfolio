import WebsiteImage1 from '../assets/todo_img.jpg'
import WebsiteImage2 from '../assets/weather_img.jpg'
import WebsiteImage3 from '../assets/quiz_img.jpg'

export default function Projects() {

    const config = {
        projects: [
            {
                image: WebsiteImage1,
                title: 'My Action Items',
                description: 'Simple To-do application built solely using ReactJS.',
                link: 'https://yogeshwaran-kathiresan.github.io/mytodolist/'
            },
            {
                image: WebsiteImage2,
                title: 'My Weather Checker',
                description: 'Weather application built using Weather API and React',
                link: 'https://yogeshwaran-kathiresan.github.io/myweatherapp/'
            },
            {
                image: WebsiteImage3,
                title: 'My Quiz App',
                description: 'A simple Quiz application built using quiz API and react to conduct the online quiz and show the result of the quiz in the end.',
                link: 'https://yogeshwaran-kathiresan.github.io/myquizapp/'
            }
        ]
    }
    return <section id='projects' className="flex flex-col justify-center py-20 px-5 bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5   ">
                <h1 className='text-4xl border-b-4 mb-5 w-[150px] border-secondary'>Projects</h1>
                <p>These are some of the projects built using react </p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <div key={project.id} className='relative'>
                        <img className='h-[250px] w-[500px]' src={project.image} />
                        <div className='project-desc'>
                            <h2 className='text-center px-5 py-2 text-2xl'>{project.title}</h2>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a href={project.link} target='_blank' className='btn'>View project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}