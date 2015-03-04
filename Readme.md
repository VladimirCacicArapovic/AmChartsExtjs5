Main Ux chart File
Ext.ux.chart.AmCharts

Chart Class Definition:
Add Extend config for the Class :
extend: 'Ext.ux.chart.AmCharts'

Add config for the chart: find on http://www.amcharts.com/demos/

You can find Docs for Class in Doc folder

Add store to the chartConfig object :
 stores: ['AmChartStore']
 (For now working just for Column and Pie charts)


And here is best way how to build proper documentation with jsduck
jsduck ext/src app --output docs

And for this module I was using:
jsduck ext/src/ux/chart/ --output docs