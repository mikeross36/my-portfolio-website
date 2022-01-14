import { motion } from "framer-motion"
import Footer from "../footer/Footer";
import { nameVariants, underlineVariants, titleVariants } from "./homeVariants";

type MyName = {firstName:string, lastName:string} & typeof defaultProps;

const defaultProps = {
    firstName: "Vladimir",
    lastName: "Monarov"
}

const Home = (props:MyName) => {
    return (
        <section className="home">
            <div className="home-wrapper">
                <motion.h1 className="name"
                    variants={nameVariants}
                    initial="initial"
                    animate="withMotion"
                >
                    {props.firstName}{" "}{props.lastName}
                </motion.h1>
                <motion.div className="underline"
                    variants={underlineVariants}
                    initial="initial"
                    animate="withMotion"
                ></motion.div>
                <motion.h3 className="title"
                    variants={titleVariants}
                    initial="initial"
                    animate="withMotion"
                >front end developer</motion.h3>
            </div>
            <Footer />
        </section>
    )
}

Home.defaultProps = defaultProps;

export default Home;

