const fetchPokemon = () => {
    let name = document.getElementById("name").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
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
        }
    });
}

const getImage = (url) => {
    document.getElementById("card-img").src = url;
    document.getElementById("card-img").setAttribute("class", "card-img");
}