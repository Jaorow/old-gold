import { useState } from 'react';
import './App.css';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';

// working coppy!!
function App() {
const [picked_date, setDate] = useState("");
const [amount, Price] = useState("");
const [dataHist, getHistorical] = useState<undefined | any>(undefined);
const [dataToda, getToday] = useState<undefined | any>(undefined);

return (
	<div className="App">
	<header className="App-header">
		<h1 id = "title">Gold Prices</h1>
		<p id = "header-intro">Input a historical date and see how much your gold has risen 🤞🏼 in price (USD)</p>
	</header>

	<div id = "search-box">
		<br />
		
	<TextField
		id="date"
		label="Historical price"
		type="date"
		defaultValue="2019-10-11"
		sx={{width: 150}}
		InputLabelProps={{ shrink: true, }}
		onChange={e => setDate(e.target.value)}
	/>
	
		<IconButton
			aria-label="search"
			id = "search-button"
			size = "large"
			onClick={() => { search(); }}
		>

			<SearchIcon 
				id = "date-search" 
				style={{ fill: "orange" }} 
			/>
		</IconButton>
	</div>

	<div id = "response-data">
	{dataToda === undefined ? (

		<div id="loader">
			<span id="loader__element"></span>
			<span id="loader__element"></span>
			<span id="loader__element"></span>
		</div>
		
	
		) : (

		<div id="result">
			<p>
			{reverseDate(picked_date)} to {reverseDate(get_date())}
			</p>
		<span id = "left-result">
			<p>Historical</p>
		<p id = "data_string">${parseFloat(dataHist.price).toFixed(2)} per Ounce</p>
		</span>
		
		<span id = "center">
			<span id = "returned-emoji">{getArrow(dataHist.price,dataToda.price)}</span>
		</span>

		<span id = "right-result">
			<p>Today</p>
			{/* <p>{get_date()}</p> */}
		<p id = "data_string">${parseFloat(dataToda.price).toFixed(2)} per Ounce</p>
		</span>

		<div id = "remark">
		<p>{getDiffrence(dataHist.price,dataToda.price)}</p>
		</div>
		<br />
		<p>How many ounces did you buy on {reverseDate(picked_date)}</p>
		
		<TextField
			id="outlined-number"
			label="Number"
			type="number"
			defaultValue="2019-10-11"
			InputLabelProps={{
				shrink: true,
			}}
			sx={{width: 90}}
			onChange={e => Price(e.target.value)}
		/>
	
		<p>{calculatePrice(dataHist.price,dataToda.price,parseInt(amount))}</p>
		</div>
	)}
	</div>

	</div>
);

function calculatePrice(historical: number,today: number,ounces: number) {
	var dif;
	if (today>historical) {
	dif = ((today - historical)*ounces).toFixed(2);
	if (dif === "NaN") {
		return "...";
	}
	return ("congrats! you made $"+dif);
	}else{
	dif = ((historical - today)*ounces).toFixed(2);
	if (dif === "NaN") {
		return "...";
	}
	return ("Ohh no you lost $"+dif);
	
	}    
	
}
function reverseDate(date:String) {
	const splitDate = date.split("-");
	return (splitDate[2]+"/"+splitDate[1]+"/"+splitDate[0]);
}
function sortDateApi(date:String){
	const splitDate = date.split("-");
	console.log("date formated =" + splitDate[2]+splitDate[1]+splitDate[0])
	return (splitDate[0]+splitDate[1]+splitDate[2]);
}


function getDiffrence(historical: number,today: number) {
	var str;
	if (today>historical) {
	str = "🎉 Congrats you made $"+(today-historical).toFixed(2)+" per Ounce 🎉";
	return str;
	}else{
	str = "Ohh no you lost $"+(historical-today).toFixed(2)+" per Ounce";
	return str;
	}
}

	function getArrow(historical:Date,today:Date) {
	if (today>historical) {
		return "✅";
	}else{
		return "❌";
	}
	}

	function search() {
		console.log("Working on it...")
		get_historical()
		get_today()
		get_api_stat()
	}
	function get_historical(){
		var myHeaders = new Headers();
		myHeaders.append("x-access-token", "goldapi-tbmm3u2tl5u6p0yg-io");
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		};
		fetch("https://www.goldapi.io/api/XAU/USD/"+ sortDateApi(picked_date), requestOptions)
		.then(response => response.text())
		.then(result => {
			console.log("historical...")
			console.log(JSON.parse(result))
			const obj = JSON.parse(result)
			getHistorical(obj)
		})
		.catch(error => console.log('error', error));
	}
	function get_today(){
		var myHeaders = new Headers();
		myHeaders.append("x-access-token", "goldapi-tbmm3u2tl5u6p0yg-io");
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		};
		fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
		.then(response => response.text())
		.then(result => {
			console.log("Current...")
			console.log(JSON.parse(result))
			const obj = JSON.parse(result)
			getToday(obj)
		})
		.catch(error => console.log('error', error));
	}

	function get_date(){
	var today = new Date();
	var dd = String(today.getDate()-1).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	return yyyy + '-' +mm + '-' + dd;

	}
	function get_api_stat(){
	
		var myHeaders = new Headers();
		myHeaders.append("x-access-token", "goldapi-tbmm3u2tl5u6p0yg-io");
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		// redirect: 'follow'
		};

		fetch("https://www.goldapi.io/api/stat", requestOptions)
		.then(response => response.text())
		.then(result => console.log("api usage ->" + result))
		.catch(error => console.log('error', error));
	}

}




export default App;
