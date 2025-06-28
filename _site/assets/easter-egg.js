// Print an image from a URI, at original size
// If you want to use console-log-img in the browser, you need to use a CDN import
import "https://cdn.jsdelivr.net/npm/console-log-img@1.0.2/dist/index.min.js";

// Run this once to initialize the library
initConsoleLogImg({
    printDimensions: true,
});

console.img("https://openclipart.org/image/800px/5661");
