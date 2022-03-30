export default class TicketInventory {
    constructor(ticketInventoryNumber, itemId, locationId, status) {
        this.ticketInventoryNumber = ticketInventoryNumber;
        this.itemId = itemId;
        this.locationId = locationId; 
        this.status = status;
    }
}