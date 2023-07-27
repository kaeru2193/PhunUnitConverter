const phunUnits = {
    leng: 0.2874,
    mass: 1.9782,
    time: 0.3483,
    temp: 0.6944,
};
const SIUnits = {
    leng: 1,
    mass: 1,
    time: 1,
    temp: 1,
};
export function ConvertUnits(value, type, direction) {
    const phunFactor = phunUnits[type];
    const SIFactor = SIUnits[type];
    let convertFactor = 0;
    if (direction == "P2E") {
        convertFactor = phunFactor / SIFactor;
    }
    else if (direction == "E2P") {
        convertFactor = SIFactor / phunFactor;
    }
    const converted = value * convertFactor;
    return converted;
}
