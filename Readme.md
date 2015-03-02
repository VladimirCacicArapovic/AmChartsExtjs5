Main Ux chart File
Ext.ux.chart.AmCharts

Chart Class Definition:
Add Extend config for the Class :
extend: 'Ext.ux.chart.AmCharts'

Add config for the chart: find on http://www.amcharts.com/demos/
--------------------------------
  chartConfig: {
            type: "serial",
            theme: "none",
            pathToImages: "http://www.amcharts.com/lib/3/images/",
            valueAxes: [{
                axisAlpha: 0,
                position: "left",
                title: "Visitors from country"
            }],
            startDuration: 1,
            graphs: [{
                balloonText: "<b>[[category]]: [[value]]</b>",
                colorField: "color",
                fillAlphas: 0.9,
                lineAlpha: 0.2,
                type: "column",
                valueField: "visits"
            }],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: "country",
            categoryAxis: {
                gridPosition: "start",
                labelRotation: 45
            },
            amExport: {
                top: 10,
                right: 20,
                exportJPG: true,
                exportPNG: true,
                exportSVG: true
            }
        }

--------------------------

Add store to the chartConfig object :
 stores: ['AmChartStore']
 (For now working just for Column and Pie charts)


And here is best way how to build proper documentation with jsduck
jsduck ext/src app --output docs