import { apiEndPoints } from "../api";
import { handleResponse } from "../utils/misc";
import { apiService } from "./ApiService";

class RecipesService {
    async getRecipes(query = "") {
        try {
            const { results } = await apiService
                .api()
                .get(`${apiEndPoints.recipes.getRecipes}&addRecipeInformation=true&query=${query}&number=50`)
                .then(({ data }) => data);

            return handleResponse({ success: true, data: results });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getRecipeDetails(id) {
        try {
            const data = await apiService
                .api()
                .get(`${id}/${apiEndPoints.recipes.getRecipeDetails}`)
                .then(({ data }) => data);

            return handleResponse({ success: true, data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const recipesService = new RecipesService();
