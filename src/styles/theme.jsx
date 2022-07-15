const colors = {
    primary: 'blue',
    font: '#333',
    lightNeutral: '#e0e0e0',
};

const fonts = {
    logotype: '"Roboto", sans-serif',
};

const mixins = {
    flexbox: (direction, justify, align, gap) => {
        return `display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};`;
    },
    position: (position, top, right, bottom, left) => {
        return `position: ${position};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};`;
    },
};

const styles = {
    border: {
        light: 'border: 1px solid #e0e0e0; border-radius: 5px;',
    },
};

const box = {
    lightHover: `
        ${styles.border.light};
        :hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        cursor: pointer;`,
};

const theme = {
    colors,
    fonts,
    mixins,
    styles: { ...styles, box },
};

export default theme;
