import Stage from '../components/stage/main'

export default class Dashboard extends Stage {
     constructor(props) {
          super(props)
          this.setTitle("Dashboard")
     }

     populateCenterStage() {
          return (
               <h1>
                    I am GROOT!
               </h1>
          )
     }
}