import Button from '../button/Button';
import './header.css';
import companyLogo_01 from '../../assets/images/company-logo-01.png';

const Header = () => {
    return(
        <nav>
            <img alt='company logo' src={companyLogo_01} />
            <h1>Boundless</h1>
            <ul>
                <li><Button>Going Solar</Button></li>
                <li><Button>Service Areas</Button></li>
                <li><Button>Education</Button></li>
                <li><Button>About</Button></li>
            </ul>
            <span className='spacer'></span>
            <Button style={{ marginRight: 30 }}>Chat with a Specialist</Button>
            <Button type='fill'>Request Service</Button>
        </nav>
    )
};

export default Header;