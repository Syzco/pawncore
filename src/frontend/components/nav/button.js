import ReactTooltip from 'react-tooltip'
import Image from 'next/image'

export default function NavButton({src, template, navFunc, active}) {
     return (
          <div className="nav-button">
               <a className={((active == template) ? "active" : "")} onClick={() => navFunc(template)}>
                    <i className={"fa " + src}></i>
               </a>
          </div>
     )
}