
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
           <Categories></Categories>
        </div>
    );
};

export default Home;