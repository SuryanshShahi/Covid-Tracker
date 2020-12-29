 function covidChart1(){
	if(window.bar1 != undefined)
    window.bar1.destroy();
	window.bar1 = new Chart(myChart1, {
	type: "line",
	data:{
		datasets:[{
			label: "Total Cases",
            data: cases_list,
            backgroundColor: "orange",
            borderColor: "#FFF"
        }],
        labels: formatedDates
	},
	options:{}
});
}
function covidChart2(){
	if(window.bar2 != undefined)
    window.bar2.destroy();
	window.bar2 = new Chart(myChart2, {
	type: "line",
	data:{
		datasets:[{
			label: "Total Recovered",
            data: recovered_list,
            backgroundColor: "blue",
            borderColor: "#FFF"
        }],
        labels: formatedDates
	},
	options:{}
});
}
function covidChart3(){
	if(window.bar3 != undefined)
    window.bar3.destroy();
	window.bar3 = new Chart(myChart3, {
	type: "line",
	data:{
		datasets:[{
			label: "Total Deaths",
            data: deaths_list,
            backgroundColor: "red",
            borderColor: "#FFF"
        }],
        labels: formatedDates
	},
	options:{}
});
}



