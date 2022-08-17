import HomePage from "../Pages/HomePage";
import { Route, Routes} from "react-router-dom";
import ShopPage from "../Pages/Shop/ShopPage";
import CheckoutPage from "../Pages/checkout/checkout";
import Header from "../Components/header/Header";
// import SignupAndSigninPage from "../Pages/Sign-upAndSign-in Page/Sign-up And Sign-in-Page";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { selectCurrentUser } from "../Components/redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "../Components/redux/user/user.actions";
import React from "react";



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // const Navigate = useNavigate()
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route exact path="/checkout" element={<CheckoutPage/>} />
          <Route
            exact
            path="/signin" 
            // render={() =>
            //   this.props.currentUser ? (
            //     <Redirect to="/signin" /> 
            //   ) : (
            //     <SignupAndSigninPage />
            //   )
            // }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
