import { projects } from "./data"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="projects-wrapper">
            <section className="projects">
                <div className="project-image" data-testid="projects-image">
                    <div className="project-title">
                        <h2>some of my projects...</h2>
                    </div>
                </div>
                <div className="project-items" data-testid="projects">
                    {projects.map(function(project, i){
                        const {id, image, btns} = project
                        return(
                            <motion.article key={id} className="project-item"
                                initial={{opacity:0,translateY:-50}}
                                animate={{opacity:1,translateY:0}}
                                transition={{duration: .5, delay: i * .2}}
                                >
                                <img src={image} alt="project img" />
                                <div className="project-btns">
                                    {btns.map(function(btn){
                                        const {id, url, icon} = btn
                                        return (
                                            <div key={id} className="btn">
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    rel="noreferrer">
                                                        {icon}
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Projects;