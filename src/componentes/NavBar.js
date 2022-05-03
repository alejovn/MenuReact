import { Link } from 'react-router-dom';
const NavBar = (props) => {
    return (
        <>
            <div className="nav-arriba">
                <div className="nav-btn">
                    <Link to="/">Alejandro V.N </Link>
                    <button onClick={() => props.cambio()}><i className={props.iconFlecha} aria-hidden="true"></i></button>
                </div>
                <div className={"combobox " + props.abrir}>
                    <button onClick={() => props.combo()}><i className={props.iconFlechaCombo} aria-hidden="true"></i></button>
                    <ul>
                        <li><Link to="/" onClick={() => props.combo()}>Home </Link></li>
                        <li><Link to="/about" onClick={() => props.combo()}>About </Link></li>
                        <li><Link to="/contact" onClick={() => props.combo()}>Contact </Link></li>
                    </ul>
                </div>
                <button className="button-h" onClick={() => props.cambioBtn()}><i className={props.icon} aria-hidden="true"></i></button>
            </div>
            <div className={"nav " + props.active + " " + props.activeMovile}>
                <ul>
                    <li><Link to="/" onClick={() => props.cambioBtn()}>Home <i className="fa fa-home click" aria-hidden="true"><span className="tooltip">Home</span></i> </Link> </li>
                    <li><Link to="/about" onClick={() => props.cambioBtn()}>About <i className="fa fa-address-card-o click" aria-hidden="true"><span className="tooltip">About</span></i></Link> </li>
                    <li><Link to="/contact" onClick={() => props.cambioBtn()}>Contact <i class="fa fa-address-book-o click" aria-hidden="true"><span className="tooltip">Contact</span></i></Link></li>
                </ul>
                <div className={"footer "+ props.active}>
                    <p>Author: Alejandro Valencia</p>
                    <p><a href="mailto:hege@example.com">alejandrovalencia2011@gmail.com</a></p>
                </div>
            </div>
        </>
    );
}

export default NavBar;