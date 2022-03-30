export default class PawnTickets {
    constructor(ticketId, financeCharge, interestRate, maturityDateId, maturityDateTotal, defaultDateId, defaultDateTotal, transactionDate, transactionTotal) {
        this.ticketId = ticketId;
        this.financeCharge = financeCharge;
        this.interestRate = interestRate; 
        this.maturityDateId = maturityDateId;
        this.maturityDateTotal = maturityDateTotal;
        this.defaultDateId = defaultDateId;
        this.defaultDateTotal = defaultDateTotal;
        this.transactionDate = transactionDate;
        this.transactionTotal = transactionTotal;
    }
}