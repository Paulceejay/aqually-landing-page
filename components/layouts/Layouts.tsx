import AboutUs from "../pages/AboutUs";
import Clients from "../pages/Clients";
import ContactLocation from "../pages/ContactLocation";
import Explore from "../pages/ExploreMarket";
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
      </>
    );
}

export default Layout