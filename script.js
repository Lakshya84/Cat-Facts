const URL1 = "https://catfact.ninja/facts";
const factP = document.querySelector("#facts");
const btnn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting data...");
    let response = await fetch(URL1);
    let datam = await response.json();
    let randomIndex = Math.floor(Math.random() * datam.data.length); // Random index
    let randomFact = datam.data[randomIndex].fact;
    factP.innerText = randomFact;
}

btnn.addEventListener("click", getFacts);