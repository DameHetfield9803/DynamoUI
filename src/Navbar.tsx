import dynamo from '/dynamoui.png'
import './nav.css'
export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={dynamo} alt='Dynamo UI' width={110} height={75} className='img' onClick={() => {
                window.location.href = "/";
            }} />
            <div>
                <div onClick={() => {
                    <div className='container'>
                        <ul>
                            <li>Components</li>
                            <li>Utilities</li>
                        </ul>
                    </div>
                }}>
                    Components
                </div>
            </div>
        </nav>
    );
}
