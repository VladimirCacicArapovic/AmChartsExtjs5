Ext.define('AmChart.model.AnimationModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'date',
            type: 'date'
        },
        {
            name: 'distance',
            type: 'int'
        },
        {
            name: 'townName',
            type: 'string'
        },
        {
            name: 'townName2',
            type: 'string'
        },
        {
            name: 'townSize',
            type: 'int'
        },
        {
            name: 'latitude',
            type: 'float'
        },
        {
            name: 'duration',
            type: 'int'
        }
    ]

});