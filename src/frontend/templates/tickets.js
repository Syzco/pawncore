import Stage from '../components/stage/main'
import Table from '../components/table/main'
import SearchBox from '@Components/search-box'

export default class Tickets extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Ticket Search")
          this.showCustomerCard(true)

          this.table = {}
          this.table.rows = [
               {
                    css: "ticket-item",
                    columns: [
                         {css: "ticket-id", html: (<h3>356121</h3>)},
                         {css: "ticket-owner", html: (<h3>Kyle Anderson</h3>)},
                         {css: "ticket-item-count", html: (<h3>21</h3>)},
                         {css: "ticket-total", html: (<h3>$693.99</h3>)},
                         {css: "ticket-view-button", html: (<i className="fa fa-arrow-circle-down"></i>)},                            
                    ]
               },
          ]

          this.table.columns = ["Ticket Id", "Owner", "Items Count", "Total", ""]
     }

     populateCenterStage() {
          return (
               <div className="center-stage-container">
                    <SearchBox />
                    <div className="list-container">                      
                         <Table className="ticket-list" rows={this.table.rows} columns={this.table.columns} />
                    </div>
               </div>
          )
     }

     populateSideStage() {
          return (
               <div className="ticket-side-details">
                    <div className="details">
                         <p>
                              Ticket Id: 593823 <br />
                              Type: Buy <br />
                              Status: Active <br />
                         </p>                         
                    </div>

                    <div className="prices">
                         <p>
                              Item Count: 24 <br />
                              Total: $693.99
                         </p>
                    </div>


                    <div className="buttons">
                         <a href="#">Redeem</a>
                         <a href="#">Extend</a>
                    </div>

               </div>
          )
     }
}