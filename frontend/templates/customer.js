import Stage from '../components/stage/main'
import Table from '../components/table/main'
import React from 'react'

let customerList = [
     {
          id: 1,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
     {
          id: 2,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
     {
          id: 3,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
     {
          id: 4,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
     {
          id: 5,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
     {
          id: 6,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
     {
          id: 7,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
     {
          id: 8,
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969"
     },
]

export default class Customer extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Customer Search")
          this.showCustomerCard(true)

          this.table = React.createRef()
          this.state = {
               selectedCustomer: null
          }

          this.showCustomerCard(true)
     }

     populateCustomerRows = () => {
          let rowInfo = []
          for (let i = 0; i < customerList.length; i++) {
               rowInfo.push({
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>{customerList[i].id}</h3>)},
                         {css: "name", html: (<div className="customer-name-wrapper"><img src="img/face5.png"/> <h3>{customerList[i].name}</h3></div>)},
                         {css: "age", html: (<h3>{customerList[i].age}</h3>)},
                         {css: "sex", html: (<h3>{customerList[i].sex}</h3>)},
                         {css: "phone", html: (<h3>{customerList[i].phone}</h3>)}
                    ]
               })
          }
          
          return rowInfo
     }

     componentDidMount() {
          this.table.current.setColumns(["Id", "Name", "Age", "Sex", "Phone"])

          this.table.current.addRow(this.populateCustomerRows())
     }

     populateCenterStage() {
          return (               
               <Table ref={this.table} className="customer-list" clickable/>
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