Ext.define('AmChart.view.main.Pie', {
        extend: 'Ext.ux.chart.AmCharts',
        alias: 'widget.piechart',
        itle: 'AmCharts',

        chartConfig: {
            "type": "pie",
            "theme": "none",
            stores: ['AmChartStore'],
            valueField: "visits",
            titleField: "country",

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