import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {
    const [category,setCategory] = useState()
    const {id} = useParams()
    // console.log(id);
    const categories = useLoaderData()
    // console.log(categories);
    useEffect(() =>{
        const findCategory = categories?.find((category) => category.id == id);
        setCategory(findCategory);
    },[id,categories]);
    return (
        <div>
            <DonationDetailsCard details={category}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;