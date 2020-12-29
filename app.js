const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const recovered_element = document.querySelector(".recovered .value");
const deaths_element = document.querySelector(".deaths .value");


let myChart1 = document.getElementById("myChart1").getContext("2d");
let myChart2 = document.getElementById("myChart2").getContext("2d");
let myChart3 = document.getElementById("myChart3").getContext("2d");


let app_data = [],
	cases_list = [],
	recovered_list = [],
	deaths_list = [],
	dates = [],
	formatedDates = [];


let user_country;
country_list.forEach(country => {
	if( country.code == country_code ) {
		user_country = country.name;
	}
});




function fetchData(country) {
	user_country = country;
	country_name_element.innerHTML = "Loading...";

	cases_list = [], recovered_list = [], deaths_list = [], dates = [], formatedDates = [];
	cases_list = [], recovered_list = [], deaths_list = [], dates = [], formatedDates = [];
	cases_list = [], recovered_list = [], deaths_list = [], dates = [], formatedDates = [];
  
	var requestOptions = {
	  method: "GET",
	  redirect: "follow",
	};
  
	const api_fetch = async (country) => {
	  await fetch(
		"https://api.covid19api.com/total/country/" + country + "/status/confirmed",
		requestOptions
	  )
		.then((res) => {
		  return res.json();
		})
		.then((data) => {
		  data.forEach((entry) => {
			dates.push(entry.Date);
			cases_list.push(entry.Cases);
		  });
		});
  
	  await fetch(
		"https://api.covid19api.com/total/country/" + country + "/status/recovered",
		requestOptions
	  )
		.then((res) => {
		  return res.json();
		})
		.then((data) => {
		  data.forEach((entry) => {
			recovered_list.push(entry.Cases);
		  });
		});
  
	  await fetch(
		"https://api.covid19api.com/total/country/" + country + "/status/deaths",
		requestOptions
	  )
		.then((res) => {
		  return res.json();
		})
		.then((data) => {
			  data.forEach((entry) => {
			deaths_list.push(entry.Cases);
		  });
		});
  
	  updateUI();
	};
  
	api_fetch(country);
  }
  fetchData(user_country);
  

  function updateUI() {
	updateStats();
	covidChart1();
	covidChart2();
	covidChart3();
  }




function updateStats(){
	const total_cases = cases_list[cases_list.length - 1];

  
	const total_recovered = recovered_list[recovered_list.length - 1];
	
  
	const total_deaths = deaths_list[deaths_list.length - 1];





	country_name_element.innerHTML = user_country;
	total_cases_element.innerHTML = total_cases;

	recovered_element.innerHTML = total_recovered;
	
	deaths_element.innerHTML = total_deaths;

	dates.forEach((date) => {
		formatedDates.push(formatDate(date));
	  });
}


function formatDate(dateString){
var date = new Date(dateString);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];

return `${date.getDate()} ${months[date.getMonth() - 1]}`;
}

