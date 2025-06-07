document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const newsItems = document.querySelectorAll('.news-item');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            categories.forEach(cat => cat.classList.remove('active'));
            // Add active class to clicked category
            category.classList.add('active');

            const selectedCategory = category.getAttribute('data-category');

            // Show/hide news items based on category
            newsItems.forEach(item => {
                if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
