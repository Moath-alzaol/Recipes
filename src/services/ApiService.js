import axios from "axios";

class ApiService {
    baseURL = "https://api.spoonacular.com/recipes/";

    api() {
        return axios.create({ baseURL: this.baseURL });
    }
}

export const apiService = new ApiService();
