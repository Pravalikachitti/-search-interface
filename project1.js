// Handling dropdown menu functionality
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
let selectedCategory = '';

// Toggle the dropdown menu visibility
dropdownBtn.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown when clicking outside of the menu
document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = 'none';
  }
});

// Handle category selection
const dropdownItems = dropdownMenu.querySelectorAll('li');
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    selectedCategory = item.textContent;
    dropdownBtn.textContent = selectedCategory;
    dropdownMenu.style.display = 'none';
  });
});

// Handle search button click
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    console.log(`Searching for "${query}" in ${selectedCategory}...`);
  } else {
    alert('Please enter a search query.');
  }
});
