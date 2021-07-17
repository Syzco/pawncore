import Customer from "./Customer"
import Tills from "./Tills"
import Transaction from "./Transaction"

export default class Session {
     constructor(tillID, amt) {
          this.till = new Tills(tillID, amt)

          this.customer = null
          this.transaction = null
     }
}