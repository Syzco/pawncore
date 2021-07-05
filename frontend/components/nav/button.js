import ReactTooltip from 'react-tooltip'
import Image from 'next/image'

export default function NavButton({src, alt}) {
     return (
          <div className="nav-button">
               <a data-tip={alt}>
                    <Image src={src} alt={alt} height="64" width="64" />
               </a>
               <ReactTooltip effect="solid" />
          </div>
     )
}