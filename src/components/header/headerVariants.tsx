export const menuBtnVariants = {
    initial: {
        opacity: 0,
        y: "100vh"
    },
    withMotion: {
        opacity: 1,
        y: 0,
    }
};

export const navVariants = {
    initial: {
        opacity: 0
    },
    withMotion: {
        opacity: 1,
        transition: {type: "spring", delay: .8}
    }
}
