import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./styles.css";


function App() {
return (
<>
<nav className="navbar">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</nav>


<main>
<section id="home"><Home /></section>
<section id="about"><About /></section>
<section id="projects"><Projects /></section>
<section id="contact">
<h1>Contact</h1>
<p>Email: <a href="mailto:jonastrindadeantunes@gmail.com">jonastrindadeantunes@gmail.com</a></p>
<p>GitHub / NPM: <a href="https://www.npmjs.com/package/@jonasantunes/utility_lib_miew" target="_blank">@jonasantunes</a></p>
</section>
</main>
</>
);
}


export default App;