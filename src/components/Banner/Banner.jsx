import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundImage: "url(https://prod-discovery.edx-cdn.org/media/course/image/b30852f8-410a-4078-9f72-a6891f7270bf-f195de321e9c.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover',
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
}));

function Banner() {
    const classes = useStyles();

    return ( 
    <div className = { classes.banner } >
        <Container className = { classes.bannerContent } >
        <div className = { classes.tagline } >
        <Typography variant = "h2"
        style = {
            {
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
            }
        } >
        Crypto Info </Typography> 
        <Typography variant = "subtitle2"
        style = {
            {
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
            }
        } >
        Get all the Info regarding your favorite Crypto Currency 
        </Typography> 
        </div> 
        <Carousel/>
        </Container> 
        </div>
    );
}

export default Banner;