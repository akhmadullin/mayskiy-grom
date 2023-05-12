const timestringToSecondNumber = (time: string): number => {
    const p = time.split(':');
    let s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop()!, 10);
        m *= 60;
    }

    return s;
};

export default timestringToSecondNumber;
