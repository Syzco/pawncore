export default class TransactionItems {
    constructor(TRID, transactionId, type, ticketTransaction, retailTransaction, transactionDate) {
        this.TRID = TRID;
        this.transactionId = transactionId;
        this.type = type;
        this.ticketTransaction = ticketTransaction;
        this.retailTransaction = retailTransaction;
        this.transactionDate = transactionDate;
    }
}