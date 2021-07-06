import PawnTicket from 'classes/PawnTicket'

export default class Ticket {
     constructor(ticketNumber, type, status) {
          this.ticketNumber = ticketNumber;
          this.type = type
          this.status = status
     }

     makePawn() {
          this.pawn = new PawnTicket()
     }
}