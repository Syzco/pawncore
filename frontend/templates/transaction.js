import SearchListTemplate from '@Components/search-list'
import Stage from '../components/stage/main'
import React from 'react'

// TODO: CREATE ADD RETAIL ITEM TO TRANSACTION THROUGH SEARCH METHOD. - R1

export default class Transaction extends Stage {
     constructor(props) {
          super(props)

          this.template = "transaction-screen"

          //TODO Setup Number Counter
          let id = "1234"
          this.setTitle("New Transaction - #" + id)
          this.showCustomerCard(true)

          this.searchList = React.createRef()
     }

     //TODO: FIX SEARCH METHOD HERE - R1
     searchFunc = () => {
          let search = this.searchList.current.getSearchValue()
          console.log(search);

          this.props.update.adjustTill(-100)
     }

     componentDidMount() {
          this.searchList.current.addButton([{name: "New Ticket", func: () => {
               this.props.update.changeTemplate("new-ticket")
          }}])
          this.searchList.current.setListColumns(["Inventory Number", "Product", "Type", "Amount"])
          this.searchList.current.addListItem([
               {
                    columns: [
                         {html: (<h1>Hello World</h1>)},
                         {html: (<h1>Hello World</h1>)},
                         {html: (<h1>Hello World</h1>)},
                         {html: (<h1>Hello World</h1>)}
                    ]
               }, {
                    columns: [
                         {html: (<h1>Hello World</h1>)},
                         {html: (<h1>Hello World</h1>)},
                         {html: (<h1>Hello World</h1>)},
                         {html: (<h1>Hello World</h1>)}
                    ]
               }
          ])

          console.log(this.props.update.getTillAmount())
     }

     componentDidUpdate() {
          console.log(this.props.update.getTillAmount())
     }

     populateCenterStage() {
          return (
               <div className={this.template}>
                    <SearchListTemplate ref={this.searchList} searchFunc={this.searchFunc}/>
               </div>
          )
     }
}