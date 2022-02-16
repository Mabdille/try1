import './HomePage.css'
const HomePage = () => {
    return (
        <div className='div'>
            <nav>
                <div class="topnav">
                    <a class="active" href="#home">Home</a>
                    <a href="#news">Quran</a>
                    <a href="#contact">Tafseer</a>
                    <a href="#about">Hadith</a>
                </div>
            </nav>
        
            <div>
                <h1 className='title'>myQuran</h1>
            </div>
        </div>
        
    )
}


export default HomePage;