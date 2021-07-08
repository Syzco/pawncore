import Stage from '../components/stage/main'

export default class Customer extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Inventory Search")
          this.setCustomerCard(false)
     }

     populateCenterStage() {
          return (
               <h1>
                    I am GROOT #2!
               </h1>
          )
     }
}