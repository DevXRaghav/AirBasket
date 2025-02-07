document.getElementById("flightSearchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let fromLocation = document.getElementById("fromLocation").value;
    let toLocation = document.getElementById("toLocation").value;
    let departureDate = document.getElementById("departureDate").value;
    // Logic to fetch flight results dynamically
    console.log(`Searching for flights from ${fromLocation} to ${toLocation} on ${departureDate}`);
});
