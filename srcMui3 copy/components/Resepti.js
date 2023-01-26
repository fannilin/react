import React, { useState, useEffect } from 'react';
function Resepti () {
const [taulukko, setTaulukko] = useState( [] );
const [virhe, setVirhe] = useState('Haetaan ... ');
const fetchUrl = async () => {
try {
const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken' );
const json = await response.json();
console.log (json.meals);
setTaulukko(json.meals)
setVirhe('');
} catch (error) {
setVirhe('Tietoja ei ole saatavilla');
}
}
useEffect( () => { fetchUrl() }, [] );
if (virhe.length ===0){
<p>{virhe}</p>
}
return (
    <div>
 {taulukko.map(meals =>{
    return (
        <div key={meals.strMeal}>
            {meals.strMeal} </div>
    )
})}
    </div>
)
}
export default Resepti;