import HttpClient from './utils/HttpClient';

class CategoriesService {
    constructor() {
        // this.httpClient = new HttpClient('http://localhost:3001');
        this.httpClient = new HttpClient('https://be-my-contacts-to-deploy.herokuapp.com');
    }

    listCategories() {
        return this.httpClient.get('/categories');
    }
}

export default new CategoriesService();
