Ext.define('AmChart.view.main.Column', {
        extend: 'Ext.ux.chart.AmCharts',
        requires: [
            'Ext.ux.chart.AmCharts'
        ],
        alias: 'widget.columnchart',
        title: 'AmCharts',

        chartConfig: {
            type: "serial",
            theme: "none",
            pathToImages: "http://www.amcharts.com/lib/3/images/",
            stores: ['AmChartStore'],
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


    }
);