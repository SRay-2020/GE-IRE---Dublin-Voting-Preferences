var ctx = document.getElementById('myChartdfing').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SF', 'FF', 'FG', 'GP', 'LAB', 'I4C', 'SD', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [24.89, 21.49, 14.96, 13.24, 7.11, 3.99, 3.48, 9.01],
            backgroundColor: [
                'rgba(09, 53, 05, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(06, 02, 197, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(209, 95, 212, 1)',
                'rgba(97, 1, 187, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdbn').getContext('2d');
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdbs').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['FG', 'GP', 'SF', 'FF', 'LAB', 'SD', 'S-PBP', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [27.71, 22.45, 16.07, 13.83, 7.88, 4.55, 2.53, 4.98],
            backgroundColor: [
                'rgba(06, 02, 197, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(09, 53, 05, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(97, 1, 187, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdc').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SF', 'FG', 'GP', 'FF', 'SD', 'LAB', 'S-PBP', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [35.7, 15.11, 12.25, 10.27, 9.26, 5.41, 3.11, 7.04],
            backgroundColor: [
                'rgba(09, 53, 05, 1)',
                'rgba(06, 02, 197, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(97, 1, 187, 1)',
                'rgba(255, 0, 0, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdmw').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SF', 'FG', 'FF', 'S-PBP', 'GP', 'LAB', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [42.82, 17.57, 12.32, 7.86, 6.13, 3.39, 9.91],
            backgroundColor: [
                'rgba(09, 53, 05, 1)',
                'rgba(06, 02, 197, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(110, 46, 9, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(255, 0, 0, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdnw').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SF', 'SD', 'FF', 'FG', 'GP', 'S-PBP', 'LAB', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [44.39, 18.91, 12.05, 11.05, 4.78, 3.75, 2.62, 2.44],
            backgroundColor: [
                'rgba(09, 53, 05, 1)',
                'rgba(97, 1, 187, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(06, 02, 197, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(110, 46, 9, 1)',
                'rgba(255, 0, 0, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdrd').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['FG', 'GP', 'FF', 'SF', 'LAB', 'S-PBP', 'AON', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [31.19, 21.13, 12.82, 11.62, 7.50, 3.53, 3.33, 8.88],
            backgroundColor: [
                'rgba(06, 02, 197, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(09, 53, 05, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(110, 46, 9, 1)',
                'rgba(255,69,0, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdsc').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SF', 'FG', 'FF', 'S-PBP', 'GP', 'I4C', 'LAB', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [39.3, 11.73, 11.05, 10.98, 9.33, 6.54, 4.84, 2.55],
            backgroundColor: [
                'rgba(09, 53, 05, 1)',
                'rgba(06, 02, 197, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(110, 46, 9, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(209, 95, 212, 1)',
                'rgba(255, 0, 0, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdsw').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SF', 'FF', 'FG', 'GP', 'S-PBP', 'LAB', 'SD', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [29.72, 18.04, 16.84, 7.34, 6.63, 5.33, 4.09, 12.01],
            backgroundColor: [
                'rgba(09, 53, 05, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(06, 02, 197, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(110, 46, 9, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(97, 1, 187, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdw').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SF', 'FG', 'FF', 'GP', 'S-PBP', 'LAB', 'AON', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [28.55, 19.43, 15.8, 11.23, 9.98, 4.8, 2.43, 5.91],
            backgroundColor: [
                'rgba(09, 53, 05, 1)',
                'rgba(06, 02, 197, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(110, 46, 9, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255,69,0, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChartdl').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['FG', 'FF', 'S-PBP', 'GP', 'SF', 'LAB', 'SD', 'IND'],
        datasets: [{
            label: 'Percent of First Preference Votes',
            data: [33.44, 15.91, 15.46, 14.93, 9.64, 4.83, 2.22, 1.67],
            backgroundColor: [
                'rgba(06, 02, 197, 1)',
                'rgba(26, 151, 22, 1)',
                'rgba(110, 46, 9, 1)',
                'rgba(83, 151, 77, 1)',
                'rgba(09, 53, 05, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(97, 1, 187, 1)',
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
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});