import ReactTooltip from 'react-tooltip'
import Image from 'next/image'

export default function NavButton({src, alt, template, navFunc}) {
     return (
          <div className="nav-button">
               <a data-tip={alt} onClick={() => navFunc(template)}>
                    <Image src={src} alt={alt} height="64" width="64" />
               </a>
          </div>
     )
}