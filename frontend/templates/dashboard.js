import Stage from '../components/stage/main'

export default class Dashboard extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Dashboard")
          this.setCustomerCard(true)
     }

     populateCenterStage() {
          return (
               <h1>
                    I am GROOT!
               </h1>
          )
     }
}