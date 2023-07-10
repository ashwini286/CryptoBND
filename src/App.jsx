import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import CoinsTable from "./components/CoinsTable";
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={CoinsTable} exact />
        {/* <Route path="/coins/:id" component={CoinPage} exact />*/}
        <Route path="/coinpage" component={CoinsTable} exact /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
