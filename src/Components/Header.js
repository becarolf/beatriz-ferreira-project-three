import TaylorPic from "../assets/taylorAsset.png"

const Header = () => {
    return (
        <header className="tv-header">

            <div className="header-container">
                <div className="header-text">
                    <h1>Guess the Song</h1>
                    <h2>Taylor's Version</h2>
                </div>
            
                <div className="image-container">
                    <img className="header-image" src=
                    {TaylorPic} alt="Taylor Swift wearing sunglasses and a red lipstick." />
                </div>
            </div>        
        </header>
    )
}

export default Header;