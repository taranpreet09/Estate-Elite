const fs = require('fs');
const https = require('https');

// Replace this with your Pixabay API key
const apiKey = '46703061-a5e8776f1993926cd498302ac';
const query = 'house';
const perPage = 40;  // Number of images to fetch

// Pixabay API endpoint
const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&per_page=${perPage}`;

// Fetch the images
https.get(url, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
        const images = JSON.parse(data).hits;

        images.forEach((image, index) => {
            const imageUrl = image.largeImageURL;
            const file = fs.createWriteStream(`image${index + 1}.jpg`);

            // Download and save each image
            https.get(imageUrl, (imageRes) => {
                imageRes.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: image${index + 1}.jpg`);
                });
            });
        });
    });

}).on('error', (e) => {
    console.error(`Error fetching images: ${e.message}`);
});
