const estates = [
    { id: 1, name: 'Luxury Apartment in Sector 9', price: 4500, address: 'Sector 9, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 3, bathrooms: 2, area: '1500 sqft', schoolDist: '1 km', busStop: '200 m', position: [30.7400, 76.7800], image: 'assets/image1.jpg' },
    { id: 2, name: 'Modern House in Sector 15', price: 8500, address: 'Sector 15, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 4, bathrooms: 3, area: '2000 sqft', schoolDist: '1.5 km', busStop: '250 m', position: [30.7438, 76.7880], image: 'assets/image2.jpg' },
    { id: 3, name: '2BHK Apartment in Sector 22', price: 2700, address: 'Sector 22, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1200 sqft', schoolDist: '500 m', busStop: '150 m', position: [30.7398, 76.7843], image: 'assets/image3.jpg' },
    { id: 4, name: 'Spacious 3BHK House in Sector 36', price: 12000, address: 'Sector 36, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 3, bathrooms: 2, area: '1800 sqft', schoolDist: '1 km', busStop: '300 m', position: [30.7480, 76.7710], image: 'assets/image4.jpg' },
    { id: 5, name: 'Affordable Apartment in Sector 21', price: 3200, address: 'Sector 21, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1100 sqft', schoolDist: '600 m', busStop: '100 m', position: [30.7330, 76.7965], image: 'assets/image5.jpg' },
    { id: 6, name: 'Elegant Villa in Sector 8', price: 15000, address: 'Sector 8, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 5, bathrooms: 4, area: '3000 sqft', schoolDist: '2 km', busStop: '400 m', position: [30.7355, 76.7860], image: 'assets/image6.jpg' },
    { id: 7, name: 'Cozy 1BHK in Sector 17', price: 2500, address: 'Sector 17, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 1, bathrooms: 1, area: '800 sqft', schoolDist: '700 m', busStop: '100 m', position: [30.7340, 76.7810], image: 'assets/image7.jpg' },
    { id: 8, name: 'Charming House in Sector 10', price: 9000, address: 'Sector 10, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 4, bathrooms: 3, area: '2200 sqft', schoolDist: '1 km', busStop: '200 m', position: [30.7405, 76.7835], image: 'assets/image8.jpg' },
    { id: 9, name: 'Stylish Flat in Sector 26', price: 4000, address: 'Sector 26, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1000 sqft', schoolDist: '500 m', busStop: '150 m', position: [30.7400, 76.8030], image: 'assets/image9.jpg' },
    { id: 10, name: 'Lavish House in Sector 4', price: 16000, address: 'Sector 4, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 6, bathrooms: 5, area: '3500 sqft', schoolDist: '2 km', busStop: '500 m', position: [30.7240, 76.7900], image: 'assets/image10.jpg' },

    { id: 11, name: '3BHK House in Sector 5', price: 7500, address: 'Sector 5, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 3, bathrooms: 2, area: '1600 sqft', schoolDist: '1.2 km', busStop: '300 m', position: [30.7110, 76.8440], image: 'assets/image11.jpg' },
    { id: 12, name: 'Affordable 2BHK in Sector 10', price: 3000, address: 'Sector 10, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1000 sqft', schoolDist: '700 m', busStop: '150 m', position: [30.6900, 76.8640], image: 'assets/image12.jpg' },
    { id: 13, name: 'Luxury Apartment in Sector 8', price: 5000, address: 'Sector 8, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 3, bathrooms: 2, area: '1400 sqft', schoolDist: '800 m', busStop: '100 m', position: [30.6940, 76.8520], image: 'assets/image13.jpg' },
    { id: 14, name: 'Spacious 4BHK House in Sector 6', price: 9000, address: 'Sector 6, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 4, bathrooms: 3, area: '2000 sqft', schoolDist: '1.5 km', busStop: '250 m', position: [30.7070, 76.8490], image: 'assets/image14.jpg' },
    { id: 15, name: 'Modern Flat in Sector 21', price: 3500, address: 'Sector 21, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1100 sqft', schoolDist: '900 m', busStop: '200 m', position: [30.7090, 76.8400], image: 'assets/image15.jpg' },
    { id: 16, name: 'Luxury Villa in Sector 2', price: 12000, address: 'Sector 2, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 5, bathrooms: 4, area: '3200 sqft', schoolDist: '2 km', busStop: '400 m', position: [30.6930, 76.8350], image: 'assets/image16.jpg' },
    { id: 17, name: '1BHK Apartment in Sector 15', price: 2200, address: 'Sector 15, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 1, bathrooms: 1, area: '700 sqft', schoolDist: '600 m', busStop: '100 m', position: [30.7000, 76.8430], image: 'assets/image17.jpg' },
    { id: 18, name: '5BHK House near Panchkula Mall', price: 14000, address: 'Sector 11, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 5, bathrooms: 4, area: '3000 sqft', schoolDist: '1.8 km', busStop: '450 m', position: [30.6975, 76.8486], image: 'assets/image18.jpg' },
    { id: 19, name: '3BHK Apartment in Sector 12', price: 4000, address: 'Sector 12, Panchkula', type: 'buy', propertyType: 'apartment', bedrooms: 3, bathrooms: 2, area: '1500 sqft', schoolDist: '1 km', busStop: '200 m', position: [30.6920, 76.8550], image: 'assets/image19.jpg' },
    { id: 20, name: '2BHK Flat in Sector 4', price: 3200, address: 'Sector 4, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1200 sqft', schoolDist: '600 m', busStop: '150 m', position: [30.7040, 76.8390], image: 'assets/image20.jpg' },
    
    { id: 21, name: 'Affordable 2BHK in Model Town', price: 2800, address: 'Model Town, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '900 sqft', schoolDist: '500 m', busStop: '200 m', position: [30.3785, 76.7851], image: 'assets/image21.jpg' },
    { id: 22, name: 'Luxury House in Ambala City', price: 12000, address: 'Ambala City, Ambala', type: 'buy', propertyType: 'house', bedrooms: 4, bathrooms: 3, area: '2500 sqft', schoolDist: '1 km', busStop: '500 m', position: [30.3735, 76.7750], image: 'assets/image22.jpg' },
    { id: 23, name: 'Spacious 3BHK in Ambala Cantt', price: 9000, address: 'Ambala Cantt, Ambala', type: 'buy', propertyType: 'house', bedrooms: 3, bathrooms: 2, area: '1800 sqft', schoolDist: '700 m', busStop: '300 m', position: [30.3621, 76.7700], image: 'assets/image23.jpg' },
    { id: 24, name: 'Modern Flat in Nahar Singh Chowk', price: 3200, address: 'Nahar Singh Chowk, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '950 sqft', schoolDist: '600 m', busStop: '250 m', position: [30.3660, 76.7790], image: 'assets/image24.jpg' },
    { id: 25, name: 'Cozy 1BHK in Ambala', price: 2000, address: 'Near Railway Station, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 1, bathrooms: 1, area: '600 sqft', schoolDist: '300 m', busStop: '100 m', position: [30.3710, 76.7830], image: 'assets/image25.jpg' },
    { id: 26, name: 'Elegant Villa in Ambala', price: 15000, address: 'Ambala, Ambala', type: 'buy', propertyType: 'house', bedrooms: 5, bathrooms: 4, area: '3500 sqft', schoolDist: '2 km', busStop: '700 m', position: [30.3725, 76.7765], image: 'assets/image26.jpg' },
    { id: 27, name: '2BHK Apartment in Ambala City', price: 2500, address: 'Ambala City, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '950 sqft', schoolDist: '400 m', busStop: '150 m', position: [30.3750, 76.7795], image: 'assets/image27.jpg' },
    { id: 28, name: '3BHK House in Sector 9', price: 8500, address: 'Sector 9, Ambala', type: 'buy', propertyType: 'house', bedrooms: 3, bathrooms: 2, area: '2200 sqft', schoolDist: '1 km', busStop: '500 m', position: [30.3700, 76.7798], image: 'assets/image28.jpg' },
    { id: 29, name: 'Stylish Flat near Polytechnic Road', price: 4000, address: 'Polytechnic Road, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1000 sqft', schoolDist: '300 m', busStop: '200 m', position: [30.3680, 76.7840], image: 'assets/image29.jpg' },
    { id: 30, name: 'Modern Villa in Model Town', price: 13500, address: 'Model Town, Ambala', type: 'buy', propertyType: 'house', bedrooms: 5, bathrooms: 4, area: '3000 sqft', schoolDist: '1.5 km', busStop: '600 m', position: [30.3745, 76.7870], image: 'assets/image30.jpg' },
    
    { id: 31, name: '3BHK House in Civil Lines', price: 7500, address: 'Civil Lines, Ludhiana', type: 'buy', propertyType: 'house', bedrooms: 3, bathrooms: 2, area: '1800 sqft', schoolDist: '1 km', busStop: '400 m', position: [30.9120, 75.8480], image: 'assets/image31.jpg' },
    { id: 32, name: 'Affordable 2BHK in Sarabha Nagar', price: 3000, address: 'Sarabha Nagar, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '950 sqft', schoolDist: '500 m', busStop: '250 m', position: [30.9150, 75.8530], image: 'assets/image32.jpg' },
    { id: 33, name: 'Luxury Apartment in Mall Road', price: 5000, address: 'Mall Road, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 3, bathrooms: 2, area: '1400 sqft', schoolDist: '700 m', busStop: '300 m', position: [30.9135, 75.8500], image: 'assets/image33.jpg' },
    { id: 34, name: 'Spacious 4BHK House in Model Town', price: 9000, address: 'Model Town, Ludhiana', type: 'buy', propertyType: 'house', bedrooms: 4, bathrooms: 3, area: '2500 sqft', schoolDist: '800 m', busStop: '400 m', position: [30.9210, 75.8540], image: 'assets/image34.jpg' },
    { id: 35, name: 'Modern Flat in Dugri Road', price: 3500, address: 'Dugri Road, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '1000 sqft', schoolDist: '600 m', busStop: '300 m', position: [30.9225, 75.8570], image: 'assets/image35.jpg' },
    { id: 36, name: 'Luxury Villa in BRS Nagar', price: 12000, address: 'BRS Nagar, Ludhiana', type: 'buy', propertyType: 'house', bedrooms: 5, bathrooms: 4, area: '3500 sqft', schoolDist: '1 km', busStop: '500 m', position: [30.9105, 75.8525], image: 'assets/image36.jpg' },
    { id: 37, name: '1BHK Apartment in Kitchlu Nagar', price: 2200, address: 'Kitchlu Nagar, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 1, bathrooms: 1, area: '650 sqft', schoolDist: '400 m', busStop: '150 m', position: [30.9130, 75.8555], image: 'assets/image37.jpg' },
    { id: 38, name: '5BHK House in Ranjit Avenue', price: 14000, address: 'Ranjit Avenue, Amritsar', type: 'buy', propertyType: 'house', bedrooms: 5, bathrooms: 5, area: '4500 sqft', schoolDist: '2 km', busStop: '1 km', position: [31.6400, 74.8720], image: 'assets/image38.jpg' },
    { id: 39, name: '3BHK Apartment in Lawrence Road', price: 4000, address: 'Lawrence Road, Amritsar', type: 'rent', propertyType: 'apartment', bedrooms: 3, bathrooms: 2, area: '1200 sqft', schoolDist: '500 m', busStop: '200 m', position: [31.6335, 74.8750], image: 'assets/image39.jpg' },
    { id: 40, name: '2BHK Flat in Green Avenue', price: 3200, address: 'Green Avenue, Amritsar', type: 'rent', propertyType: 'apartment', bedrooms: 2, bathrooms: 1, area: '950 sqft', schoolDist: '400 m', busStop: '250 m', position: [31.6380, 74.8700], image: 'assets/image40.jpg' }
    
];


    function getEstateFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const estateId = urlParams.get('id');
        return estates.find(estate => estate.id == estateId);
    }

    function displayEstateDetail(estate) {
        if (!estate) {
            document.getElementById('estateDetail').innerHTML = '<h2>Estate not found</h2>';
            return;
        }

        document.getElementById('estateName').textContent = estate.name;
        document.getElementById('estateAddress').textContent = estate.address;
        document.getElementById('estatePrice').textContent = `$${estate.price}`;
        document.getElementById('estateBedrooms').textContent = `${estate.bedrooms} Bedrooms`;
        document.getElementById('estateBathrooms').textContent = ` ${estate.bathrooms} Bathrooms`;
        document.getElementById('estateArea').textContent = ` ${estate.area} `;
        document.getElementById('estateSchoolDist').textContent = `${estate.schoolDist} away`;
        document.getElementById('estateBusStop').textContent = ` ${estate.busStop} away`;

        const estateImage = document.getElementById('estateImage');
        estateImage.src = estate.image;
        estateImage.alt = estate.name;

        const map = L.map('estateMap').setView([30.7333, 76.7794], 10);  

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);


        const marker = L.marker(estate.position).addTo(map)
            .bindPopup(`<b>${estate.name}</b><br>${estate.address}<br>Price: $${estate.price}`)
            .openPopup();

        setTimeout(() => {
            map.flyTo(estate.position, 15, {
                animate: true,
                duration: 2  
            });
        }, 1000);  
    }

    const estate = getEstateFromURL();
    displayEstateDetail(estate);

    