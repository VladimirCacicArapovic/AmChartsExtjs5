/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AmChart.view.main.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'AmChart.view.main.Column',
        'AmChart.view.main.Pie',
        'AmChart.view.main.Animation'
    ],
    xtype: 'app-main',

    layout:{
        type:'fit'
    },

    items: [{
        region: 'center',
        xtype: 'tabpanel',
        items:[
            {
                xtype:'columnchart',
                title:'Column Chart',
                timeout:200

            },
            {
                xtype:'piechart',
                title:'Pie Chart',
                timeout:200

            },
            {
                xtype:'animation',
                title:'Animation Chart',
                timeout:200

            }

        ]
    }]
});
