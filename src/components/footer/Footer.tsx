import { motion } from "framer-motion";

const footerVariants = {
    initial: {
        opacity: 0
    },
    withMotion: {
        opacity: 1,
        transition: {type: "spring", delay: .8}
    }
}

const Footer = () => {
    return (
        <motion.footer className="footer"
            variants={footerVariants}
            initial="initial"
            animate="withMotion"
        >
            <span data-testid="copyright"
                className="footer-title" 
                style={titleStyle}>
                &copy; Copyright 2020 DodaDesign
            </span>
        </motion.footer>
    )
};

const titleStyle = {
    fontSize: "1rem",
    color: "#ffffff",
    textShadow: ".125rem .125rem .125rem black"
}

export default Footer;