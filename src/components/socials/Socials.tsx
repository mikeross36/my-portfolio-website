import {socialIcons} from "./data"
import { motion } from "framer-motion";

const Socials = () => {
    return (
        <div className="social-icons" data-testid="social-icons">
            {socialIcons.map(function(soc, i){
                const {id, url, icon} = soc;
                return (
                    <motion.a 
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{opacity:0,translateX:-50,translateY:-50}}
                        animate={{opacity:1,translateX:0,translateY:0}}
                        transition={{duration: .3, delay: i * .2}}
                    >
                        <span>{icon}</span>
                    </motion.a>
                )
            })}
        </div>
    )
}

export default Socials;