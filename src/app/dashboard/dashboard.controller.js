export class dashboardController {
    constructor(_DataService, _DashboardService) {
        this.DataService = _DataService;
        this.DashboardService = _DashboardService
    }
    $onInit() {
        this.ready = this.error = false;

        this.DataService.getStats()
            .then((response) => {
                this.radarChartData = this.DashboardService.parseStatsForRadarChart(response.data);
                this.areaInfoData = this.DashboardService.parseStatsForAreaInfo(response.data);
                this.ready = true;
            })
            .catch((error) => {
                console.log('Error', error);
                this.ready = true;
                this.error = true;
            })
    }
}
dashboardController.$inject = ['DataService', 'DashboardService'];