import Stage from '../components/stage/main'
import Table from '../components/table/main'
import React from 'react'

let customerList = {
     1: {
          name: "Alexander Hamilton",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     2: {
          name: "Winter Solstice",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     3: {
          name: "Ralph Hammond",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     4: {
          name: "Home Couch",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     5: {
          name: "Spring Board",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     6: {
          name: "Jose Lexington",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     7: {
          name: "George Clooney",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     8: {
          name: "Pizza Boi",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     9: {
          name: "Luce Wimmand",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     10: {
          name: "Wu Man Chu",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     11: {
          name: "King Bach",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     },
     12: {
          name: "Garfield Orange-Cat",
          age: 10,
          sex: "Male",
          phone: "666-666-6969",
          dob: "",
          race: "Black",
          eyeColor: "Blue",
          hairColor: "Black",
          marks: "Teardrop Tattoo",
          occupation: "Wendy's Janitor",
          imgSrc: "img/face5.png"
     }
}

export default class Customer extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Customer Search")
          this.showCustomerCard(true)

          this.table = React.createRef()
          this.state = {
               selectedCustomer: ((this.props.customerList) ? Object.keys(this.props.customerList)[0] : Object.keys(customerList)[0])
          }

          this.showCustomerCard(true)
     }

     populateCustomerRows = () => {
          let rowInfo = []
          let customerIdList = Object.keys(customerList)
          for (let i = 0; i < customerIdList.length; i++) {
               rowInfo.push({
                    id: customerIdList[i],
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>{customerIdList[i]}</h3>)},
                         {css: "name", html: (<div className="customer-name-wrapper"><img src={customerList[customerIdList[i]].imgSrc}/> <h3>{customerList[customerIdList[i]].name}</h3></div>)},
                         {css: "age", html: (<h3>{customerList[customerIdList[i]].age}</h3>)},
                         {css: "sex", html: (<h3>{customerList[customerIdList[i]].sex}</h3>)},
                         {css: "phone", html: (<h3>{customerList[customerIdList[i]].phone}</h3>)}
                    ]
               })
          }
          
          return rowInfo
     }

     componentDidMount() {
          this.table.current.setColumns(["Id", "Name", "Age", "Sex", "Phone"])

          this.table.current.addRow(this.populateCustomerRows())

          this.table.current.rowClickFunc = (e) => {
               this.setState({ selectedCustomer: e.currentTarget.dataset.id } );
          }
     }

     populateCenterStage() {
          return (               
               <Table ref={this.table} className="customer-list" clickable selected={this.state.selectedCustomer}/>
          )
     }   
    
     populateSideStage() {
          return (
               <div className="customer-side-details">
                    <div className="name">
                         <p>Name: {customerList[this.state.selectedCustomer].name}</p>
                    </div>

                    <div className="characteristics">
                         <p>
                              Date of Birth: {customerList[this.state.selectedCustomer].dob} <br />
                              Sex: {customerList[this.state.selectedCustomer].sex} <br />
                              Race: {customerList[this.state.selectedCustomer].race}
                         </p>
                    </div>

                    <div className="physicals">
                         <p>
                              Eye Color: {customerList[this.state.selectedCustomer].eyeColor} <br />
                              Hair Color: {customerList[this.state.selectedCustomer].hairColor} <br />
                              Marks: {customerList[this.state.selectedCustomer].marks}
                         </p>
                    </div>

                    <div className="other">
                         <p>Occupation: {customerList[this.state.selectedCustomer].occupation}</p>
                    </div>

               </div>
          )
     }
}