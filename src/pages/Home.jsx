import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";

function Home({isHome, scrollTo}) {
  return (
    <>
    <title>Home</title>
      <Header isHome={isHome} scrollTo={scrollTo} />
      <HomeMain />
      <Footer />
    </>
  )
}

export default Home
