//creating header container
const header = document.createElement('div')
header.className = 'header';
document.body.appendChild(header)


//creating the heading
const headingLink = document.createElement('a')
headingLink.setAttribute('href', 'index.html')
header.appendChild(headingLink);
const heading = document.createElement('h1')
heading.className = 'heading';
heading.innerHTML = `Nationalize <span>API.</span>`;
headingLink.appendChild(heading);

//creating a container for search box and search icon
const searchContainer = document.createElement('div')
searchContainer.className = 'search-container';
header.appendChild(searchContainer);

//creating search bar/input box and search icon
const searchBar = document.createElement('input')
searchBar.setAttribute('type', 'text')
searchBar.setAttribute('id', 'input');
searchBar.setAttribute('required', '')
searchBar.setAttribute('placeholder', 'Search a name')
searchBar.className = 'search-bar';
searchContainer.append(searchBar)

//creating search icon
const searchIcon = document.createElement('img')
searchIcon.setAttribute('src', "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==");
searchIcon.className = 'search-icon';
searchIcon.setAttribute('id', 'search');

const searchLink = document.createElement('a')
searchLink.setAttribute('id', 'search-link')
searchLink.setAttribute('href', '#result-container')
// searchLink.setAttribute('target', '_blank')
searchContainer.appendChild(searchLink);
searchLink.appendChild(searchIcon)

//creating hero container
const heroContainer = document.createElement('div')
heroContainer.className = 'container';
document.body.append(heroContainer);

//creating description container
const descContainer = document.createElement('div')
descContainer.className = 'description-container';
heroContainer.appendChild(descContainer)


//creating hero description
const description = document.createElement('p')
description.className = 'description'
description.innerHTML = 'An <span>API.</span> for predicting nationality from a name <span><a href="https://nationalize.io/" target="_blank">Nationalize.io</a></span> predicts the nationality of a person given their name. Use the <span>API</span> for analytics, ad segmenting, demographic statistics etc. If you want to read more, you should check out some of the things people have used <a href="https://genderize.io" target="_blank"> Genderize.io</a>, <a href="https://nationalize.io/" target="_blank">Nationalize.io</a> and <a href="https://agify.io/" target="_blank">Agify.io</a>'
descContainer.appendChild(description)


//creating how to use
const howToUse = document.createElement('ul')
howToUse.className = 'how-to-use';
howToUse.innerHTML = `<div class="how-to-use-container"><ul><li>Type the name you want to search in the search box</li>
                      <li>Click on the search icon or press enter</li>
                      <li>After second step, results will be generated <a href="#result-container">below</a></li>
                      <li>Only the results of top two countries will be displayed</li></ul></div>`

heroContainer.appendChild(howToUse);


//very important, this is where results will show up
const resultContainer = document.createElement('div')
resultContainer.className = 'container result-container-box'
resultContainer.setAttribute('id', 'result-container')
document.body.appendChild(resultContainer)



//message
const message = document.createElement('h4')
message.innerText = 'your results will show up here!'
resultContainer.appendChild(message)


//creating a footer
const footer = document.createElement('div')
footer.className = 'footer'
document.body.append(footer)

//creating copy right and maker details
const maker = document.createElement('h3')
maker.className = 'maker-text';
maker.innerHTML = `Made with <span>❤</span> by <a target="_blank" href="https://github.com/anil-4-real">Anil Kumar MR</a>`
footer.appendChild(maker);


//getting element by id
const searchBarId = document.getElementById('input');
const searchIconId = document.getElementById('search')

//creating result card
const resultCard = document.createElement('div')

//using country code and printing actual country name instead of code eg: "IN", "AU" etc..
const countryList = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos Island",
    "CO": "Colombia",
    "KM": "Comoros",
    "CD": "Congo",
    "CG": "Congo",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands [Malvinas]",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea",
    "KR": "Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom of Great Britain and Northern Ireland",
    "UM": "United States Minor Outlying Islands",
    "US": "United States of America",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Viet Nam",
    "VG": "Virgin Islands",
    "VI": "Virgin Islands",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};





searchIconId.addEventListener('click', ()=>{
    const searchNationality = async ()=>{
                try{
                    const response = await fetch(`https://api.nationalize.io/?name=${searchBarId.value}`)
                    const searchData = await response.json()
                    return searchData
                }catch(error){
                    console.log(error)
                    console.log('uh oh, something went wrong!')
                    message.innerText = 'uh oh, something went wrong!'
                }
                
                
            }

        searchNationality().then(data => {
            if(data.name !== searchBarId.value || searchBarId.value.includes(' ') || searchBarId.value.includes(['1234567890'])){
                message.innerText = 'uh oh, something went wrong, enter a valid name' 
                return

            }


                for(var i=0; i<=2; i++){
                    resultContainer.innerHTML = '';
                    try{
                        if(data.country[1] == undefined){
                            resultContainer.innerHTML = `<div class="card"><p class="result-name"><span>Name: </span>${data.name}
                                            <p class="result-country"><span>Country: </span>${countryList[data.country[0].country_id]}
                                            <p class="result-probablity"><span>Probablility: </span>${data.country[0].probability}</div>`

                        } else{
                            resultContainer.innerHTML = `<div class="card"><p class="result-name"><span>Name: </span>${data.name}
                                            <p class="result-country"><span>Country: </span>${countryList[data.country[0].country_id]}
                                            <p class="result-probablity"><span>Probablility: </span>${data.country[0].probability}</div>

                                            <div class="card"><p class="result-name"><span>Name: </span>${data.name}</p>
                                            <p class="result-country"><span>Country: </span>${countryList[data.country[1].country_id]}</p>
                                            <p class="result-probablity"><span>Probablility: </span>${data.country[1].probability}</p></div>`

                        }

                        
                    } catch (err){
                        if(searchBarId.value.length > 15){
                            resultContainer.innerHTML= `<p class="error-message">oops, <span>${searchBarId.value.slice(0,15)+'...'} </span> is not popular :(</p>`;
                        } else {
                            resultContainer.innerHTML= `<p class="error-message">oops, <span>${searchBarId.value}</span> is not popular :(</p>`;
                        }
                        

                    }
    
                }
               
            
        } )



    })

//enter key implementation
document.body.addEventListener('keyup', (event)=>{
    if(event.keyCode == 13 && searchBarId.value.length > 0 ){
        searchIcon.click()
        } else if(event.keyCode == 13 && searchBarId.value.length == 0){
            headingLink.click()

        }
    } )

//the end
