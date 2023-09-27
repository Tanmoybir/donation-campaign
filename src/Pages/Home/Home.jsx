
import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (value) => {
        setInputValue (value);
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner onInputChange={handleInputChange}></Banner>
           <Categories inputValue ={inputValue}></Categories>
        </div>
    );
};

export default Home;