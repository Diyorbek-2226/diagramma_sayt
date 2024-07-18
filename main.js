document.addEventListener('DOMContentLoaded', () => {
    const saidbarItems = document.querySelectorAll('.saidbar-list');

    saidbarItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            saidbarItems.forEach(i => i.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar', // The type of chart we want to create
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // The labels for the data
            datasets: [{
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3], // The data itself
                backgroundColor: [ // Colors for the bars
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [ // Border colors for the bars
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1 // Border width of the bars
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Start the y-axis at zero
                }
            }
        }
    });
});
