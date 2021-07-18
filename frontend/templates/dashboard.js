import Stage from '../components/stage/main'
import Table from '../components/table/main'
import SearchBox from '@Components/search-box'

export default class Dashboard extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Dashboard")
          this.showCustomerCard(true)

          this.table = {}
          this.table.rows = [
               {
                    css: "",
                    columns: [
                         {css: "", html: (<h1>#000001</h1>)},
                         {css: "", html: (<h1>Michael Jackson</h1>)},
                         {css: "", html: (<button>HeHe</button>)},
                    ]
               },
               {
                    css: "",
                    columns: [
                         {css: "", html: (<h1>#000001</h1>)},
                         {css: "", html: (<h1>Michael Jackson</h1>)},
                         {css: "", html: (<button>HeHe</button>)},
                    ]
               },
               {
                    css: "",
                    columns: [
                         {css: "", html: (<h1>#000001</h1>)},
                         {css: "", html: (<h1>Michael Jackson</h1>)},
                         {css: "", html: (<button>HeHe</button>)},
                    ]
               }
          ]
          this.table.columns = ["id", "name", "button"]
     }

     populateCenterStage() {
          return (
               <div className="center-stage-container">
                    <SearchBox />
                    <Table className="table-man" rows={this.table.rows} columns={this.table.columns} />
               </div>
          )
     }

     populateSideStage() {
          return (
               <div className="side-stage-container">
                    <h1>Hello World</h1>
               </div>
          )
     }
}