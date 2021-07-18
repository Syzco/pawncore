import Stage from '../components/stage/main'

export default class Customer extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Customer Search")
          this.showCustomerCard(true)
     }

     populateCenterStage() {
          return (
               <h1>
                    I am GROOT #2!
               </h1>
          )
     }
}