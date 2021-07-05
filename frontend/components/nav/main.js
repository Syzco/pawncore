import NavButton from '@Nav/button'

export default function Navigation() {
     return (
          <div className="nav">
               <NavButton src="/img/icon_home.png" alt="Home" />
               <NavButton src="/img/icon_gold.png" alt="Transaction" />
               <NavButton src="/img/icon_clipboard.png" alt="Tickets" />
               <NavButton src="/img/icon_gear.png" alt="Inventory" />
               <NavButton src="/img/icon_person.png" alt="Customers" />
          </div>
     )
}