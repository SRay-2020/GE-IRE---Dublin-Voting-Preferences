  var ctx = document.getElementById('myChartmain').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['SF', 'FG', 'FF', 'LAB', 'SD', 'GP', 'S-PBP', 'IND'],
          datasets: [{
              label: 'Percent of First Preference Votes',
              data: [29.81, 18.76, 14.38, 11.35, 8.70, 7.04, 2.98, 5.61],
              backgroundColor: [
                  'rgba(09, 53, 05, 1)',
                  'rgba(06, 02, 197, 1)',
                  'rgba(26, 151, 22, 1)',
                  'rgba(255, 0, 0, 1)',
                  'rgba(97, 1, 187, 1)',
                  'rgba(83, 151, 77, 1)',
                  'rgba(110, 46, 9, 1)',
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

          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });