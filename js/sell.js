document.getElementById('sellForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const imagesText = document.getElementById('images').value;
    const imagesArray = imagesText.split('\n').map(url => url.trim()).filter(url => url.length > 0);
    const defaultImage = 'https://via.placeholder.com/800x450/1E1E24/888?text=No+Image';

    const newCar = {
        id: Date.now(), // Generate a unique ID
        name: document.getElementById('name').value,
        brand: document.getElementById('brand').value,
        year: parseInt(document.getElementById('year').value),
        owner: document.getElementById('owner').value,
        kmsDriven: document.getElementById('kmsDriven').value,
        price: parseInt(document.getElementById('price').value),
        type: 'old', // Always pre-owned when selling
        fuel: document.getElementById('fuel').value,
        transmission: document.getElementById('transmission').value,
        mileage: document.getElementById('mileage').value,
        engine: document.getElementById('engine').value,
        seats: parseInt(document.getElementById('seats').value),
        color: document.getElementById('color').value,
        image: imagesArray[0] || defaultImage,
        images: imagesArray.length > 0 ? imagesArray : [defaultImage]
    };

    // Retrieve existing custom cars from localStorage
    const localCars = JSON.parse(localStorage.getItem('customCars') || '[]');
    
    // Add the new car
    localCars.push(newCar);
    
    // Save back to localStorage
    localStorage.setItem('customCars', JSON.stringify(localCars));
    
    // Note: The new car is also added to the 'cars' array inside carsData.js
    // immediately on next reload, making it available system-wide.
    
    alert('Car successfully listed!');
    window.location.href = 'home.html';
});
