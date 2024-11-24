document.addEventListener("DOMContentLoaded", () => {
    // Search functionality
    const searchBar = document.querySelector(".search-bar");

    searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const campaigns = document.querySelectorAll(".campaign-card");

        campaigns.forEach(card => {
            const title = card.querySelector("h2").textContent.toLowerCase();
            card.style.display = title.includes(query) ? "block" : "none";
        });
    });
});



<div class="campaign-card" onclick="window.location.href='asus-rog-strix-campaign.html';">
    <div class="campaign-card-content">
        <h3>ASUS ROG Strix G16 Campaign</h3>
        <p>Become a creator for the latest ASUS ROG gaming laptop!</p>
    </div>
</div>
