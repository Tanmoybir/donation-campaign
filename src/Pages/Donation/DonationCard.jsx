

const DonationCard = ({data}) => {
    
    const {image,title,price,category} = data;
    return (
        <div className="flex justify-center items-center ">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={image} alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              {category}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p>${price}</p>
  
            <button
                className=""
                type="button"
              >
                View Details
               
              </button>
          </div>
        </div>
      </div>
    );
};

export default DonationCard;