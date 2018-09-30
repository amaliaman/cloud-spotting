const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const getRandomSize = () => {
    // units????????
    const min = 40;
    const max = 80;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDegrees = () => {
    return `${Math.floor(Math.random() * 360)}deg`;
};

const getRandomPosition = (size) => {
    // const x = Math.floor((Math.random() * ($('#cube-container').width() - size)));
    // const y = Math.floor((Math.random() * ($('#cube-container').height() - size)));
    const units = 'px';
    const x = `${Math.floor((Math.random() * (900 - size)))}${units}`;
    const y = `${Math.floor((Math.random() * (500 - size)))}${units}`;
    return { x, y };
};

const boxUtils = {
    // Methods
    getRandomColor: getRandomColor,
    getRandomSize: getRandomSize,
    getRandomDegrees: getRandomDegrees,
    getRandomPosition: getRandomPosition
};

export default boxUtils;