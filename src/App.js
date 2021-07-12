import './style/index.css';
import { Hobbies, Info, Progress, Projects, ColorPicker, Blogs, Footer } from './components/index';

function App() {
  return (
    <div className="app">
      <div className="container">
        <ColorPicker />
      </div>
      <main className="container">
        <div className="column">
          <Info />
          <Progress />
          <Hobbies />
        </div>
        <div className="column">
          <Projects />
          <Blogs />
        </div>
      </main>
      <Footer />
    </div >
  );
}

export default App;
