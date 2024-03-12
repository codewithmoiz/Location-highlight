var offices = [
    {
        name: "australia",
        branches: [
            {
                name: "Australia",
                number: "+17137799901",
                email: "australia@globalship.com.au",
                image: "Images/australia.png"
            },
            {
                name: "New Zealand",
                number: "+17137799901",
                email: "new.zealand@globalshipservices.net",
                image: "Images/new-zealand.png"
            }
        ]
    },
    {
        name: "north-america",
        branches: [
            {
                name: "Canada",
                number: "+17137799901",
                email: "canada@globalship.com.au",
                image: "Images/canada.png"
            },
            {
                name: "United States (Head Office)",
                number: "+17137799901",
                email: "us@globalship.com.au",
                image: "Images/united-states.png"
            }
        ]
    },
    {
        name: "asia",
        branches: [
            {
                name: "Pakistan",
                number: "+17137799901",
                email: "pakistan@globalship.com.au",
                image: "Images/pakistan.png"
            },
            {
                name: "Jordan",
                number: "+17137799901",
                email: "jordan@globalship.com.au",
                image: "Images/jordan.png"
            },
            {
                name: "Korea",
                number: "+17137799901",
                email: "korea@globalship.com.au",
                image: "Images/south-korea.png"
            },
            {
                name: "Saudia Arabia",
                number: "+17137799901",
                email: "saudia@globalship.com.au",
                image: "Images/saudi-arabia.png"
            },
            {
                name: "U.A.E",
                number: "+17137799901",
                email: "uae@globalship.com.au",
                image: "Images/united-arab-emirates.png"
            },
            {
                name: "Bahrian",
                number: "+17137799901",
                email: "bahrian@globalship.com.au",
                image: "Images/bahrain.png"
            },
            {
                name: "Oman",
                number: "+17137799901",
                email: "oman@globalship.com.au",
                image: "Images/oman.png"
            },
            {
                name: "Singapore",
                number: "+17137799901",
                email: "sp@globalship.com.au",
                image: "Images/singapore.png"
            },
            {
                name: "Sri Lanka",
                number: "+17137799901",
                email: "lanka@globalship.com.au",
                image: "Images/sri-lanka.png"
            },
            {
                name: "Qatar",
                number: "+17137799901",
                email: "qatar@globalship.com.au",
                image: "Images/qatar.png"
            },
        ]
    },
    {
        name: "europe",
        branches: [
            {
                name: "Netherlands",
                number: "+17137799901",
                email: "land@globalship.com.au",
                image: "Images/netherlands.png"
            },
        ]
    },
];

let paths = document.querySelectorAll('svg path');
let names = document.querySelectorAll('tspan');
let move_div = document.querySelector('.move');

names.forEach(function(name) {
    name.addEventListener('mouseenter', function() {
        move_div.innerHTML = "";
        var targetClass = event.target.getAttribute('class');
        console.log(targetClass);
        offices.forEach(function(region) {
            if (region.name === targetClass) {
                region.branches.forEach(function(branch) {
                    let card = document.createElement('div');
                    card.classList.add('card');
                    card.innerHTML += `
                        <div class="card-image">
                            <img src="${branch.image}" alt="">
                        </div>
                        <div class="card-content">
                            <p>${branch.name}</p>
                            <p>${branch.number}</p>
                            <p>${branch.email}</p>
                        </div>
                    `;
                    move_div.appendChild(card);
                });
            }
        });
    });
});

paths.forEach(function(path) {
    path.addEventListener('mouseenter', function() {
        move_div.style.scale = 1;
    });
    path.addEventListener('mouseleave', function() {
        move_div.style.scale = 0;
    });
});

document.addEventListener('mousemove', function(event) {
    move_div.style.top = event.clientY + "px";
    move_div.style.left = event.clientX + "px";
});
