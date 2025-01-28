const suggestionsData = {
    fruits: [
        "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape",
        "Honeydew", "Kiwi", "Lemon", "Mango", "Orange", "Papaya", "Quince",
        "Raspberry", "Strawberry", "Watermelon", "Zucchini"
    ],
    flowers: [
        "Aster", "Begonia", "Chrysanthemum", "Daffodil", "Edelweiss", 
        "Freesia", "Gardenia", "Hydrangea", "Iris", "Jasmine", "Kalanchoe", 
        "Lavender", "Lily", "Marigold", "Narcissus", "Orchid", "Peony", 
        "Queen Anne's Lace", "Rose", "Sunflower", "Tulip", "Umbrella Plant", 
        "Violet", "Wisteria", "Xeranthemum", "Yucca", "Zinnia"
    ],
    places: [
        "Athens", "Bangkok", "Cairo", "Dubai", "Edinburgh", "Florence", 
        "Geneva", "Helsinki", "Istanbul", "Jakarta", "Kyoto", "London", 
        "Mumbai", "New York", "Oslo", "Paris", "Quebec", "Rome", "Sydney", 
        "Tokyo", "Ulaanbaatar", "Venice", "Warsaw", "Xian", "Yokohama", "Zurich"
    ],
    foods: [
        "Apple Pie", "Bagel", "Cheesecake", "Dumplings", "Egg Tart", "Falafel", 
        "Garlic Bread", "Hamburger", "Ice Cream", "Jambalaya", "Kebab", 
        "Lasagna", "Muffin", "Nachos", "Omelette", "Pizza", "Quiche", 
        "Ravioli", "Sushi", "Tacos", "Udon", "Veggie Burger", "Waffles", 
        "Xiaolongbao", "Yogurt", "Zucchini Bread"
    ]
};

function showSuggestions(value, type) {
    const suggestionsList = document.getElementById(`suggestions-${type}`);
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (value.trim() === "") {
        suggestionsList.style.display = "none";
        return;
    }

    const filteredSuggestions = suggestionsData[type].filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement("li");
            li.textContent = suggestion;
            li.onclick = () => selectSuggestion(suggestion, type);
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}

function selectSuggestion(value, type) {
    document.getElementById(`search-${type}`).value = value;
    document.getElementById(`suggestions-${type}`).style.display = "none";
}
