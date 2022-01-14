import nextId from "react-id-generator"
import {FaGithub, FaEye} from "react-icons/fa"
import responsive from "../../images/responsive-website.png"
import sandwich from "../../images/sandwich-bar.png"
import dzuns from "../../images/dzuns-ns.png"
import dream from "../../images/dream-job.png"
import michelangelo from "../../images/michelangelo-ns.png"

export const projects = [
    {
        id: nextId(),
        image: responsive,
        btns: [
            {id:nextId(), url:"https://some-responsive-website.netlify.app/",icon:<FaEye/>},
            {id:nextId(), url:"https://github.com/mikeross36",icon:<FaGithub/>}
        ]
    },
    {
        id: nextId(),
        image: sandwich,
        btns: [
            {id:nextId(), url: "https://sandwich-bar.netlify.app/",icon:<FaEye/>},
            {id:nextId(), url:"https://github.com/mikeross36",icon:<FaGithub/>}
        ]
    },
    {
        id: nextId(),
        image: dzuns,
        btns: [
            {id:nextId(), url:"https://dzudo-and-gym.netlify.app/",icon:<FaEye/>},
            {id:nextId(), url:"https://github.com/mikeross36",icon:<FaGithub/>}
        ]
    },
    {
        id: nextId(),
        image: dream,
        btns: [
            {id:nextId(), url:"https://find-dream-job.netlify.app/",icon:<FaEye/>},
            {id:nextId(), url:"https://github.com/mikeross36",icon:<FaGithub/>}
        ]
    },
    {
        id: nextId(),
        image: michelangelo,
        btns: [
            {id:nextId(), url:"https://caffe-michelangelo-ns.netlify.app/",icon:<FaEye/>},
            {id:nextId(), url:"https://github.com/mikeross36",icon:<FaGithub/>}
        ]
    },
]