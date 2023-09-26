

const DonationCard = ({data}) => {
    
    const {image,title,price,category,cardBackground,textColor,categoryBackground} = data;
    return (
        <div>
          <div  className="flex justify-center items-center px-3">
        <div style={{backgroundColor:cardBackground}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={image} alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h6 style={{color:textColor}} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
             <span style={{backgroundColor:categoryBackground}}>{category}</span>
            </h6>
            <h4  className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p style={{color:textColor}} className="text-base font-semibold mb-5">${price}</p>
  
            <button style={{backgroundColor:textColor}}
                className="px-6 py-4 rounded-xl text-white text-lg font-semibold"
                type="button"
              >
                View Details
               
              </button>
          </div>
        </div>
      </div>
      
        </div>
    );
};

export default DonationCard;