
function handleLogin(event) {
    event.preventDefault();
    const validUsername = 'user';
    const validPassword = 'password';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        window.location.href = 'destinations.html';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

const destinations = [
    { 
        id: 'destination1', 
        title: 'Ajanta and Ellora Caves', 
        imgSrc: 'Images/Ajanta 1.jpg', 
        description: 'Ajanta and Ellora caves, considered to be one of the finest examples of ancient rock-cut caves, are located near Aurangabad in Maharashtra, India. Ajanta and Ellora caves complex is adorned with beautiful sculptures, paintings, and frescoes and include Buddhist monasteries, Hindu and Jain temples. The Ajanta caves are 29 in number and were built between the 2nd century BC and 6th century AD, whereas the Ellora Caves are more spread out and 34 in number and dates to the period between 6th and 11th Century AD.', 
        location: 'Maharashtra, India',
        weather: 'Sunny with occasional clouds',
    },
    { 
        id: 'destination2', 
        title: 'Alibaug', 
        imgSrc: 'Images/alibag 1.jpg', 
        description: 'Alibaug Tourism Alibaug (also spelled as Alibag) is a small coastal town in the Konkan region of Maharashtra, known for its beaches, villas, and beautiful scenery. Alibag is very popular as a weekend getaway from the cities of Mumbai and Pune. Water sports in Alibaug like parasailing, banana boat and jet ski and speed boating are quite popular during the dry season. Most tourist families spend at least one night in Alibag with extending to multiple nights.  ', 
        location: 'Maharashtra, India',
        weather: 'Moderate temperature, occasional rain',
    },
    { 
        id: 'destination3', 
        title: 'Khandala', 
        imgSrc: 'Images/Khandala 1.jpg', 
        description: 'Khandala Tourism Khandala is a popular hill station in Maharashtra, perched on the foothills of Sahyadri in the Western Ghats. Khandala provides for a perfect weekend respite for the Mumbai population, with its scenic valleys, grassy hills, serene lakes and misty waterfalls. It is one of the twin hill stations - Lonavala and Khandala. The place immortalized by the popular Bollywood song, "Aati Kya Khandala", is a must-visit destination for everyone looking for beautiful nature, pleasant weather and the feeling of mist in the air. The natural beauty of Khandala blooms to its zenith and reveals a magical charm during the monsoons. Its meandering waterfalls and glittering lakes attributes to the majestic look an imposing ambience.', 
        location: 'Maharashtra, India',
        weather: 'Cool with fog in mornings and evenings',
    },
    { 
        id: 'destination4', 
        title: 'Lonawala', 
        imgSrc: 'Images/Lonawala 1.jpg', 
        description: 'Lonavala Tourism Situated in the Sahyadri range of the Western Ghats close to Pune and Mumbai, Lonavala is the most visited hill station in Maharashtra and the place to be during monsoons. With lots of waterfalls, lakes and hills around, it is a popular destination for camping, trekking and other adventure sports', 
        location: 'Maharashtra, India',
        weather: 'Pleasant, occasional showers',
    },
    { 
        id: 'destination5', 
        title: 'Mahabaleshwar', 
        imgSrc: 'Images/mahabaleshwar 1.jpg', 
        description: 'Mahabaleshwar is a hill station located in the Western Ghats, in Satara district of Maharashtra. Apart from its strawberries, Mahabaleshwar is also well known for its numerous rivers, magnificent cascades and majestic peaks. It is among the most sought after weekend getaways from Pune & Mumbai, located about 120km south-west of Pune and 285km from Mumbai.', 
        location: 'Maharashtra, India',
        weather: 'Cool and misty, light rain expected',
    },
    { 
        id: 'destination6', 
        title: 'Bhandaradara', 
        imgSrc: './Images/bhandardara 1.jpg', 
      description: "Bhandardara, a hill station nestled in the Sahyadri ranges of Maharashtra, has all the nature's blessings a place can get. The lush greenery, the humble waterfalls and surrounded by high mountains makes for the perfect holiday spot for city dwellers. Situated in the Ahmednagar district of Maharashtra, Bhandardara is 117 km. from Mumbai and is easily accessible through roadways. This little village is packed with so many attractions coupled with the serenity of the nature that it makes for an adventurous weekend to run away from the hustle and bustle of the cities.",
        location: 'Maharashtra, India',
        weather: 'Moderate with sunshine and clear skies',
    },
];

function renderDestinations() {
    const gridContainer = document.querySelector('.destinations-grid');
    gridContainer.innerHTML = destinations.map(destination => `
        <div class="destination-card">
            <img src="${destination.imgSrc}" alt="${destination.title}" onclick="showDestinationDetail('${destination.id}')">
            <p>${destination.description.slice(0, 100)}... <a href="#" onclick="showDestinationDetail('${destination.id}')">Read more</a></p>
            <button onclick="showDestinationDetail('${destination.id}')">Explore...</button>
        </div>
    `).join('');
}

function showDestinationDetail(destinationId) {
    const destination = destinations.find(dest => dest.id === destinationId);
    if (destination) {
        localStorage.setItem('selectedDestination', JSON.stringify(destination));
        window.location.href = 'destinationdetails.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.destinations-grid')) {
        renderDestinations();
    }
    const destinationDetailElement = document.getElementById('destinationDetail');
    if (destinationDetailElement) {
        const selectedDestination = JSON.parse(localStorage.getItem('selectedDestination'));
        if (selectedDestination) {
            const details = `
                <h2>${selectedDestination.title}</h2>
                <img src="${selectedDestination.imgSrc}" alt="${selectedDestination.title}">
                <p>${selectedDestination.description}</p>
                <p><strong>Location:</strong> ${selectedDestination.location}</p>
                <p><strong>Weather:</strong> ${selectedDestination.weather}</p>
            `;
            destinationDetailElement.innerHTML = details;
        }
    }
});

