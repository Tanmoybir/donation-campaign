import { Link } from "react-router-dom";


const CategoryCard = ({ element }) => {
   
    const { id, image, title, category,cardBackground,textColor,categoryBackground
    } = element;
    
    return (
        <div className="px-4 md:px-10 lg:px-2">
           <Link to={`/categories/${id}`}>
           <div style={{backgroundColor:cardBackground}} className="relative w-72 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-40"
                    />
                </div>
                <div  className="p-6">
                    <h4 style={{color:textColor}} className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <span style={{backgroundColor:categoryBackground}} className="px-1">{category}</span>
                    </h4>
                    <p style={{color:textColor}} className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {title}
                    </p>
                </div>

            </div>
           </Link>
        </div>
    );
};

export default CategoryCard;