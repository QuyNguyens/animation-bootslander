import AboutUs from "./components/AboutUs"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Details from "./components/Details"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import OurTeams from "./components/OurTeams"
import Price from "./components/Price"
import Questions from "./components/Questions"
import { ActiveSectionProvider } from "./contexts/ActiveSectionContext"

function App() {

  return (
    <ActiveSectionProvider>
      <div className="relative bg-bg-main">
        <Header />
        <section id="Home"><Banner /></section>
        <section id="About"><AboutUs /></section>
        <section id="Features"><Features /></section>
        <Details />
        <section id="Gallery"><Gallery /></section>
        <section id="Team"><OurTeams /></section>
        <section id="Price"><Price /></section>
        <Questions />
        <section id="Contact"><Contact /></section>
        <Footer />
      </div>
    </ActiveSectionProvider>
  )
}

export default App
