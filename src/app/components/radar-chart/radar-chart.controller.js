import d3 from 'd3';
import {RadarChart} from './radar-chart.d3';

export class radarChartController {
    constructor(_$element) {
        this.$element = _$element;
    }

    _downloadSvg(svgElement) {
        //get svg source.
        const xmlSerializer = new XMLSerializer();
        let svgElementSource = xmlSerializer.serializeToString(svgElement);
        svgElementSource = '<?xml version="1.0" standalone="no"?>\r\n'+svgElementSource;

        let link = document.createElement("a");
        link.setAttribute("href",  "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svgElementSource));
        link.setAttribute("download", "chart.svg");
        document.body.appendChild(link);

        link.click();
    }

    _getChartWrapperElement() {
        return this.$element[0].querySelector('.radar-chart__chart');
    }

    getSummaryCustomClass(index) {
        return `radar-chart__summary-area--${index}`;
    }

    onDownloadClick() {
        const svgElement = this._getChartWrapperElement().querySelector('svg');
        return this._downloadSvg(svgElement);
    }

    $postLink() {
        const chartBaseElement = this._getChartWrapperElement();

        const chartWidth = 590;
        const chartHeight = 600;

        const customColorScale = d3.scale.ordinal()
            .domain(this.data.legend)
            .range(["#d71e1a", "#eb7500", "#008b9a"]);

        const chartConfiguration = {
            w: chartWidth,
            h: chartHeight,
            maxValue: 10,
            levels: 5,
            ExtraWidthX: 300,
            factor: 1,
            color: customColorScale,
            TranslateX: 65,
            TranslateY: 60
        };

        RadarChart.draw(chartBaseElement, this.data.radar, chartConfiguration);

        const chartElement = chartBaseElement.querySelector('svg');

        d3.select(window)
            .on("resize", function() {
                const targetWidth = chartElement.node().getBoundingClientRect().width;
                chartElement.attr("width", targetWidth);
                chartElement.attr("height", targetWidth / aspect);
            });


    }

    $onInit() {}
}

radarChartController.$inject = ['$element'];