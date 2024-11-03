// Task 2: Fetch Products from the API Using Fetch and Promises

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.course-api.com/javascript-store-products') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })

// Task 3: Display Product Details Dynamically

        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const { company, price, name } = product.fields;
                const imageUrl = product.fields.image[0].url; //separates product data in fields 
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${imageUrl}" alt="${name}" style="width: 100px; height: 100px;">
                <div>
                    <h2>${name}</h2>
                    <p>Company: ${company}</p>
                    <p>Price: $${(price / 10).toFixed(2)}</p>
                <div>`;  // This will update dynamically in the html file 
                productList.appendChild(productDiv);
            });
        })

// Task 4: Handle Errors Gracefully    

        .catch(error => {
            console.error('Error fetching products:', error);
            const productList = document.getElementById('product-list');
            productList.innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
});