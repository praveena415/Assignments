import { Link } from "react-router-dom";

function Header(){
    return (
        <div>
            <h2>Connect Sphere</h2>
            <Link to="/home">Home</Link>
        </div>
    )
}
export default Header;