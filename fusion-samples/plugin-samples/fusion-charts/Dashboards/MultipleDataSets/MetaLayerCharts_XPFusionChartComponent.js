var MetaLayerCharts= {

	MsStackedColumn2D : {
		height          : "300",
		width           : "450",
		chartType       : "msstackedcolumn2d",
		path            : "/public/plugin-samples/fusion-charts/Dashboards/MultipleDataSets/multipleDataSets.cda",
		dataAccessId    : "2",
            cdaArray        : [{path: "/public/plugin-samples/fusion-charts/Dashboards/MultipleDataSets/multipleDataSets.cda", dataAccessId: "3"},],
		chartProperties: {
                  caption                 : "Product-wise break-up of quarterly revenue in last year",
                  subcaption              : "Harry's SuperMart",
                  xaxisname               : "Quarter",
                  yaxisname               : "Sales (In USD)",
                  paletteColors           : "#0075c2,#45AFF5,#2C8A56,#1aaf5d,#50DE90",
                  numberPrefix            : "$",
                  numbersuffix            : "M",
                  bgColor                 : "#ffffff",
                  borderAlpha             : "20",
                  showCanvasBorder        : "0",
                  usePlotGradientColor    : "0",
                  plotBorderAlpha         : "10",
                  legendBorderAlpha       : "0",
                  legendShadow            : "0",
                  valueFontColor          : "#ffffff",
                  showXAxisLine           : "1",
                  xAxisLineColor          : "#999999",
                  divlineColor            : "#999999",
                  divLineIsDashed         : "1",
                  showAlternateHGridColor : "0",
                  subcaptionFontBold      : "0",
                  subcaptionFontSize      : "14",
                  showBorder              : "0"
		},
		categoriesProperties: {
			path 			: "/public/plugin-samples/fusion-charts/Dashboards/MultipleDataSets/multipleDataSets.cda",
			dataAccessId 	: "1",
		}
	},

	MsStackedColumn2DLineDy : {
            height          : "300",
            width           : "450",
            chartType       : "msstackedcolumn2dlinedy",
            path            : "/public/plugin-samples/fusion-charts/Dashboards/MultipleDataSets/multipleDataSets.cda",
            dataAccessId    : "2",
            cdaArray        : [{path: "/public/plugin-samples/fusion-charts/Dashboards/MultipleDataSets/multipleDataSets.cda", dataAccessId: "4"},],
            chartProperties: {
                  caption                 : "Quarterly Sales vs. Profit % in Last Year",
                  subcaption              : "Product-wise Break-up - Harry's SuperMart",
                  xAxisName               : "Quarter",
                  pYAxisName              : "Sales",
                  sYAxisName              : "Profit %",
                  numberPrefix            : "$",
                  numbersuffix            : "M",
                  sNumberSuffix           : "%",
                  sYAxisMaxValue          : "25",
                  paletteColors           : "#5598c3,#2785c3,#31cc77,#1aaf5d,#f45b00",
                  baseFontColor           : "#333333",
                  baseFont                : "Helvetica Neue,Arial",
                  captionFontSize         : "14",
                  subcaptionFontSize      : "14",
                  subcaptionFontBold      : "0",
                  showBorder              : "0",
                  bgColor                 : "#ffffff",
                  showShadow              : "0",
                  canvasBgColor           : "#ffffff",
                  canvasBorderAlpha       : "0",
                  divlineAlpha            : "100",
                  divlineColor            : "#999999",
                  divlineThickness        : "1",
                  divLineIsDashed         : "1",
                  divLineDashLen          : "1",
                  divLineGapLen           : "1",
                  usePlotGradientColor    : "0",
                  showplotborder          : "0",
                  valueFontColor          : "#ffffff",
                  placeValuesInside       : "1",
                  showXAxisLine           : "1",
                  xAxisLineThickness      : "1",
                  xAxisLineColor          : "#999999",
                  showAlternateHGridColor : "0",
                  legendBgAlpha           : "0",
                  legendBorderAlpha       : "0",
                  legendShadow            : "0",
                  legendItemFontSize      : "10",
                  legendItemFontColor     : "#666666"
            },
            categoriesProperties: {
                  path              : "/public/plugin-samples/fusion-charts/Dashboards/MultipleDataSets/multipleDataSets.cda",
                  dataAccessId      : "1",
            },
            linesetProperties: {
                  path              : "/public/plugin-samples/fusion-charts/Dashboards/MultipleDataSets/multipleDataSets.cda",
                  dataAccessId      : "5",
                  linesetCallback: function(data){
                        data.showValues = "0";
                  },
                  linesetDataCallback: function(seriesname,data){
                  },
            },
      },
};
