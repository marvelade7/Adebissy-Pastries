// import styled from 'styled-components';
interface ProductProps {
    title: string;
    description: string;
    price: number;
}
const Product = ({title, description, price}: ProductProps ) => {
    return (
        <>
            <div className="w-full rounded-xl pb-1 shadow-lg">
                <img src='susage-roll.jpg' width="100%" className="rounded-t-xl" />
                <div className="my-3 px-4">
                    <h4 className="text-xl font-medium md:text-[1.3em]">{title}</h4>
                    <p className="my-1 text-sm md:text-base">{description}</p>
                    <div className="my-4 flex items-center justify-between gap-3">
                        <h3 className="text-xl font-medium md:text-[1.3em]">₦{price}</h3>
                        <button className="rounded-[10px] bg-[#72462C] px-5 py-2 text-sm font-medium text-white cursor-pointer duration-300 hover:bg-[#502f1c] active:bg-[#2b1a11] md:px-8 md:text-base">Order</button>
                    </div>
                </div>
            </div>
        </>
    );
// Flaky golden pastry filled with seasoned minced pork
};

export default Product;