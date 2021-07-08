import NavButton from '@Nav/button'

export default function Navigation({navFunc, active}) {
     return (
          <div className="nav">
               <NavButton src="fa-tachometer" alt="Home" template="dashboard" navFunc={navFunc} active={active} />
               <NavButton src="fa-file" alt="Transaction" template="transactions" navFunc={navFunc} active={active} />
               <NavButton src="fa-ticket" alt="Tickets" template="tickets" navFunc={navFunc} active={active} />
               <NavButton src="fa-th-list" alt="Inventory" template="inventory" navFunc={navFunc} active={active} />
               <NavButton src="fa-users" alt="Customers" template="customer" navFunc={navFunc} active={active} />
          </div>
     )
}