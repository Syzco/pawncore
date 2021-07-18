import Stage from '../components/stage/main'
import Table from '../components/table/main'
import SearchBox from '@Components/search-box'
import React from 'react'

export default class Inventory extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Inventory Search")
          this.showCustomerCard(false)

          this.table = React.createRef()
          this.rows = [
               {
                    css: "inventory-item",
                    columns: [
                         {css: "inventory-number", html: (<h3>356121</h3>)},
                         {css: "inventory-product", html: (<div className="item-name-wrapper"><img src="img/inventory-items/shampoo.png"/> <h3>Bathing Shampoo</h3></div>)},
                         {css: "inventory-quantity", html: (<h3>1</h3>)},
                         {css: "inventory-price", html: (<h3>$2.99</h3>)},                        
                         {css: "inventory-itemid", html: (<h3>593823</h3>)},                   
                         {css: "inventory-button", html: (<a href="#">Edit</a>)},
                    ]
               },
               {
                    css: "inventory-item",
                    columns: [
                         {css: "inventory-number", html: (<h3>356122</h3>)},
                         {css: "inventory-product", html: (<div className="item-name-wrapper"><img src="img/inventory-items/shampoo2.png"/> <h3>Bathing Shampoo</h3></div>)},
                         {css: "inventory-quantity", html: (<h3>78</h3>)},
                         {css: "inventory-price", html: (<h3>$2.99</h3>)},                        
                         {css: "inventory-itemid", html: (<h3>593824</h3>)},                   
                         {css: "inventory-button", html: (<a href="#">Edit</a>)},
                    ]
               },
          ]

     }
     
     componentDidMount()
     {          
          this.table.current.setColumns([{html: "Inventory Number"}, {html: "Product"}, {html: "Quantity"}, {html: "Price"}, {html: "ItemId"}, {html: ""}])
     }

     populateCenterStage() {
          return (
               <div className="center-stage-container">
                    <SearchBox />

                    <div className="list-container">
                         <Table ref={this.table} className="inventory-list" rows={this.rows} />
                    </div>
               </div>
          )
     }

     populateSideStage() {
          return (
               <div className="item-side-details">
                    <div className="img">
                         <img src="img/inventory-items/shampoo.png" />
                    </div>

                    <div className="name">
                         <p>Bathing Shampoo</p>
                    </div>

                    <div className="inventory-details">
                         <div className="item-id">Item Id: 593823 </div>
                         <div className="inventory-number">Inventory Number: 356121</div>
                         <div className="serial-number">Serial Number: 4992231 </div>
                    </div>

                    <div className="catalog">
                         <div className="type">Type: Cleaning Supplies</div>
                         <div className="catalog">Catalog: 4922031</div>
                    </div>

                    <div className="price">
                         <div className="quantity">Quantity: 1 </div>
                         <div className="price">Price: $654 </div>
                         <div className="cost">Cost: $822 </div>
                    </div>

                    <div className="item-details">
                         <div className="condition">Condition: New </div>
                         <div className="description">Description: <span className="item-description">A bottle of shampoo.</span></div>
                    </div>
               </div>
          )
     }
}