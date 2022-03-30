export default class TicketTransaction {
    constructor(transactionItemId, ticketNumber, type, amount) {
        this.transactionItemId = transactionItemId;
        this.ticketNumber = ticketNumber;
        this.type = type;
        this.amount = amount
    }
}