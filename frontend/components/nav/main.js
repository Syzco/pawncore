import NavButton from '@Nav/button'

export default function Navigation({navFunc}) {
     return (
          <div className="nav">
               <NavButton src="/img/icon_home.png" alt="Home" template="dashboard" navFunc={navFunc} />
               <NavButton src="/img/icon_gold.png" alt="Transaction" template="customer" navFunc={navFunc} />
               <NavButton src="/img/icon_clipboard.png" alt="Tickets" template="customer" navFunc={navFunc} />
               <NavButton src="/img/icon_gear.png" alt="Inventory" template="customer" navFunc={navFunc} />
               <NavButton src="/img/icon_person.png" alt="Customers" template="customer" navFunc={navFunc} />
          </div>
     )
}