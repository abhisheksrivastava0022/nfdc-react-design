import NFDCimg from "../assets/Images/Vector.svg"
import Asimg from "../assets/Images/GOLDEN_LOGO.svg"
import TemporaryDrawer from "./TemporaryDrawer"
const NavBar = () => {
    return (
        <div className="left_first_header">
            <div className="firstHead">
                <div className="burger">
                    <TemporaryDrawer />
                </div>
                <div className="headimg" href="#home">
                    <img
                        src={NFDCimg}
                        width="100%"
                        height="100%"
                        className=""
                        alt="NFDC Cinemas of india"
                    />
                </div>
                <div className="headimg">
                    <img
                        src={Asimg}
                        width="100%"
                        height="100%"
                        className=""
                        alt="NFDC Cinemas of india"
                    />
                </div>
            </div>
            <hr />
            <div className="sec_head">
                <h6>Hello User </h6>
                <p>Mdanial@otco.com, +11 990004444 </p>
            </div>
        </div>
    )
}

export default NavBar