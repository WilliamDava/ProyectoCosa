 var j006_chart = (function(){
    const nameFile = "j006_chart.js";
    return {
        initChart : function(){
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(function() {
                j006.drawChart( 0, 0 );
            });
        },
        drawChart: function (rights, wrongs) {
            const nodePercentValue = document.querySelector(".percentValue");
             const data = google.visualization.arrayToDataTable( [
                    [   'Responses',    'number', { role: "style" }  , { role: 'annotation' }      ],
                    [   'Rights',       rights,     "#63A088"      , rights.toString()            ],
                    [   'Wrongs',       wrongs,     "#c31d39"      , wrongs.toString()           ]
                ]);
            var options = {'title':'% Aciertos',
                backgroundColor: 'transparent',
                titleTextStyle: {
                    color: 'bisque',
                    fontSize: 16,
                    bold: false, // 
                },
                legend: {
                    textStyle: {
                    color: 'bisque'
                    }
                }  ,
                 hAxis: {
                        title: 'Tipo de respuesta',
                        slantedText: false, // o true si hay muchas etiquetas
                        textStyle: {
                        fontSize: 8
                        }
                    },
                    vAxis: {
                        title: 'Cantidad',
                        viewWindow: {
                            min: 1,
                            max: 10
                        }
                    },
                    chartArea: {
                        width: '70%',
                        height: '50%'
                    },
                    legend: { position: 'none' } ,    
                    annotations: {
                        textStyle: {
                            fontSize: 16,   // Cambia este valor para ajustar el tamaño
                            bold: true,
                            /* color: 'black'  // Puedes usar otro color como 'white', 'bisque', etc.  */
                        },
    }
            };
            var chart = new google.visualization.ColumnChart(document.querySelector(".chart"));
            chart.draw(data, options);
        }
    };
})();
var j006 = j006_chart;
 
