import Stage from '../components/stage/main'
import Table from '../components/table/main'

export default class Customer extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Customer Search")
          this.setCustomerCard(true)

          this.table = {}
          this.table.rows = [
               {
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>#000001</h3>)},
                         {css: "name", html: (<div className="customer-name-wrapper"><img src="img/face.png"/> <h3>Kyle Anderson</h3></div>)},
                         {css: "age", html: (<h3>28</h3>)},
                         {css: "sex", html: (<h3>Male</h3>)},                        
                         {css: "", html: (<h3>666-666-6969</h3>)},
                    ]
               },
               {
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>#000125</h3>)},
                         {css: "name", html: (<div className="customer-name-wrapper"><img src="img/face3.png"/> <h3>Beth Anderson</h3></div>)},
                         {css: "age", html: (<h3>42</h3>)},
                         {css: "sex", html: (<h3>Female</h3>)},                        
                         {css: "phone", html: (<h3>244-4823-9107</h3>)},
                    ]
               },
               {
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>#000483</h3>)},
                         {css: "name", html: (<div className="customer-name-wrapper"><img src="img/face4.png"/> <h3>Nikki Anderson</h3></div>)},
                         {css: "age", html: (<h3>32</h3>)},
                         {css: "sex", html: (<h3>Female</h3>)},                        
                         {css: "phone", html: (<h3>623-3484-4934</h3>)},
                    ]
               },
               
               {
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>#069318</h3>)},
                         {css: "name", html: (<div className="customer-name-wrapper"><img src="img/face2.png"/> <h3>Jack Anderson</h3></div>)},
                         {css: "age", html: (<h3>21</h3>)},
                         {css: "sex", html: (<h3>Male</h3>)},                        
                         {css: "phone", html: (<h3>514-817-2517</h3>)},
                    ]
               },               
               {
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>#133552</h3>)},
                         {css: "name", html: (<div className="customer-name-wrapper"><img src="img/face5.png"/> <h3>Steve Anderson</h3></div>)},
                         {css: "age", html: (<h3>56</h3>)},
                         {css: "sex", html: (<h3>Male</h3>)},                        
                         {css: "phone", html: (<h3>215-817-9281</h3>)},
                    ]
               },
          ]

          this.table.columns = ["Id", "Name", "Age", "Sex", "Phone", ""]
     }

     populateCenterStage() {
          return (               
               <Table className="customer-list" rows={this.table.rows} columns={this.table.columns} />
          )
     }   
    
     populateSideStage() {
          return (
               <div className="customer-side-details">
                    <div className="name">
                         <p>Name: Kyle John Anderson</p>
                    </div>

                    <div className="characteristics">
                         <p>
                              Date of Birth: 04/21/1993 <br />
                              Sex: Male <br />
                              Race: Hispanic
                         </p>
                    </div>

                    <div className="physicals">
                         <p>
                              Eye Color: Brown <br />
                              Hair Color: Black <br />
                              Marks: None
                         </p>
                    </div>

                    <div className="other">
                         <p>Occupation: Wendy's Janitor</p>
                    </div>

               </div>
          )
     }
}