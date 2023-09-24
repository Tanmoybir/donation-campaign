import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";



const Categories = () => {
    const categories = useLoaderData()
    return (
        <div>
            <h1>All Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    categories?.map (element => <CategoryCard key={element.id} element={element}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;