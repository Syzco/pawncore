import Stage from '../components/stage/main'
import Table from '../components/table/main'

class ThisTable extends Table {
     constructor(props) {
          super(props)

          this.setColumns(["id", "name", "button"])
          this.addRow({
               css: "rowman",
               columns: [
                    {css: "id", html: (<h1>#000001</h1>)},
                    {css: "name", html: (<h1>Michael Jackson</h1>)},
                    {css: "hehe-button", html: (<button>HeHe</button>)},
               ]
          })

          this.addRow({
               css: "",
               columns: [
                    {css: "", html: (<h1>#000001</h1>)},
                    {css: "", html: (<h1>Michael Jackson</h1>)},
                    {css: "", html: (<button>HeHe</button>)},
               ]
          })

          this.addRow({
               css: "",
               columns: [
                    {css: "", html: (<h1>#000001</h1>)},
                    {css: "", html: (<h1>Michael Jackson</h1>)},
                    {css: "", html: (<button>HeHe</button>)},
               ]
          })
     }
}

export default class Dashboard extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Dashboard")
          this.setCustomerCard(true)
     }

     populateCenterStage() {
          return (
               <div>
                    <h1>
                         I am GROOT!
                    </h1>
                    <ThisTable className="table-man" />
               </div>
          )
     }
}