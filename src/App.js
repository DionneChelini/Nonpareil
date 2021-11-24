import { useContext, useEffect } from "react";
import Footer from "./application/components/Footer";
import Navigation from "./application/layouts/Navbar";
import Storefront from "./application/pages/Storefront";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collection from "./application/pages/Collection";
import ProductOverview from "./application/pages/ProductOverview";
import ErrorPage from "./application/pages/404";
import HowToOrder from "./application/pages/HowToOrder";
import Service from "./application/pages/Service";
import Privacy from "./application/pages/Privacy";
import Shipping from "./application/pages/Shipping";
import Payment from "./application/pages/Payment";
import Contact from "./application/pages/Contact";
import Mission from "./application/pages/Mission";
import SomethingWentWrong from "./application/pages/SomethingWentWrong";
import Login from "./application/pages/Login";
import Dashboard from "./application/pages/Dashboard";
import Returns from "./application/pages/Returns";
import Faq from "./application/pages/Faq";
import ProductContext from "./context/products/productContext";
import AuthenticatedRoute from "./context/auth/AuthenticatedRoute";
// Context
import AuthContextProvider from "./context/auth/AuthState";
//Analytics
import { initialize } from "react-ga";
const App = () => {
  const productContext = useContext(ProductContext);
  const { loading } = productContext;
  useEffect(() => {
    initialize();
  }, []);

  return (
    <AuthContextProvider>
      <Router>
        <Navigation />s
        <Switch>
          <Route exact path='/' component={Storefront} />
          <Route exact path='/collection:category' component={Collection} />
          <Route
            exact
            path='/product_overview:id'
            component={ProductOverview}
          />
          <Route exact path='/shipping' component={Shipping} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/our_service' component={Service} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/contact_us' component={Contact} />
          <Route exact path='/returns' component={Returns} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/how_to_order' component={HowToOrder} />
          <Route exact path='/our_mission' component={Mission} />
          <Route exact path='/login' component={Login} />
          <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
          <Route exact path='/server_error' component={SomethingWentWrong} />
          <Route component={ErrorPage} />
        </Switch>
        {loading ? null : <Footer />}
      </Router>
    </AuthContextProvider>
  );
};

export default App;
