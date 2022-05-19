import react from "react"
import facebookLogo from "../images/icon-facebook.svg"
import pinterestLogo from "../images/icon-pinterest.svg"
import instagramLogo from "../images/icon-instagram.svg"



export default function Footer() {
    return (
        <footer>
        <div class="icon">
        <img src={facebookLogo} alt="" />
        <img src={pinterestLogo} alt="" />
        <img src={instagramLogo} alt="" />
    </div>
    </footer>
    )
}