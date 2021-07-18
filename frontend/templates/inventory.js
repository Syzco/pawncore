import Stage from '../components/stage/main'
import Table from '../components/table/main'
import SearchBox from '@Components/search-box'

export default class Customer extends Stage {
     constructor(props) {
          super(props)
          
          this.setTitle("Inventory Search")
          this.showCustomerCard(false)

          this.table = {}
          this.table.rows = [
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

          this.table.columns = ["Inventory Number", "Product", "Quantity", "Price", "ItemId", ""]
     }

     populateCenterStage() {
          return (
               <div className="center-stage-container">
                    <SearchBox />
                    <Table className="inventory-list" rows={this.table.rows} columns={this.table.columns} />
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
                         <p>
                              Item Id: 593823 <br />
                              Inventory Number: 356121 <br />
                              Serial Number: 4992231
                         </p>
                    </div>

                    <div className="catalog">
                         <p>
                              Type: Cleaning Supplies <br />
                              Catalog: 4922031
                         </p>
                    </div>

                    <div className="price">
                         <p>
                              Quantity: 1 <br />
                              Price: $654 <br />
                              Cost: $822
                         </p>
                    </div>

                    <div className="item-details">
                         <p>
                              Condition: New <br />
                              Description: <span className="item-description">A bottle of shampoo.</span>
                         </p>
                    </div>
               </div>
          )
     }
}