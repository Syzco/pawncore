export default class Item {
    constructor(itemId, type, catalogId, serialNumber, description, condition, quantity, cost, price, ticketNumber) {
        this.itemId = itemId;
        this.type = type;
        this.catalogId = catalogId;
        this.serialNumber = serialNumber;
        this.description = description;
        this.condition = condition;
        this.quantity = quantity;
        this.cost = cost;
        this.price = price;
        this.ticketNumber = ticketNumber;
    }
}