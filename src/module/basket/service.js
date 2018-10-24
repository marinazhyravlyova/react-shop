let productIds = [7, 2, 3];

export default class BasketService {
    static getProductIds() {
        return productIds;
    }

    static addProductId(productId) {
        return productIds = [...productIds, productId];
    }

    static deleteProductId(productId) {
        productIds = productIds.filter( id => id !== productId);
    }
}