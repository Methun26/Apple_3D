import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";

function App() {

  const webgiViewer = useRef();
  const contentRef = useRef()

  const handlePreview = () => {
    webgiViewer.current.triggerPreview();

  }

  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav/>
        <Jumbotron/>
        <SoundSection/>
        <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViewer ref={webgiViewer} contentRef={contentRef}/>
    </div>
  );
}

export default App;
