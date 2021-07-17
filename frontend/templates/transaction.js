import SearchListTemplate from '@Components/search-list'
import Stage from '../components/stage/main'
import React from 'react'

export default class Transaction extends Stage {
     constructor(props) {
          super(props)

          this.template = "transaction-screen"

          //TODO Setup Number Counter
          let id = "1234"
          this.setTitle("New Transaction - #" + id)
          this.setCustomerCard(true)

          this.searchList = React.createRef()
     }

     searchFunc = () => {
          let search = this.searchList.current.getSearchValue()
          console.log(search);
     }

     componentDidMount() {
          this.searchList.current.addButton([{name: "New Ticket", func: () => {}}])
     }

     populateCenterStage() {
          return (
               <div className={this.template}>
                    <SearchListTemplate ref={this.searchList} searchFunc={this.searchFunc}/>
               </div>
          )
     }
}