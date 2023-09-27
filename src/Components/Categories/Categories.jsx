import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";
// import { useEffect, useState } from "react";



const Categories = ({inputValue}) => {
   
    const categories = useLoaderData()
   
    return (
        <div className="flex justify-center">
           
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                {
                    categories.filter((value) =>{
                        if(inputValue == ""){
                            return value
                        }else if(value.category.toLowerCase().includes(inputValue.toLowerCase())){
                            return value
                        }
                    })
                   .map (element => <CategoryCard key={element.id} element={element}></CategoryCard>)
                }
            </div>
         
        </div>
    );
};

export default Categories;