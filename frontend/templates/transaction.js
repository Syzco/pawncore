import SearchListTemplate from '@Components/search-list'
import Stage from '../components/stage/main'

export default class Transaction extends Stage {
     constructor(props) {
          super(props)

          this.template = "transaction-screen"
          
          this.setTitle("New Transaction")
          this.setCustomerCard(true)
     }

     populateCenterStage() {
          return (
               <div className={this.template}>
                    <SearchListTemplate />
               </div>
          )
     }
}