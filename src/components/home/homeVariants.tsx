export const nameVariants = {
    initial: {
        opacity: 0,
        x: "100vw"
    },
    withMotion: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", delay: .5 }
    }
};
export const titleVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    withMotion: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", delay: .5 }
    }
};
export const underlineVariants = {
    initial: {
        opacity: 0
    },
    withMotion: {
        opacity: 1,
        transition: { type: "spring", delay: .8 }
    }
};
