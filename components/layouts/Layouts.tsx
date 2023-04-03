import AboutUs from "../pages/AboutUs";
import Clients from "../pages/Clients";
import Explore from "../pages/ExploreMarket";
import Header from "../pages/Header";
import Products from "../pages/Products";
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
        </main>
      </>
    );
}

export default Layout