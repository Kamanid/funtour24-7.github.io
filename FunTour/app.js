let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
      navbar.classList.toggle('active');
      searchForm.classList.remove('on');
}


let searchForm = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>{
      searchForm.classList.toggle('on'); 
      navbar.classList.remove('active'); 
}


// API STARTED

const URL = "https://maps.googleapis.com/maps-api-v3/api/js/56/8/geocoder.js";

const newapi = document.querySelector("#searchBox");
const icon = document.querySelector("#search-icon");


const getnewapi = async () => {
      console.log("getting data....");
      let response = await fetch(URL);
      console.log(response); //JSON FORMATE
      let data = await response.json();
      newapi = data(2).text;
};

icon.addEventListener("click",getnewapi)

// API ENDED



window.onscroll =()=>{
      searchForm.classList.remove('on');
      navbar.classList.remove('active');
}

// -------------------------------------

// this is filter where to go places start

let places = [
      'ahemadabad',
      'dwarka',
      'junagadh',
      'kutch',
      'saputara',
      'somnath',
      'vadodra',
];

const resultbox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
      let result = [];
      let input = inputBox.value;
      if (input.length){
            result = places.filter((keyword)=> {
            return  keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result);
      }
      display(result);

      if(!result.length){
            resultbox.innerHTML = '';
      }
}

function display(result){
      const content = result.map((list)=> {
            return "<li onclick=selectinput(this) >" + list + "</li>";
      });

      resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectinput(list){
      inputBox.value = list.innerHTML;
      resultbox.innerHTML = '';
}

// this is filter where to go places end