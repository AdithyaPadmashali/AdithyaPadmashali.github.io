// Utility to stretch ASCII art horizontally by a given factor
export function stretchAsciiFrame(frame, factor = 1.5) {
    return frame.map(line => {
        let stretched = '';
        for (const char of line) {
            // Repeat each character 'factor' times (rounded)
            stretched += char.repeat(Math.round(factor));
        }
        return stretched;
    });
}
