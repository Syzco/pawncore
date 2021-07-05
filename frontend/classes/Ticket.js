import PawnTicket from 'classes/PawnTicket'

export default class Ticket {
     constructor(type, status) {
          this.type = type
          this.status = status
     }

     makePawn() {
          this.pawn = new PawnTicket()
     }
}