import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation,setDonation] =useState([])
    const [noFound,setNoFound] = useState(false)

   useEffect(() =>{
    const donationAdd =JSON.parse(localStorage.getItem("donation"));
    if(donationAdd){
        setDonation(donationAdd);
    }else{
        setNoFound('No Data Found');
    }
   },[])
   
    return (
        <div>
            {noFound ?<p className="h-[80vh] flex justify-center items-center">{noFound}</p>:
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                      donation.map(data => <DonationCard key={data.id} data={data}></DonationCard>)  
                    }
                </div>
            </div> }
        </div>
    );
};

export default Donation;