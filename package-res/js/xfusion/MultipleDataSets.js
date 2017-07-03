/*
* sub class of the Chart class for the MultipleDataSets charts
*
*/
define([
	'cdf/lib/jquery',
	'xfusion/charts/Chart',
	'xfusion/charts/ChartUtils',
	'amd!cdf/lib/underscore'
	], function ($, Chart, ChartUtils, _) {
		'use strict';

		function MultipleDataSets(name, width, height, chartType, htmlObject) {
			Chart.call(this, name);
			Chart.call(this, name, width, height, chartType, htmlObject);
			this._requiredProperties = ['value']

			this._data = {
				"chart": null,
				"dataset": null,
			};

			this._fusionOptions = {
				"type": null,
				"renderAt": null,
				"width": null,
				"height": null,
				"dataFormat": null
			};
		}

		MultipleDataSets.prototype = Object.create(Chart.prototype);

		MultipleDataSets.prototype = {

			getRequiredProperties: function () {
				return this._requiredProperties;
			},

			getData: function () {
				return this._data;
			},

			getFusionOptions: function () {
				return this._fusionOptions = {
					"type": Chart.prototype.getChartType.call(this),
					"renderAt": Chart.prototype.getHtmlObject.call(this),
					"width": Chart.prototype.getWidth.call(this),
					"height": Chart.prototype.getHeight.call(this),
					"dataFormat": Chart.prototype.getDateFormat.call(this)
				};
			},

			setRequiredProperties: function (requiredProperties) {
				this._requiredProperties = requiredProperties;
				return this;
			},

			renderChart: function (object, options, data) {
				return (Chart.prototype.renderChart.call(this, object, options, data));
			},

			setBuildChartMultipleDataSets: function (chartDefinition, values) {

				var cd = chartDefinition;

				// chart requires a array of objects (datasets)
				var dataset = [];
				// build the first dataset
				var queryDataset = ChartUtils.prototype.buildGroupedData(values,'seriesname','data');
				//apply callback
				if(_.has(cd,'dataSetProperties')){
				 	if(_.has(cd.dataSetProperties, 'dataSetCallback')){
				 		queryDataset = ChartUtils.prototype.applyCallBack(queryDataset, cd.dataSetProperties.dataSetCallback);
				 	};
					if(_.has(cd.dataSetProperties, 'dataCallback')){
						queryDataset = ChartUtils.prototype.applyGroupedCallBack(queryDataset, cd.dataSetProperties.dataCallback,'seriesname','data');
					};
				}
				// Verify required properties
				var hasProperties = ChartUtils.prototype.hasRequiredProperties(queryDataset, this._requiredProperties,'data');
				if(!hasProperties[0]){
					$("#"+this._htmlObject).html("<div class=\"alert alert-info\"><strong>Missing Properties!</strong> Data is "+hasProperties[1]+"</div>");
				 	return;
				};
				dataset.push({dataset:queryDataset});

				//build the other datasets
				for (var i = 0; i < cd.cdaArray.length; i++) {
					var resultset = ChartUtils.prototype.doCDAQuery(cd.cdaArray[i].path, cd.cdaArray[i].dataAccessId, this._parameters);
					queryDataset = ChartUtils.prototype.buildGroupedData(resultset,'seriesname','data');
					//apply callback
					if(_.has(cd,'dataSetProperties')){
					 	if(_.has(cd.dataSetProperties, 'dataSetCallback')){
					 		queryDataset = ChartUtils.prototype.applyCallBack(queryDataset, cd.dataSetProperties.dataSetCallback);
					 	};
					 	if(_.has(cd.dataSetProperties, 'dataCallback')){
					 		queryDataset = ChartUtils.prototype.applyGroupedCallBack(queryDataset, cd.dataSetProperties.dataCallback,'seriesname','data');
					 	};
					}
					// Verify required properties
					var hasProperties = ChartUtils.prototype.hasRequiredProperties(queryDataset, this._requiredProperties, 'data');
					if(!hasProperties[0]){
					 	$("#"+this._htmlObject).html("<div class=\"alert alert-info\"><strong>Missing Properties! </strong> Data is "+hasProperties[1]+"</div>");
					 	return;
					};
					dataset.push({dataset:queryDataset});
				}

				// create the chart data
				this._data = {
					"chart": cd.chartProperties,
					"dataset": dataset,
				};

				return this;
			},

			setAdditionalOptions: function (cd) {
				return (Chart.prototype.setAdditionalOptions.call(this, cd));
			},

		}

		return MultipleDataSets;

	});