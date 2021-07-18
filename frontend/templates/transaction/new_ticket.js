import SearchListTemplate from '@Components/search-list'
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

          this.searchList = React.createRef()
     }

     backButtonFunc = () => {
          return;
     }

     searchFunc = () => {
          let search = this.searchList.current.getSearchValue()
          console.log(search);
     }

     componentDidMount() {
          this.searchList.current.addButton([{name: "Add Item", func: () => {}}])
          this.searchList.current.setListColumns(["Brand", "Model Number", "Type", "Amount"])
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
     }

     populateCenterStage() {
          return (
               <div className={this.template}>
                    <SearchListTemplate ref={this.searchList} searchFunc={this.searchFunc}/>
               </div>
          )
     }
}