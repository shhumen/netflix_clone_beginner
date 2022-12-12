import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import requests from "../../data/requests";
import Row from "../../components/Row";

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            {/*    NAVBAR   */}
            <Navbar/>
            {/*    BANNER   */}
            <Banner/>
            {/*    ROWS     */}
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title=" Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies}/>

        </div>
    )
}

export default HomeScreen
