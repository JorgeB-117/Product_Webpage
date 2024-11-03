// Task 2: Fetch Products from the API Using Fetch and Promises

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.course-api.com/javascript-store-products') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        
});