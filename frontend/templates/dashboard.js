import Stage from '../components/stage/main'
import Table from '../components/table/main'
import SearchBox from '@Components/search-box'

export default class Dashboard extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Dashboard")
          this.showCustomerCard(false)

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
                    <div className="top-row-elements">
                         <img className="element-icon" src="img/dashboard-icons/clipboard.png" />
                         <div className="inventory">
                              <h2 className="xd">Inventory: <br /> 123456 </h2> 
                         </div>

                         <img className="element-icon" src="img/dashboard-icons/clipboard-1.png" />
                         <div className="prices">
                              <h2 className="xd">Inventory: <br /> 123456 </h2>        
                         </div>

                         <img className="element-icon" src="img/dashboard-icons/clipboard-2.png" />
                         <div className="interviews">
                              <h2 className="xd">Inventory: <br /> 123456 </h2>                    
                         </div>

                         <img className="element-icon" src="img/dashboard-icons/clipboard-3.png" />
                         <div className="completed">
                              <h2 className="xd">Inventory: <br /> 123456 </h2>           
                         </div>
                    </div>

                    <div className="bottom-row-elements">
                         <div className="pawn-balance">
                              <h2 className="xd">Inventory:</h2>
                              <span className="value">123456</span>
                              
                              { /* <Graph values=pawn-balance/> */ }                                       
                         </div>

                         <div className="todays-sales">
                              <h2 className="xd">Inventory: <br /> 123456 </h2>    
                              
                              { /* <Graph values=today-sales /> */ }         
                         </div>

                         <div className="ytd-sales">
                              <h2 className="xd">Inventory: <br /> 123456 </h2>   

                              { /* <Graph values=ytd-sales/> */ }                                        
                         </div>

                         <div className="total-customers">
                              <h2 className="xd">Inventory: <br /> 123456 </h2>  
                              
                              { /* <Graph values=total-customers /> */ }     
                         </div>
                    </div>

                    <div className="product-pricing">

                    </div>
               </div>
          )
     }

     populateSideStage() {
          return (
               <div className="side-stage-container">
                    <div className="todo-list">
                         <h1>To-Do List</h1>
                         <ul className="list-contents">
                              <li>Price Items</li>
                              <li>Interview New Applicants</li>
                              <li>Count Money</li>
                              <li>Chill</li>
                         </ul>
                    </div>
               </div>
          )
     }
}