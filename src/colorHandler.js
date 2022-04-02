export const getColor = (c) => {
    return (colors && colors[c]) ? colors[c] : c
}

const colors = {
    primary: "blue",
    secondary: "cyan",
    danger: "red",
    warning: "orange",
    pink: "rgb(255, 0, 170)",
    purple: "purple",
    green: "lime",
}