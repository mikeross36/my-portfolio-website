import {FaEnvelope, FaPhoneSquareAlt, FaMapMarkerAlt} from "react-icons/fa"
import Footer from "../footer/Footer"
import { motion } from "framer-motion"

const contactVariants = {
    initial: {
        opacity: 0,
        rotateY: -360
    },
    withMotion: {
        opacity: 1,
        rotateY: 0,
        transition: {duration: 1, ease: "easeInOut"}
    }
}

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <section className="contact">
                <motion.div className="contact-list" data-testid="contact-list"
                    variants={contactVariants}
                    initial="initial"
                    animate="withMotion">
                    <h1>contact me...</h1>
                    <address className="contact-info">
                        <FaEnvelope className="fa-style" />
                        <h3>vladimir.monarov@yahoo.com</h3>
                    </address>
                    <address className="contact-info">
                        <FaPhoneSquareAlt className="fa-style" />
                        <h3>+381 64 546 94 31</h3>
                    </address>
                    <address className="contact-info">
                        <FaMapMarkerAlt className="fa-style" />
                        <h3>Bulevar Kralja Petra 15, Novi Sad</h3>
                    </address>
                </motion.div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact;