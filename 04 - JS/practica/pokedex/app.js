const fetchPokemon = () => {
    let id = document.getElementById("id").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            getImage("images/error.gif")
            document.getElementById("card-img").setAttribute("style", "height: 200px");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let img = data.sprites.other.dream_world.front_default;
            getImage(img);
            console.log(img);

            let nameid = `#${data.id.toString().padStart(3, 0)} - ${data.name}`;
            document.getElementById("card-name").innerText = nameid;

            let typesObj = data.types;
            let types = [];
            typesObj.forEach(function (type) {
                types.push(type['type']['name']);
            })
            types = types.join(" / ");
            console.log(types);
            document.getElementById("types").innerText = `Type: ${types}`;

            document.getElementById("stats").innerHTML = "";
            let statsArray = data.stats;
            statsArray.forEach(function (stats) {
                let div = document.createElement("div");
                div.innerText = stats['stat']['name'] + "\n" + stats['base_stat'].toString();
                document.getElementById("stats").append(div);
                console.log(stats['stat']['name'] + " " + stats['base_stat'].toString());
            })
            document.getElementById("abilities").innerHTML = "";
            list = document.createElement("ul");
            let abilitiesArray = data.abilities;
            abilitiesArray.forEach(function (abilities) {
                let li = document.createElement("li");
                li.innerText = abilities['ability']['name'];
                list.appendChild(li);
            })
            h1 = document.createElement("h1");
            h1.innerText = "Abilities: ";
            document.getElementById("abilities").appendChild(h1);
            document.getElementById("abilities").appendChild(list);
        }
    });
}

const getImage = (url) => {
    document.getElementById("card-img").src = url;
    document.getElementById("card-img").setAttribute("class", "card-img");
}