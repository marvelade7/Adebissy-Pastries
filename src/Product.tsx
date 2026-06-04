// import styled from 'styled-components';
interface ProductProps {
    title: string;
    description: string;
    price: number;
}
const Product = ({title, description, price}: ProductProps ) => {
    return (
        <>
            <div className="w-85  rounded-xl shadow-lg pb-1">
                <img src='susage-roll.jpg' width="100%" className="rounded-t-xl" />
                <div className="my-3 px-4">
                    <h4 className="text-[1.3em] font-medium">{title}</h4>
                    <p className="my-1">{description}</p>
                    <div className="flex items-center justify-between my-4">
                        <h3 className="text-[1.3em] font-medium">₦{price}</h3>
                        <button className="py-2 px-8 bg-[#72462C] text-white rounded-[10px] font-medium cursor-pointer hover:bg-[#502f1c] active:bg-[#2b1a11] duration-300">Order</button>
                    </div>
                </div>
            </div>
        </>
    );
// Flaky golden pastry filled with seasoned minced pork
};

export default Product;