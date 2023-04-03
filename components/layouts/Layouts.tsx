import AboutUs from "../pages/AboutUs";
import Clients from "../pages/Clients";
import ContactLocation from "../pages/ContactLocation";
import Explore from "../pages/ExploreMarket";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import Products from "../pages/Products";
import Recipes from "../pages/Recipes";
import Reviews from "../pages/Reviews";
import WhyChooseUs from "../pages/WhyChooseUs";

const Layout = () => {
    return (
      <>
        <main className="my-5">
          <Header />
          <Explore />
          <WhyChooseUs />
          <AboutUs />
          <Clients />
          <Products />
          <Recipes />
          <Reviews />
          <ContactLocation />
        </main>
        <footer className="w-full bg-primaryColor">
          <Footer />
          <p className="text-center text-white py-5 font-Inter font-normal"> &#169; Aqually2023</p>
        </footer>
      </>
    );
}

export default Layout