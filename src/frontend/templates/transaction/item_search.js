import Table from '@Components/table/main'
import Stage from '@Components/stage/main'
import React from 'react'

export default class ItemSearch extends Stage {
     constructor(props) {
          super(props)

          this.template = "item-search"

          let id = "1231244534234"
          this.setTitle("Add Item to Ticket #" + id)
          this.showCustomerCard(true)
          this.showBackButton(true)

          //this.table = React.createRef()
     }

     componentDidMount() {
          //this.table.current.setColumns(["Brand", "Model", "Type", "Amount"])
     }

     backButtonFunc = () => {
          this.props.update.changeTemplate("new-ticket")
     }

     populateCenterStage() {
          return (
               <div className={this.template}>
                    
               </div>
          )
     }
}