// DOM Elements
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const day = document.getElementById("day");
const date = document.getElementById("date");
const newsList = document.getElementById("news-list");
const clearNewsBtn = document.getElementById("clear-news");

// API Key (replace with your own key)
const apiKey = '5af2d1cb0775ba3dd9191c659f96b3b1';

// Update time and date every second
function updateTimeAndDate() {
    const currentTime = new Date();

    // Update time
    hrs.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    min.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    sec.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');

    // Update day and date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    day.innerHTML = days[currentTime.getDay()];
    date.innerHTML = `${currentTime.getDate()} ${months[currentTime.getMonth()]} ${currentTime.getFullYear()}`;
}

// Function to fetch global news
async function fetchGlobalNews() {
    try {
        const url = `https://gnews.io/api/v4/top-headlines?lang=en&token=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 426) {
                throw new Error("API requires an upgrade. Check API documentation.");
            } else if (response.status === 401) {
                throw new Error("Invalid API key. Please verify your API key.");
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }

        const data = await response.json();
        console.log('API Response:', data); // Debug log
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        newsList.innerHTML = `<li>${error.message || "Unable to fetch news. Please try again later."}</li>`;
    }
}

// Function to display news in the DOM
function displayNews(articles) {
    newsList.innerHTML = ''; // Clear previous news

    if (!articles || articles.length === 0) {
        newsList.innerHTML = `<li>No news articles found.</li>`;
        return;
    }

    // Add each article to the list
    articles.forEach(article => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = article.url;
        link.target = '_blank';
        link.textContent = article.title;

        listItem.appendChild(link);
        newsList.appendChild(listItem);
    });
}

// Event listener for clearing news
clearNewsBtn.addEventListener('click', () => {
    newsList.innerHTML = ''; // Clear the news list manually
});

// Initialize application
function initApp() {
    // Start updating time and date
    setInterval(updateTimeAndDate, 1000);

    // Fetch news on load
    fetchGlobalNews();
}

// Start the app
initApp();
