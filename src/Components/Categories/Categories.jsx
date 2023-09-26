import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";



const Categories = () => {
    const categories = useLoaderData()
    return (
        <div className="flex justify-center">
           
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                {
                    categories?.map (element => <CategoryCard key={element.id} element={element}></CategoryCard>)
                }
            </div>
         
        </div>
    );
};

export default Categories;