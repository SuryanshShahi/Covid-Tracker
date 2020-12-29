let myChart4 = document.getElementById("myChart4").getContext("2d");

let confirmed_cases = [],
		states = [];

function getData(){

    url = "https://api.covid19india.org/data.json";
	fetch(url)
	.then((response)=>{
        return response.json();
    }).then((data)=>{
		for(i=1; i<36; i++){
		states.push(data.statewise[i].state);
		confirmed_cases.push(data.statewise[i].confirmed);



function covidChart4(){
	if(window.bar != undefined)
    window.bar.destroy();
	window.bar = new Chart(myChart4, {
	type: "line",
	data:{
		datasets:[{
			label: "Total Cases In India Statewise",
			data: confirmed_cases,
            backgroundColor: "#ff471a",
			borderColor: "#FFF",
			fontColor: "white"
        }],
		labels: states
	},
	options:{
		legend: {
            labels: {
				fontColor: 'white'
			}
		}
	}
});
}
covidChart4();
}
})
}
getData()

