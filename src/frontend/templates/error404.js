import Stage from '../components/stage/main'
import BackButton from '@Components/back-button'

export default class Error extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Error - 404")
          this.showCustomerCard(false)
     }

     populateCenterStage() {
          return (
               <h1>
                    How did you get here - Go back
                    
                    <BackButton />
               </h1>

          )
     }
}