import Table from '@Components/table/main'
import Stage from '@Components/stage/main'
import React from 'react'

export default class NewTicket extends Stage {
     constructor(props) {
          super(props)

          this.template = "new-ticket"

          let id = "1231244534234"
          this.setTitle("New Ticket - #" + id)
          this.showCustomerCard(true)
          this.showBackButton(true)

          this.table = React.createRef()
     }

     componentDidMount() {
          this.table.current.setColumns([
               {html: "Brand"}, 
               {html: "Model"}, 
               {html: "Type"}, 
               {html: "Amount"}
          ])
     }

     backButtonFunc = () => {
          this.props.update.changeTemplate("transaction")
     }

     addItemButton = () => {
          this.props.update.changeTemplate("item-search")
     }

     populateCenterStage() {
          return (
               <div className={this.template}>
                    <div className="main-header">
                         <h1 className="main-title">Ticket Items</h1>
                         <button className="main-header-button" onClick={this.addItemButton}>Add Item</button>
                    </div>
                    <div className="main-split"/>
                    <Table ref={this.table} className="ticket-item-list" />
               </div>
          )
     }
}