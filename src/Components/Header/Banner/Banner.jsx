import { useState } from "react";
// import { useLoaderData } from "react-router-dom";

// import SearchResults from "./SearchResults";



const Banner = ({ onInputChange }) => {
  const [value, setValue] = useState('');


  const handleInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }



  const handleSearchClick = () => {
    onInputChange(value);
  }


  return (
    <div className="px-3">
      <div className=" hero min-h-[50vh] bg-[url('https://i.ibb.co/mFTvdXx/donation.png')]">
        <div className="hero-overlay bg-opacity-90"></div>
        <div className=" hero-content text-center text-neutral-content ">
          <div className="max-w-md ">
            <h1 className="text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="max-w-md border-2 mt-2 shadow-lg rounded-lg bg-white h-16">
              <form className="w-full flex items-center">
                <input className="border-none h-16 w-3/4 px-5 text-2xl rounded-l-lg" type="text" value={value} onChange={handleInputChange} placeholder="search..." />

                <button type="button" onClick={() => handleSearchClick(value)} className="px-8 py-5 bg-red-500 rounded-lg">Search</button>
              </form>
            </div>
          </div>

        </div>

      </div>

    </div>

  );
};

export default Banner;
