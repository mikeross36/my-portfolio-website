export const titleVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    withMotion: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", delay: .3 }
    }
};

export const qualVariants = {
    initial: {
        opacity: 0,
        x: "100vw"
    },
    withMotion: {
        opacity: 1,
        x: 0,
        transition: {type: "spring", delay: .3}
    }
}
