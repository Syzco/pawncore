import Stage from '../components/stage/main'
import Table from '../components/table/main'
import React from 'react'
import useSWR from 'swr'

class Customer extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Customer Search")
          this.showCustomerCard(true)

          this.table = React.createRef()
          this.state = {
               selectedCustomer: ((this.props.customerList) ? this.props.customerList[0].id : "")
          }

          this.showCustomerCard(true)
     }

     populateCustomerRows = () => {
          if (!this.props.customerList) return {}
          let rowInfo = []
          for (let i = 0; i < this.props.customerList.length; i++) {
               rowInfo.push({
                    id: this.props.customerList[i].id,
                    css: "customer-item",
                    columns: [
                         {css: "id", html: (<h3>{this.props.customerList[i]}</h3>)},
                         {css: "name", html: (
                              <div className="customer-name-wrapper">
                                   <img src={this.props.customerList[i].imgSrc}/> 
                                   <h3>{this.props.customerList[i].first_name + " " + this.props.customerList[i].last_name}</h3>
                              </div>
                         )},
                         {css: "age", html: (<h3>{this.props.customerList[i].date_of_birth}</h3>)},
                         {css: "sex", html: (<h3>{this.props.customerList[i].sex}</h3>)},
                         {css: "phone", html: (<h3>{this.props.customerList[i].phone}</h3>)}
                    ]
               })
          }
          
          return rowInfo
     }

     componentDidMount() {
          this.table.current.setColumns([{html: "Id"}, {css: "tbl-head-name", html: "Name"}, {html: "Age"}, {html: "Sex"}, {html: "Phone"}])

          //this.table.current.addRow(this.populateCustomerRows())

          this.table.current.rowClickFunc = (e) => {
               this.setState({ selectedCustomer: e.currentTarget.dataset.id } );
          }
     }

     populateCenterStage() {
          return (               
               <Table ref={this.table} className="customer-list" clickable selected={this.state.selectedCustomer}/>
          )
     }   
    
     /*populateSideStage() {
          return (
               <div className="customer-side-details">
                    <div className="name">
                         <p>
                              <div className="name">Name: {customerList[this.state.selectedCustomer].name}</div>
                         </p>
                    </div>

                    <div className="characteristics">
                         <p>
                              <div className="dob">Date of Birth: {customerList[this.state.selectedCustomer].dob}</div>
                              <div className="sex">Sex: {customerList[this.state.selectedCustomer].sex}</div>
                              <div className="race">Race: {customerList[this.state.selectedCustomer].race}</div>
                         </p>
                    </div>

                    <div className="physicals">
                         <p>
                              <div className="eye-color">Eye Color: {customerList[this.state.selectedCustomer].eyeColor}</div>
                              <div className="hair-color">Hair Color: {customerList[this.state.selectedCustomer].hairColor}</div>
                              <div className="marks">Marks: {customerList[this.state.selectedCustomer].marks}</div>
                         </p>
                    </div>

                    <div className="other">
                         <p>
                              <div className="occupation">Occupation: {customerList[this.state.selectedCustomer].occupation}</div>
                         </p>
                    </div>
               </div>
          )
     }*/
}

export default function CustomerTemplate(props) {
     const {data, error} = useSWR('/search/customers')

     console.log(data);

     return (
          <Customer {...props} customerList={data} />
     )
}