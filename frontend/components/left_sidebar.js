import Image from 'next/image'
import gearIcon from '../public/icon_gear.png'
import clipboardIcon from '../public/icon_clipboard.png'
import goldIcon from '../public/icon_gold.png'
import homeIcon from '../public/icon_home.png'
import personIcon from '../public/icon_person.png'


function LeftSideBar()
{
    return (
        <div className="sidenav">
            <ul>
                 <li><a href="#"><Image src={homeIcon} alt="Home" /></a></li>
                 <li><a href="#"><Image src={clipboardIcon} alt="Setting" /></a></li>
                 <li><a href="#"><Image src={goldIcon} alt="Setting" /></a></li>
                 <li><a href="#"><Image src={gearIcon} alt="Settings" /></a></li>
                 <li><a href="#"><Image src={personIcon} alt="Person" /></a></li>
            </ul>
        </div>
    )
}

module.exports = LeftSideBar