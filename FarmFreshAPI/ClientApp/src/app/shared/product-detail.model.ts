export class ProductDetail {
    productId: number;
    productName: string;
    productSubName: string;
    productImage: string;
    productPacket: string;
    productInfo: string;
    productAbout: string;
    productCountry: string;
    productQty: number;

    constructor() {
        this.productId = 0;
        this.productName = "";
        this.productSubName = "";
        this.productImage = "";
        this.productPacket = "";
        this.productInfo = "";
        this.productAbout = "";
        this.productCountry = "";
        this.productQty = 0;
    }
}
