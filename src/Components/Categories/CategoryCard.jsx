

const CategoryCard = ({ element }) => {
    console.log(element);
    const { id, image, title, category,cardBackground,textColor,categoryBackground
    } = element;
    const cardStyle ={
        backgroundColor:element.cardBackground
    }
    const categoryStyle ={
        backgroundColor:element.categoryBackground
    }
    const textStyle ={
        color:element.textColor
    }
    return (
        <div>
            <div style={cardStyle} className="relative w-72 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-40"
                    />
                </div>
                <div  className="p-6">
                    <h4 style={categoryStyle,textStyle} className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {category}
                    </h4>
                    <p style={textStyle} className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {title}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CategoryCard;