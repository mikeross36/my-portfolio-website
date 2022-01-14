import { qualification } from "./data"
import { motion } from "framer-motion"
import { titleVariants, qualVariants } from "./aboutVariants";

type AboutTitle = {title:string} & typeof defaultProps;

const defaultProps = {
    title: "about me..."
}

const About = (props:AboutTitle) =>{
    return (
        <div className="about-wrapper">
            <section className="about">
                <div className="about-image" data-testid="about-image">
                    <div className="about-title">
                        <h2>{props.title}</h2>
                    </div>
                </div>
                <div className="resume" data-testid="resume">
                    <motion.div className="resume-title"
                        variants={titleVariants}
                        initial="initial"
                        animate="withMotion"
                    >
                        <h2>Academic Qualification</h2>
                    </motion.div>
                    {qualification.map(function(qual){
                        const {id, year, school, title} = qual
                        return (
                            <motion.div key={id} className="res-qual"
                                variants={qualVariants}
                                initial="initial"
                                animate="withMotion"
                            >
                                <span className="year">{year}</span>
                                <br />
                                <span className="school">{school}</span>
                                <span className="title">{title}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

About.defaultProps = defaultProps;

export default About;