import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation,setDonation] =useState([])
    const [noFound,setNoFound] = useState(false)
    const [isShow,setIsShow] = useState(false)

   useEffect(() =>{
    const donationAdd =JSON.parse(localStorage.getItem("donation"));
    if(donationAdd){
        setDonation(donationAdd);
    }else{
        setNoFound('Please Donate');
    }
   },[])
   
    return (
        <div>
            {noFound ?<p className="h-[80vh] flex justify-center items-center">{noFound}</p>:
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        isShow ?donation.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                        :
                        donation.slice(0,4).map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                    }
                </div>
            </div> }
            <div className="flex justify-center items-center">
       <button onClick={() =>setIsShow(!isShow)} className="bg-green-400 px-7 py-4  rounded-lg my-4">{isShow ?"See Less":"See All"}</button>
       </div>
            
        </div>
    );
};

export default Donation;