// charts.js

const ctx1 = document.getElementById('iqamaStatusChart').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Active', 'Expiring soon', 'Expired'],
        datasets: [{
            data: [33.3, 33.3, 33.3],
            backgroundColor: ['green', 'orange', 'red'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    boxWidth: 30,
                    pointStyle: 'square'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 10,
                padding: 10
            }
        }
    }
});

// const ctx2 = document.getElementById('remainingDaysChart').getContext('2d');
// new Chart(ctx2, {
//     type: 'bar',
//     data: {
//         labels: ['1-30 Days', '30-60 Days', '60 and Above'],
//         datasets: [{
//             label: 'Days remaining',
//             data: [27, 55, 61],
//             backgroundColor: 'green',
//             borderRadius: 10
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 labels: {
//                     padding: 15,
//                     boxWidth: 20,
//                     borderRadius: 8
//                 }
//             },
//             tooltip: {
//                 backgroundColor: 'rgba(0, 0, 0, 0.8)',
//                 borderRadius: 10,
//                 padding: 10
//             },
//             datalabels: {
//                 anchor: 'end',
//                 align: 'top',
//                 color: '#fff',
//                 font: {
//                     weight: 'bold',
//                     size: 14,
//                     borderRadius: 8
//                 }
//             }
//         },
//         scales: {
//             x: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
const ctx2 = document.getElementById('remainingDaysChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['1-30 Days', '30-60 Days', '60 and Above'],
        datasets: [{
            label: 'Days remaining',
            data: [27, 55, 61],
            backgroundColor: 'green',
            borderRadius: 10
        }]
    },
    options: {
        maintainAspectRatio: false,  // Prevent auto aspect ratio
        aspectRatio: 1, // Adjust width-height ratio (Try values like 2, 1.5)
        plugins: {
            legend: {
                labels: {
                    padding: 15,
                    boxWidth: 10,
                    borderRadius: 8
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 10,
                padding: 10
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                barPercentage: 1,  // Reduce bar width (default is 1.0)
                categoryPercentage: -1  // Adjust spacing between bars (default is 1.0)
            }
        }
    }
});

const ctx3 = document.getElementById('expiryTimelineChart').getContext('2d');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['2025', '2024', '2023', '2022', '2021', '2020'],
        datasets: [{
            label: 'Number of Iqama expiry',
            data: [27, 43, 63, 20, 46, 55],
            backgroundColor: 'teal',
            borderRadius: 10
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    boxWidth: 10,
                    borderRadius: 8,
                    position: 'bottom'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 6,
            }
        }
    }
});
