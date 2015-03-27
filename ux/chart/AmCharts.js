/*
 * This class is a derived work from:
 *
 *
 *	Copyright (c) 2015 Vladimir Cacic-Arapovic (uk.linkedin.com/pub/vladimir-cacic-arapovic/5/877/640/)
 *
 *	Follow project on GitHub: https://github.com/VladimirCacicArapovic
 *
 *	Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 *	and GPL (http://opensource.org/licenses/GPL-3.0) licenses.
 */

/**
 * @class Ext.ux.chart.AmCharts
 * @extends Ext.Component
 * This Chart module provides showing real Am chart System.
 * Each Chart connect connect directy to the store (stores:['store'])
 * To change the look and feel of a chart, see the {@link http://docs.amcharts.com/3/javascriptcharts} config options.
 *
 *
 *
 *     @example
 *     Ext.define('AmChart.view.main.Pie', {
 *         extend: 'Ext.ux.chart.AmCharts',
 *         alias: 'widget.piechart',
 *         title: 'AmCharts',
 *         chartConfig: {
 *              type: "pie",
 *              theme: "none",
 *              stores: ['AmChartStore'],
 *              valueField: "visits",
 *              titleField: "country",
 *               amExport: {
 *                  top: 10,
 *                  right: 20,
 *                  exportJPG: true,
 *                  exportPNG: true,
 *                  exportSVG: true
 *                  }
 *         }
 *     });
 */
Ext.define("Ext.ux.chart.AmCharts", {
    extend: 'Ext.Component',
    alias: 'widget.amchart',
    /**
     * @cfg {boolean} loadMask An {@link Ext.LoadMask} config or true to mask the chart while
     * loading. Defaults to false.
     */
    loadMask: false,
    /**
     * @cfg {boolean}
     * Triggered after component gets first loading.
     * @param {Ext.Component}
     */
    firstLoader: true,
    // Create getter and setter function
    config: {
        title: '',
        subTitle: '',
        timeout: 500
    },
    listeners: {
        resize: {
            fn: function (el) {
                if (!this.firstLoader) {
                    this.resize();
                }
                this.firstLoader = false;
            }
        }
    },

    /**
     *  Init starting function
     */
    initComponent: function () {
        // If this.stores is defined, then ignore this.store even is defined
        this.stores = Ext.data.StoreManager.lookup(this.chartConfig.stores[0]);
        this.callParent(arguments);
    },

    /**
     * Loading mask for component
     */
    initEvents: function () {
        if (this.loadMask) {
            this.loadMask = new Ext.LoadMask(this.el);
        }
    },

    /**
     * After render function
     * - Loading Stores
     * - Then render chart with first data
     */
    afterRender: function () {
        //Check Stores and prepare data
        this.storeCheck();
        this.chart = AmCharts.makeChart(this.getEl().id, this.chartConfig, this.getTimeout());
    },
    /**
     * Checking if store exist
     * @returns {boolean}
     */
    storeCheck: function () {
        if (typeof this.chartConfig.stores !== 'undefined') {
            if (this.chartConfig.stores.length >= 1) {
                //Preparing Data for the stores
                this.loadingChartStoresColumn();
            } else {
                Ext.Msg.alert('Store error', 'Store is not defined');
                return false;
            }

        } else {
            Ext.Msg.alert('Store error', 'Store is not defined');
            return false;
        }
    },

    /**
     * Preparing Data for the store
     */
    loadingChartStoresColumn: function () {
        var store = this.stores.data.items,
            storeLength = store.length,
            fileObject = [];
        for (var i = 0; i < storeLength; i++) {
            var storeData = store[i].getData();
            this.validateStore(storeData);
            fileObject.push(storeData);
        }
        this.chartConfig.dataProvider = fileObject;
    },

    /**
     * Resize Functionality
     */
    resize: function () {
        this.chart.validateSize();
    },

    /**
     * Reload Data functionality
     */
    reloadData: function () {
        this.chart.validateData()
    },

    /**
     * Validating Pie chart to see error in code
     * @param data
     * @returns {boolean}
     */
    validateStore: function (data) {
        if (typeof this.chartConfig.type !== 'undefined') {
            if (this.chartConfig.type === 'pie') {
                if (typeof data[this.chartConfig.valueField] !== 'number') {
                    Ext.Msg.alert('Store error', 'Wrong type data (' + this.chartConfig.valueField + ') in the store');
                    return false;
                }
            }
        } else {
            Ext.Msg.alert('Chart type error', 'Chart type is not defined');
            return false;
        }
    }
});
