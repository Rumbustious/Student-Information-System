
import universityLogo from '../assets/universityLogo.png';
import collegeLogo from '../assets/ColegeLogo.png';
function Header() {
    return (
        <header className ="page_header">
            <div>
                <img src={universityLogo} alt="University Logo" />
            </div>
            <div>
                <h3>جامعة اسوان </h3>
                <h3>كلية الهندسة </h3>
                <h3>شئون الطلاب</h3>
            </div>
            <div>
                <img src={collegeLogo} alt="College Logo" />
            </div>
        </header>
    );
}

export default Header;
