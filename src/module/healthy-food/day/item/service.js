export default class CaloriesService {
    static getCalories(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.calories / 100) * weight, 0);
    }

    static getProtein(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.protein / 100) * weight, 0);
    }

    static getFat(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.fat / 100) * weight, 0);
    }

    static getCarbohydrates(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.carbohydrates / 100) * weight, 0);
    }

    static getAllCalories(eatingTimes) {
        return (eatingTimes || []).reduce((allCalories, eatingTime) => allCalories + this.getCalories(eatingTime), 0);
    }

    static getAllProtein(eatingTimes) {
        return (eatingTimes || []).reduce((allProtein, eatingTime) => allProtein + this.getProtein(eatingTime), 0);
    }

    static getAllFat(eatingTimes) {
        return (eatingTimes || []).reduce((allFat, eatingTime) => allFat + this.getFat(eatingTime), 0);
    }

    static getAllCarbohydrates(eatingTimes) {
        return (eatingTimes || []).reduce((allCarbohydrates, eatingTime) => allCarbohydrates + this.getCarbohydrates(eatingTime), 0);
    }
}