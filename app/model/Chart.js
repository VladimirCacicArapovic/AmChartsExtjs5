Ext.define('Navigator.model.Chart', {

    extend: 'Ext.data.Model',
    fields: [{
        name: 'date',
        mapping: 0,
        convert: function(val, model) {
            return Ext.Date.parse(val, 'U');
        },
        type: 'date'
    },
    {
        name: 'graphdata',
        mapping: 1,
        type: 'auto'
    }

    ]

});