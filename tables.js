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