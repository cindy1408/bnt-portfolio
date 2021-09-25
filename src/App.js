import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Card from './Components/Card';
import image from './resources/image.jpg';
import './Components/Parallax.css';

function AboutMeSection(){
  return (
    <div className="container-fluid about-me">
      <div className="row">
        <div className = "col-sm-4" align="center">
          <Card title="Backend Project" imageSrc={image} />
        </div>
        <div className = "col-sm-4" align="center">
          <Card title="Pokemon Cli Project" imageSrc={image} />
        </div>
        <div className = "col-sm-4" align="center">
          <Card title="Hello" imageSrc={image} />
        </div>
      </div>

      <div className="row">
        <div className = "col-sm-4" align="center">
          <Card title="Hello" imageSrc={image} />
        </div>
        <div className = "col-sm-4" align="center">
          <Card title="Hello" imageSrc={image} />
        </div>
        <div className = "col-sm-4" align="center">
          <Card title="Hello" imageSrc={image} />
        </div>
      </div>

  </div>
  )
}

function App() {
  return (
    <div className="App" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100" tabindex="0">
      {/* <div className="App" data-bs-spy="scroll" data-bs-target="#projects" data-bs-offset="100" tabindex="0"></div> */}
      <Navbar />
      <Header />
      <Banner title="About Me" text="A little bit about me" bannerId="aboutMe"/>
      <AboutMeSection />
      <Banner title='Contact me' text='cindycheung1408@gmail.com' />
    </div>
  
  );
}
export default App;
