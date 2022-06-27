import './App.css';
import Navbar from './component/navbar/navbar';
import SlideOne from './component/homepage/sectionOne/slideone';
import SlideTwo from './component/homepage/sectionTwo/slidetwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlideOne />
      <SlideTwo />
    </div>
  );
}

export default App;
