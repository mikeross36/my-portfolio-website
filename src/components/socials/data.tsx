import nextId from "react-id-generator"
import {FaFacebook,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"

export const socialIcons = [
    {
        id:nextId(),
        url: "https://sr-rs.facebook.com/fitposle.cetrdeset",
        icon: <FaFacebook/>
    },
    {
        id:nextId(),
        url: "https://github.com/mikeross36",
        icon: <FaGithub/>
    },
    {
        id:nextId(),
        url: "https://rs.linkedin.com/in/vladimir-monarov-8b79511a2",
        icon: <FaLinkedin/>
    },
    {
        id:nextId(),
        url: "https://twitter.com/?lang=en",
        icon: <FaTwitter/>
    },
]