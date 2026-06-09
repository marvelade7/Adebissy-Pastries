// import styled from 'styled-components';
interface ProductProps {
    title: string;
    description: string;
    price: number;
    image?: string;
}
const Product = ({ title, description, price, image }: ProductProps) => {
    return (
        <>
            <div className="w-full rounded-xl pb-2 my-5 shadow-lg">
                <img src={image} width="100%" height='300' className="rounded-t-xl" />
                <div className="my-5 px-4">
                    <h4 className="text-xl font-medium md:text-[1.3em]">{title}</h4>
                    <p className="my-3 text-md md:text-lg">{description}</p>
                    <div className="my-6 flex items-center justify-between gap-3">
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