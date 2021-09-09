export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const itemVariants = {
    hidden: { y: 20, opacity: 0, transition: { duration: 0.5 } },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};