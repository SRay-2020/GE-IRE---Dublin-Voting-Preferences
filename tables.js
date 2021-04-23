  var ctx = document.getElementById('myChartmain').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['SF', 'FG', 'FF', 'GP', 'S-PBP', 'LAB', 'SD', 'I4C', 'IND/OTH'],
          datasets: [{
              label: 'Percent of First Preference Votes',
              data: [28.41, 19.73, 14.42, 11.80, 6.24, 5.91, 5.16, 1.02, 7.35],
              backgroundColor: [
                  'rgba(09, 53, 05, 1)',
                  'rgba(06, 02, 197, 1)',
                  'rgba(26, 151, 22, 1)',
                  'rgba(83, 151, 77, 1)',
                  'rgba(110, 46, 9, 1)',
                  'rgba(255, 0, 0, 1)',
                  'rgba(97, 1, 187, 1)',
                  'rgba(209, 95, 212, 1)',
                  'rgba(128, 128, 128, 1)'
              ],
              borderColor: [
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)'
              ],
              borderWidth: 1
          }]
      },




      options: {

          tooltips: {
              displayColors: false,

              backgroundColor: 'rgb(150, 50, 0)',
              titleFontColor: 'rgb(255,255,255)',
              bodyFontColor: 'rgb(255,255,255)',

          },

          title: {

          },

          legend: {

          },

          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });









  // let data = [585, 7777, 710, 978, 1650, 6127, 8549, 10152, 10875];
  // let labels = [1500, 1600, 1700, 1800, 1900, 2000, 2030, 2060, 2100];
  // let title = 'World Pop (in billions)';

  // let options = {
  //     type: 'bar',
  //     data: {
  //         labels: labels,
  //         datasets: [{
  //             backgroundColor: 'rgb(255,150,0)',
  //             barPercentage: 1.0,
  //             data: data,
  //             label: 'PoP'
  //         }]
  //     },
  //     options: {

  //         // everything happens here!
  //         tooltips: {

  //             // don't show the little color
  //             // preview in the tooltip box
  //             displayColors: false,

  //             // color settings
  //             backgroundColor: 'rgb(150,50,0)',
  //             titleFontColor: 'rgb(255,255,255)',
  //             bodyFontColor: 'rgb(255,255,255)',
  //             footerFontColor: 'rgb(255,255,255)',
  //             footerFontStyle: 'normal',


  //             options: {
  //                 plugins: {
  //                     datalabels: {
  //                         color: 'white',
  //                         textAlign: 'center',
  //                         font: {
  //                             weight: "bold",
  //                             size: 16
  //                         }
  //                     }
  //                 }
  //             },



  //             callbacks: {

  //                 // title: bold text, usually the
  //                 // x value (the year, in this case) 
  //                 // for that point 
  //                 title: function (item, everything) {

  //                     // returning nothing essentially
  //                     // turns off the title in the tooltip
  //                     return;
  //                 },

  //                 // label: usually the x value (population)
  //                 // for that point
  //                 label: function (item, everything) {

  //                     // we can check out all the variables
  //                     // available to us (hover over a bar
  //                     // to see the results)
  //                     // console.log(item);

  //                     // we can grab the values for that
  //                     // point on the x and y axes
  //                     let year = item.xLabel;
  //                     let population = item.yLabel;

  //                     // we could do any number of fancy
  //                     // calculations here, but a simple
  //                     // but helpful change is to add commas
  //                     // (in English-speaking countries) or 
  //                     // periods (much of the rest of the 
  //                     // world) to the number
  //                     population = population.toLocaleString();

  //                     // create the label text...
  //                     let label = 'Population: ' + population + ' million';

  //                     // ...and set it
  //                     return label;
  //                 },

  //                 // footer: info after everything
  //                 // else (might be useful for adding
  //                 // context or units)
  //                 footer: function (item, everything) {

  //                     // where in the dataset is this value?
  //                     let index = item[0].index;

  //                     // if we're not at the first value...
  //                     if (index > 0) {

  //                         // grab the current and previous
  //                         // values from the data using the index
  //                         let curr = everything.datasets[0].data[index];
  //                         let prev = everything.datasets[0].data[index - 1];

  //                         // calculate the difference
  //                         let diff = curr - prev;

  //                         // if the difference is positive, add
  //                         // a plus-sign to the value
  //                         if (diff > 0) {
  //                             diff = '+' + diff;
  //                         }

  //                         // and give us the result with a label
  //                         return 'Change: ' + diff;
  //                     }

  //                     // for the first item, don't display
  //                     // anything
  //                     else {
  //                         return;
  //                     }
  //                 }
  //             }
  //         },

  //         title: {
  //             display: true,
  //             text: title
  //         },
  //         legend: {
  //             display: false
  //         }
  //     }
  // }

  // let chart = new Chart(document.getElementById('myChartmain'), options);