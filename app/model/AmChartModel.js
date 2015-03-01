Ext.define('AmChart.model.AmChartModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'country',
            type: 'string'
        },
        {
            name: 'visits',
            type: 'int'
        },
        {
            name: 'color',
            type: 'string'
        }
    ]

});