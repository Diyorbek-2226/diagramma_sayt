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
