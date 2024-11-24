// JavaScript to handle filtering and searching
const searchBar = document.getElementById('searchBar');
const engagementFilter = document.getElementById('engagementFilter');
const ageFilter = document.getElementById('ageFilter');
const countryFilter = document.getElementById('countryFilter');
const categoryFilter = document.getElementById('categoryFilter');
const followersFilter = document.getElementById('followersFilter');
const genderFilter = document.getElementById('genderFilter');
const creatorContainer = document.getElementById('creatorContainer');
const creatorCards = document.querySelectorAll('.creator-card');

// Search by name
searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    creatorCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(searchText) ? '' : 'none';
    });
});

// Filter function
function filterCreators() {
    const filters = {
        engagement: engagementFilter.value,
        age: ageFilter.value,
        country: countryFilter.value,
        category: categoryFilter.value,
        followers: followersFilter.value,
        gender: genderFilter.value,
    };

    creatorCards.forEach(card => {
        const matches = Object.keys(filters).every(key => {
            if (!filters[key]) return true;
            return card.getAttribute(`data-${key}`) === filters[key];
        });
        card.style.display = matches ? '' : 'none';
    });
}

// Add event listeners to filters
[engagementFilter, ageFilter, countryFilter, categoryFilter, followersFilter, genderFilter].forEach(filter => {
    filter.addEventListener('change', filterCreators);
});
