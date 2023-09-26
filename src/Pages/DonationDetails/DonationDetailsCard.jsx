import swal from "sweetalert";


const DonationDetailsCard = ({details}) => {
    const { id, image,title,price,textColor
    } =details || {};
    
    const handleAddToDonation =() =>{
      const donationArray = [];
      const donationAdd =JSON.parse(localStorage.getItem("donation"));
     
      if(!donationAdd){
        donationArray.push(details)
        localStorage.setItem("donation",JSON.stringify(donationArray))
        swal("Good job!", "Donation added successfully!", "success");
      }else{
        const isExits =donationAdd.find((details) => details.id == id)

        if(!isExits){
          donationArray.push(...donationAdd,details)
        localStorage.setItem("donation",JSON.stringify(donationArray))
        swal("Good job!", "Donation added successfully!", "success");
        }else{
          swal("Error!", "No Duplicate!", "success");
        }


        
      }
    }
    
    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <div className="relative">
    <img
      src={image}
      alt="ui/ux review check"
      className="w-full"
    />
    </div>
    <div className="bg-[#0B0B0B80] opacity-80 absolute bottom-0 right-0 left-0 py-10">
        <button onClick={handleAddToDonation} style={ {backgroundColor:textColor}} className="text-xl text-white font-semibold mx-8 px-7 py-4">Donate ${price}</button>
    </div>
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
    
    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
      January 10
    </p>
  </div>
</div>
            
        </div>
    );
};

export default DonationDetailsCard;