const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();
const displayCountries = countries => {

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital :${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Country Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
    
}

const displayCountryDetails = country =>{
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>Population : ${country.population}, Border : ${country.borders}</p>
    <img style="width:200px" src="${country.flag}" alt="Flag">
    `
}

