import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import { AiFillCaretLeft } from "react-icons/ai";

function Header(props) {
    return (
        <>
            <div style={{ width: '100%', height: "50px", backgroundColor: 'black', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '50%' }}>
                    <img src={logo} style={{ width: '30px', height: '30px' }} />
                    <span style={{ color: 'white' }}>React Boost</span>
                </div>
            </div>
            <div style={{ width: '100%', height: "40px", backgroundColor: '#34495E', display: 'flex', alignItems: 'center' }}>
                <span className='Link1' style={{ color: 'white', padding: '10px', width: '50%' }}>{props.back ? <Link to={props.back} ><AiFillCaretLeft color='white' /> {props.name}</Link> : ''}</span>
                <span className='Link' style={{ color: 'white',padding: '10px', width: '50%' }}>
                    {props.link ? <Link to={props.link} >Create Door</Link> : ''}
                </span>
            </div>
        </>
    );
}

export default Header;