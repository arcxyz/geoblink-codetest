import dashboardServiceMock from './dashboard.service.mock.json';
import DashboardService from "./dashboard.service";
import assert from 'assert';

let dashboardService = new DashboardService();


describe('DashboardServicce', () => {
    describe('parseStatsForAreaInfo', () => {
        it('Should return an array of the same length as the input', () => {
            const parsedData = dashboardService.parseStatsForAreaInfo(dashboardServiceMock);

            assert.equal(parsedData.length, dashboardServiceMock.length);
        })
    });

    describe('parseStatsForRadarChart', () => {
        let parsedData;

        beforeEach(() => {
            parsedData = dashboardService.parseStatsForRadarChart(dashboardServiceMock);
        });

        it('Should return an object with the key legend', () => {
            assert.ok(Object.keys(parsedData).indexOf('legend') >= 0)
        });
        it('Should return an object with the key radar', () => {
            assert.ok(Object.keys(parsedData).indexOf('radar') >= 0)
        });
        it('Should have an array on the legend key', () => {
            assert.ok(Array.isArray(parsedData.legend));
        });
        it('Should have an array on the radar key', () => {
            assert.ok(Array.isArray(parsedData.radar));
        });
        it('Should have an array on the legend with the same length as the input', () => {
            assert(parsedData.legend.length, dashboardServiceMock.length);
        });
        it('Should have an array on the radar with the same length as the input', () => {
            assert(parsedData.radar.length, dashboardServiceMock.length);
        })
    });
});
