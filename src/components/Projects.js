import React from 'react'
import Project from './Project'

const Projects = () => {

    const projects = [
        {
            title: 'Kanban Board',
            src: './images/kanban-board.jpg',
            content: "simple kanban board where user can add new task and edit or remove task with drag and drop.",
            codeUrl: 'https://github.com/osama-marzouk/kanban-board',
            liveUrl: 'https://osama-marzouk.github.io/kanban-board/'
        },
        {
            title: 'Exchange Rate',
            src: './images/exchange-rate.jpg',
            content: "exchange rate with live data(real api) where it is simple to use.",
            codeUrl: 'https://github.com/osama-marzouk/Exchange-Rate',
            liveUrl: 'https://osama-marzouk.github.io/Exchange-Rate/'
        },
    ]
    return (
        <div className='bg-[#F9F9F9] py-20 px-5 md:px-10 xl:px-60' id='projects'>
            <h2 className='text-blue-600 font-bold text-lg text-center mb-2 md:text-start'>PORTFOLIO</h2>
            <p className='font-bold text-2xl text-center mb-10 md:text-start'>Each project is a unique piece of development 🧩</p>
            <div className='md:px-20'>
                {
                    projects.map(project => {
                        return <Project key={project.title}
                            title={project.title} src={project.src}
                            content={project.content} codeUrl={project.codeUrl} liveUrl={project.liveUrl} />
                    })
                }

            </div>
        </div>
    )
}

export default Projects