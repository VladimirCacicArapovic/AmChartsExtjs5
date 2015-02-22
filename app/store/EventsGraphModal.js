Ext.define('Navigator.store.EventsGraphModal', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.reader.Json', 'Navigator.reader.HostChecker', 'Navigator.model.Chart'],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'Navigator.model.Chart',
            storeId: 'EventsGraphModal',
            proxy: {
                type: "ajax",
                limitParam: false,
                pageParam: false,
                startParam: false,

                actionMethods: {
                    read: "GET"
                },
                api: {
                    read: "../rest/event?host=opsview&service=Apache accesses&servicesonly=1"
                },
                defaultHeaders: {
                    'x-opsview-username': Environment.userName,
                    'x-opsview-token': Environment.restToken
                },
                reader: {
                    type: 'json',
                    root: 'list[0].data'
                }
            }

        },
        cfg)]);
    },
    listeners: {
        exception: function(proxy, response, operation, opts) {
            if (typeof(operation.error) == "string") {
                Ext.Msg.alert("Error", "Connection to server interrupted" + operation.error);
            }
        }
    }

});