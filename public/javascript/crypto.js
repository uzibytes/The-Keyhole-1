///  Calling API and modeling data for each chart ///

let apiKey = '55cf1905748de561787a84e625f936d0296b0facbfe807f384e4ae02b4f59441';

const btcData = async () => {
    const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=${apiKey}`);
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }
  
  
  const cosmosData = async () => {
    const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=${apiKey}`);
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }
  
  
  const ethereumData = async () => {
    const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=${apiKey}`);
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }
  
  
  /// Error handling ///
  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  
  
  
  /// Charts ///
  let createBtcChart
  let createCosmosChart
  let createethereumChart
  
  async function printBtcChart() {
    let { times, prices } = await btcData()
  
    let btcChart = document.getElementById('btcChart').getContext('2d');
  
    let gradient = btcChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(247,147,26,.5)');
    gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    createBtcChart = new Chart(btcChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }
  
  
  
  async function printCosmosChart() {
    let { times, prices } = await cosmosData()
  
    let cosmosChart = document.getElementById('cosmosChart').getContext('2d');
  
    let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(27,30,54,.5)');
    gradient.addColorStop(.425, 'rgba(46,49,72,0)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    createCosmosChart = new Chart(cosmosChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: "",
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(46,49,72,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }
  
  
  async function printEthereumChart() {
    let { times, prices } = await ethereumData()
  
    let ethereumChart = document.getElementById('ethereumChart').getContext('2d');
  
    let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(78,56,216,.5)');
    gradient.addColorStop(.425, 'rgba(118,106,192,0)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    createEthereumChart = new Chart(ethereumChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(118,106,192,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }
  
  
  /// Update current price ///
  async function updateEthereumPrice() {
    let { times, prices } = await ethereumData()
    let currentPrice = prices[prices.length-1].toFixed(2);
  
    document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
  }
  
  async function updateCosmosPrice() {
    let { times, prices } = await cosmosData()
    let currentPrice = prices[prices.length-1].toFixed(2);
  
    document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
  }
  
  async function updateBitcoinPrice() {
    let { times, prices } = await btcData()
    let currentPrice = prices[prices.length-1].toFixed(2);
  
    document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
  }
  
  updateEthereumPrice()
  updateCosmosPrice()
  updateBitcoinPrice()
  
  printBtcChart()
  printCosmosChart()
  printEthereumChart()