import dynamo from '../public/dynamoui.png'
import './nav.css'
export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={dynamo} alt='Dynamo UI' width={80} height={50} className='img' onClick={() => {
                window.location.href = "/";
            }} />
            <div>
                <button>
                    Components
                </button>
            </div>
        </nav>
    );
}
