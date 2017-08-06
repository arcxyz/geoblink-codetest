import {API_VERSION} from "./data.constants";

export default class DataService {
    constructor(_$http) {
        this.$http = _$http;
        this.path = `/api/${API_VERSION}`;
    }

    getStats() {
        // return this.$http.get(`${this.path}/stats`);
        return this.$http.get('response.mock.json');
    }
}
DataService.$inject = ['$http'];