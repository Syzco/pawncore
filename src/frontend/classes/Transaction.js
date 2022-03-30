import Tills from "./Tills";

export default class Transaction {
     constructor(transactionId, customer, total, till) {
          this.transactionId = transactionId;
          this.customer = customer;
          this.till = till;
          this.total = total;
     }

     // transaction functions
     setTotal = (total) => {
          this.total = total
     }
     addTotal = (amt) => {
          this.total += amt
     }
     subTotal = (amt) => {
          this.total -= amt
     }
     setTill = (till) => {
          this.till = till
     }
}