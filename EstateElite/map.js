const estates = [
    { id: 1, name: 'Luxury Apartment in Sector 9', price: 4500, address: 'Sector 9, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 3, position: [30.7400, 76.7800], image: 'assets/image1.jpg' },
    { id: 2, name: 'Modern House in Sector 15', price: 8500, address: 'Sector 15, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 4, position: [30.7438, 76.7880], image: 'assets/image2.jpg' },
    { id: 3, name: '2BHK Apartment in Sector 22', price: 2700, address: 'Sector 22, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.7398, 76.7843], image: 'assets/image3.jpg' },
    { id: 4, name: 'Spacious 3BHK House in Sector 36', price: 12000, address: 'Sector 36, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 3, position: [30.7480, 76.7710], image: 'assets/image4.jpg' },
    { id: 5, name: 'Affordable Apartment in Sector 21', price: 3200, address: 'Sector 21, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.7330, 76.7965], image: 'assets/image5.jpg' },
    { id: 6, name: 'Elegant Villa in Sector 8', price: 15000, address: 'Sector 8, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 5, position: [30.7355, 76.7860], image: 'assets/image6.jpg' },
    { id: 7, name: 'Cozy 1BHK in Sector 17', price: 2500, address: 'Sector 17, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 1, position: [30.7340, 76.7810], image: 'assets/image7.jpg' },
    { id: 8, name: 'Charming House in Sector 10', price: 9000, address: 'Sector 10, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 4, position: [30.7405, 76.7835], image: 'assets/image8.jpg' },
    { id: 9, name: 'Stylish Flat in Sector 26', price: 4000, address: 'Sector 26, Chandigarh', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.7400, 76.8030], image: 'assets/image9.jpg' },
    { id: 10, name: 'Lavish House in Sector 4', price: 16000, address: 'Sector 4, Chandigarh', type: 'buy', propertyType: 'house', bedrooms: 6, position: [30.7240, 76.7900], image: 'assets/image10.jpg' },
    
    { id: 11, name: '3BHK House in Sector 5', price: 7500, address: 'Sector 5, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 3, position: [30.7110, 76.8440], image: 'assets/image11.jpg' },
    { id: 12, name: 'Affordable 2BHK in Sector 10', price: 3000, address: 'Sector 10, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.6900, 76.8640], image: 'assets/image12.jpg' },
    { id: 13, name: 'Luxury Apartment in Sector 8', price: 5000, address: 'Sector 8, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 3, position: [30.6940, 76.8520], image: 'assets/image13.jpg' },
    { id: 14, name: 'Spacious 4BHK House in Sector 6', price: 9000, address: 'Sector 6, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 4, position: [30.7070, 76.8490], image: 'assets/image14.jpg' },
    { id: 15, name: 'Modern Flat in Sector 21', price: 3500, address: 'Sector 21, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.7090, 76.8400], image: 'assets/image15.jpg' },
    { id: 16, name: 'Luxury Villa in Sector 2', price: 12000, address: 'Sector 2, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 5, position: [30.6930, 76.8350], image: 'assets/image16.jpg' },
    { id: 17, name: '1BHK Apartment in Sector 15', price: 2200, address: 'Sector 15, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 1, position: [30.7000, 76.8430], image: 'assets/image17.jpg' },
    { id: 18, name: '5BHK House near Panchkula Mall', price: 14000, address: 'Sector 11, Panchkula', type: 'buy', propertyType: 'house', bedrooms: 5, position: [30.6975, 76.8486], image: 'assets/image18.jpg' },
    { id: 19, name: '3BHK Apartment in Sector 12', price: 4000, address: 'Sector 12, Panchkula', type: 'buy', propertyType: 'apartment', bedrooms: 3, position: [30.6920, 76.8550], image: 'assets/image19.jpg' },
    { id: 20, name: '2BHK Flat in Sector 4', price: 3200, address: 'Sector 4, Panchkula', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.7040, 76.8390], image: 'assets/image20.jpg' },
    { id: 21, name: 'Affordable 2BHK in Model Town', price: 2800, address: 'Model Town, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.3785, 76.7851], image: 'assets/image21.jpg' },
    { id: 22, name: 'Luxury House in Ambala City', price: 12000, address: 'Ambala City, Ambala', type: 'buy', propertyType: 'house', bedrooms: 4, position: [30.3735, 76.7750], image: 'assets/image22.jpg' },
    { id: 23, name: 'Spacious 3BHK in Ambala Cantt', price: 9000, address: 'Ambala Cantt, Ambala', type: 'buy', propertyType: 'house', bedrooms: 3, position: [30.3621, 76.7700], image: 'assets/image23.jpg' },
    { id: 24, name: 'Modern Flat in Nahar Singh Chowk', price: 3200, address: 'Nahar Singh Chowk, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.3660, 76.7790], image: 'assets/image24.jpg' },
    { id: 25, name: 'Cozy 1BHK in Ambala', price: 2000, address: 'Near Railway Station, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 1, position: [30.3710, 76.7830], image: 'assets/image25.jpg' },
    { id: 26, name: 'Elegant Villa in Ambala', price: 15000, address: 'Ambala, Ambala', type: 'buy', propertyType: 'house', bedrooms: 5, position: [30.3725, 76.7765], image: 'assets/image26.jpg' },
    { id: 27, name: '2BHK Apartment in Ambala City', price: 2500, address: 'Ambala City, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.3750, 76.7795], image: 'assets/image27.jpg' },
    { id: 28, name: '3BHK House in Sector 9', price: 8500, address: 'Sector 9, Ambala', type: 'buy', propertyType: 'house', bedrooms: 3, position: [30.3700, 76.7798], image: 'assets/image28.jpg' },
    { id: 29, name: 'Stylish Flat near Polytechnic Road', price: 4000, address: 'Polytechnic Road, Ambala', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.3680, 76.7840], image: 'assets/image29.jpg' },
    { id: 30, name: 'Modern Villa in Model Town', price: 13500, address: 'Model Town, Ambala', type: 'buy', propertyType: 'house', bedrooms: 5, position: [30.3745, 76.7870], image: 'assets/image30.jpg' },
    
    { id: 31, name: '3BHK House in Civil Lines', price: 7500, address: 'Civil Lines, Ludhiana', type: 'buy', propertyType: 'house', bedrooms: 3, position: [30.9120, 75.8480], image: 'assets/image31.jpg' },
    { id: 32, name: 'Affordable 2BHK in Sarabha Nagar', price: 3000, address: 'Sarabha Nagar, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.9150, 75.8530], image: 'assets/image32.jpg' },
    { id: 33, name: 'Luxury Apartment in Mall Road', price: 5000, address: 'Mall Road, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 3, position: [30.9135, 75.8500], image: 'assets/image33.jpg' },
    { id: 34, name: 'Spacious 4BHK House in Model Town', price: 9000, address: 'Model Town, Ludhiana', type: 'buy', propertyType: 'house', bedrooms: 4, position: [30.9210, 75.8540], image: 'assets/image34.jpg' },
    { id: 35, name: 'Modern Flat in Dugri Road', price: 3500, address: 'Dugri Road, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [30.9225, 75.8570], image: 'assets/image35.jpg' },
    { id: 36, name: 'Luxury Villa in BRS Nagar', price: 12000, address: 'BRS Nagar, Ludhiana', type: 'buy', propertyType: 'house', bedrooms: 5, position: [30.9105, 75.8525], image: 'assets/image36.jpg' },
    { id: 37, name: '1BHK Apartment in Kitchlu Nagar', price: 2200, address: 'Kitchlu Nagar, Ludhiana', type: 'rent', propertyType: 'apartment', bedrooms: 1, position: [30.9130, 75.8555], image: 'assets/image37.jpg' },
    { id: 38, name: '5BHK House in Ranjit Avenue', price: 14000, address: 'Ranjit Avenue, Amritsar', type: 'buy', propertyType: 'house', bedrooms: 5, position: [31.6400, 74.8720], image: 'assets/image38.jpg' },
    { id: 39, name: '3BHK Apartment in Lawrence Road', price: 4000, address: 'Lawrence Road, Amritsar', type: 'rent', propertyType: 'apartment', bedrooms: 3, position: [31.6335, 74.8750], image: 'assets/image39.jpg' },
    { id: 40, name: '2BHK Flat in Green Avenue', price: 3200, address: 'Green Avenue, Amritsar', type: 'rent', propertyType: 'apartment', bedrooms: 2, position: [31.6380, 74.8700], image: 'assets/image40.jpg' }
];



// Leaflet map initialization
const map = L.map('map').setView([30.7400, 76.7800], 10); // Default center

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

function filterEstates() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('type').value;
    const propertyTypeFilter = document.getElementById('propertyType').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const bedroomsFilter = document.getElementById('bedrooms').value;

    const filteredEstates = estates.filter(estate => {
        const matchesSearch = estate.name.toLowerCase().includes(searchTerm) || estate.address.toLowerCase().includes(searchTerm);
        const matchesType = (typeFilter === 'any' || estate.type === typeFilter );
        const matchesPropertyType = (propertyTypeFilter === 'any' || estate.propertyType === propertyTypeFilter);
        const matchesPrice = estate.price >= minPrice && estate.price <= maxPrice;
        const matchesBedrooms = (bedroomsFilter === 'any' || estate.bedrooms == bedroomsFilter);

        return matchesSearch && matchesType && matchesPropertyType && matchesPrice && matchesBedrooms;
    });

    displayEstates(filteredEstates);

    if (filteredEstates.length === 0) {
        alert('No estate found matching the criteria');
    }
}

function displayEstates(estateList) {
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    estateList.forEach(estate => {
        L.marker(estate.position)
            .addTo(map)
            .bindPopup(`<b>${estate.name}</b><br>${estate.address}<br>Price: $${estate.price}`);
    });

    const estateListDiv = document.getElementById('estateList');
    estateListDiv.innerHTML = '';

    estateList.forEach(estate => {
        const estateCard = document.createElement('a');
        estateCard.classList.add('estate-card');
        estateCard.href = `estateDetail.html?id=${estate.id}`; 
        estateCard.innerHTML = 
            `<div class="estate-image-wrapper">
                <img src="${estate.image}" alt="${estate.name}" class="estate-image">
            </div>
            <div class="estate-info">
                <div class="estate-name-bedrooms">
                    <h4 class="estate-name">${estate.name}</h4>
                    <p class="estate-address">
                        <span class="material-icons" style="vertical-align: middle;">place</span>
                        ${estate.address}
                    </p>
                    <p class="estate-price">Price: $${estate.price}</p>
                </div>
                <div class="estate-bedrooms">
                    <span class="material-icons" style="vertical-align: middle;">hotel</span>
                    ${estate.bedrooms} Bedrooms
                </div>
            </div>`;

        estateListDiv.appendChild(estateCard);
    });

    if (estateList.length > 0) {
        const avgLat = estateList.reduce((sum, estate) => sum + estate.position[0], 0) / estateList.length;
        const avgLng = estateList.reduce((sum, estate) => sum + estate.position[1], 0) / estateList.length;
        map.flyTo([avgLat, avgLng], 10, { duration: 2 }); 
    }
}

document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    filterEstates();
});

window.onload = function() {
    document.getElementById('addPropertyBtn').onclick = function() {
        document.getElementById('addPropertyModal').style.display = 'block';
    };

    document.getElementsByClassName('close')[0].onclick = function() {
        document.getElementById('addPropertyModal').style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == document.getElementById('addPropertyModal')) {
            document.getElementById('addPropertyModal').style.display = 'none';
        }
    };

    document.getElementById('addPropertyForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const fileInput = document.getElementById('propertyImage');
        const file = fileInput.files[0];
    
    
        const name = document.getElementById('propertyName').value;
        const address = document.getElementById('propertyAddress').value;
        const price = parseFloat(document.getElementById('propertyPrice').value);
        const type = document.getElementById('propertyType').value;
        const propertyType = document.getElementById('propertyCategory').value;
        const bedrooms = parseInt(document.getElementById('propertyBedrooms').value);
    
        if (!name || !address || isNaN(price) || !type || !propertyType || isNaN(bedrooms) || !file) {
            alert('Please fill in all fields correctly.');
            return;
        }
    
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const newProperty = {
                    id: estates.length + 1,
                    name: name,
                    address: address,
                    price: price,
                    type: type,
                    propertyType: propertyType,
                    bedrooms: bedrooms,
                    position: [30.7400, 76.7800], // Default position, you may want to change this
                    image: event.target.result  // Use the Base64-encoded image
                };
    
                estates.push(newProperty);
                localStorage.setItem('estates', JSON.stringify(estates));
    
                document.getElementById('addPropertyModal').style.display = 'none';
                displayEstates(estates);
            };
            reader.readAsDataURL(file);  // Convert image file to Base64
        }
    });
    console.log('Adding property:', newProperty);
    const storedEstates = localStorage.getItem('estates');
    if ( storedEstates) {
        estates.push(...JSON.parse(storedEstates));
    }
    displayEstates(estates);
};

displayEstates(estates);