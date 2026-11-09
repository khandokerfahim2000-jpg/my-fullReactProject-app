import { Suspense } from "react";
import "./App.css";
import Api from "./Component/Api";
import Footer from "./Component/Footer";
import { Hero } from "./Component/Hero";
import Nav from "./Component/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero />

      <Suspense fallback={<p>Api is Loading...</p>}>
        <Api />
      </Suspense>
      <Footer></Footer>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
