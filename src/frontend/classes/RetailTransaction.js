export default class RetailTransaction {
    constructor(transactionsItemId, retailInventoryNumber, type, amount) {
        this.transactionsItemId = transactionsItemId;
        this.retailInventoryNumber = retailInventoryNumber;
        this.type = type;
        this.amount = amount;
    }
}