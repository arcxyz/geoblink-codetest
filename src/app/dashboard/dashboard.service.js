const AXIS_KEY_MAP = {
    commercial_activity: 'Actividad comercial',
    dependency_rate: 'Tasa de dependencia',
    foreigners: 'Extranjeros',
    population: 'Población',
    traffic: 'Tráfico peatonal',
    unemployment: 'Desempleo',
    wealth: 'Riqueza'
};

export default class DashboardService {
    constructor() {

    }

    _getTitle(area, index) {
        return area.variables.is_reference
            ? 'Reference Area'
            : `Compared Area ${index}`;
    }

    parseStatsForAreaInfo(data) {

        return data.map((area, index) => {

            return {
                title: this._getTitle(area, index),
                index,
                population: area.variables.population,
                address: area.address
            }

        });
    }

    parseStatsForRadarChart(data) {
        return {
            legend: data.map((area, index) => (this._getTitle(area, index))),
            radar: data
                .map((area) => area.variables.indexes)
                .map((area) => {

                    const indexKeys = Object.keys(area);

                    return indexKeys.map((key) => {
                        return {axis: AXIS_KEY_MAP[key], value: area[key]}
                    })
                })
        };
    }
}
DashboardService.$inject = [];