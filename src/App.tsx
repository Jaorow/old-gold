import { useState } from 'react';
import './App.css';
import axios from "axios";
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
        <p id = "header-intro">Input a historical date (after 2019) and see how much your gold has risen 🤞🏼 in price</p>
      </header>

      <div id = "search-box">
        <br />
        
      <TextField
        id="date"
        label="Historical price"
        type="date"
        defaultValue="2019-10-11"
        sx={{width: 150}}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => setDate(e.target.value)}
      />
      
        <IconButton
          aria-label="search"
		  size = "large"
          onClick={() => {
            search();
          }}
        >
          <SearchIcon id = "date-search" style={{ fill: "orange" }} />
        </IconButton>
      </div>

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
          <p id = "data_string">${parseFloat(dataHist.rates.XAG).toFixed(2)} per Ounce</p>
          </span>
          
          <span id = "center">
            <span id = "returned-emoji">{getArrow(dataHist.rates.XAG,dataToda.rates.XAG)}</span>
          </span>

          <span id = "right-result">
            <p>Today</p>
            {/* <p>{get_date()}</p> */}
          <p id = "data_string">${parseFloat(dataToda.rates.XAG).toFixed(2)} per Ounce</p>
          </span>




          <div id = "remark">
          <p>{getDiffrence(dataHist.rates.XAG,dataToda.rates.XAG)}</p>
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
      
          <p>{calculatePrice(dataHist.rates.XAG,dataToda.rates.XAG,parseInt(amount))}</p>
        </div>
      )}

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
    // var total = Dif * ounces; 
    
    
  }
  function reverseDate(date:String) {
    const splitDate = date.split("-");
    return (splitDate[2]+"/"+splitDate[1]+"/"+splitDate[0]);
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

		var myHeaders = new Headers();
		myHeaders.append("x-access-token", "goldapi-tbmm3u2tl5u6p0yg-io");
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		};
		var date = 20191110;
		fetch("https://www.goldapi.io/api/XAU/USD/"+ date, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
		get_api_stat()
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
