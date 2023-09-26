

const Banner = () => {
   
    return (
        <div className="px-3">
           <div className="hero min-h-[150vh]" style={{backgroundImage: 'url(https://i.ibb.co/mFTvdXx/donation.png)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <h1 className="text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
    <div className="max-w-md border-black border-2 mt-2 shadow-lg rounded-lg bg-white h-16">
      <form className="w-full flex items-center">
        <input className="border-none h-16 w-3/4 px-5 text-2xl rounded-l-lg" type="text" placeholder="search..." />
        <button className="px-8 py-5 bg-red-500 rounded-lg">Search</button>
      </form>
    </div>
    </div>
    
  </div>
</div> 
        </div>
       
    );
};

export default Banner;
