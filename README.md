# Weather Project 
 the live link is https://weatherappbyferdousali.netlify.app/

Weather Project is a simple and responsive weather web application built using HTML, CSS, and JavaScript. It allows users to search for a city and view the current weather details in a clean card-style interface.

The project uses WeatherAPI to fetch real-time weather information and display it directly on the page.

## Project Overview

This project was created to practice working with APIs, JavaScript DOM manipulation, and responsive web design. The user can type the name of any city in the search box, submit the form, and the app will show updated weather information for that location.

## Features

- Search weather by city or location name
- Display current temperature in Celsius
- Show the selected city name
- Display local date and time for the searched location
- Show the current weather condition, such as mist, cloudy, sunny, or rain
- Fetch live weather data from WeatherAPI
- Update the web page dynamically without reloading
- Responsive layout for desktop and mobile screens
- Modern glass-style weather card design

## Technologies Used

- HTML5 for the page structure
- CSS3 for styling, layout, and responsive design
- JavaScript for functionality and API integration
- WeatherAPI for real-time weather data

## How the Project Works

1. The user enters a city name in the search input.
2. When the search button is clicked, JavaScript prevents the page from refreshing.
3. The app sends a request to WeatherAPI using the entered city name.
4. WeatherAPI returns current weather data for that location.
5. JavaScript extracts important data such as temperature, city name, local time, and weather condition.
6. The app updates the weather card with the new information.

## Project Structure

```text
weather-project/
├── index.html
├── style.css
└── script.js
