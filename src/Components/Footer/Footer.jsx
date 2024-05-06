import './Footer.css'
import footer_logo from'../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pinterest from '../Assets/pintester_icon.png'
function Footer(){
    return(
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo}/>
                <p>paws&tails</p>
            </div>
            <div className='footer-social-icons'>
                <div className='footer-icon-container'>
                    <img src={instagram_icon}/>
                </div>
                <div className='footer-icon-container'>
                    <img src={whatsapp_icon}/>
                </div>
                <div className='footer-icon-container'>
                    <img src={pinterest}/>
                </div>
            </div>
            <div className='footer-address'>
                <p>Block-B plot-84/A,Sector-93,Noida,Uttar Pradesh</p>
                <p>paws&tails@gmail.com, 5689-7896-254</p>
                
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2024- All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer