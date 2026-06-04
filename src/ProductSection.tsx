import Product from "./Product";
const ProductSection = () => {
    return (
        <>
            <div className="bg-[#F2F1E9] py-10 px-20">
                <h1 className="text-center font-bold text-[2.5em] mb-12">
                    Featured Products
                </h1>
                <div className="flex items-center  justify-center gap-10 ">
                    <Product
                        title="Sausage Roll"
                        description="Flaky golden pastry filled with seasoned minced pork"
                        price={800}
                    />
                    <Product
                        title="Sausage Roll"
                        description="Flaky golden pastry filled with seasoned minced pork"
                        price={800}
                    />
                    <Product
                        title="Sausage Roll"
                        description="Flaky golden pastry filled with seasoned minced pork"
                        price={800}
                    />
                    <Product
                        title="Sausage Roll"
                        description="Flaky golden pastry filled with seasoned minced pork"
                        price={800}
                    />
                    <Product
                        title="Sausage Roll"
                        description="Flaky golden pastry filled with seasoned minced pork"
                        price={800}
                    />
                    <Product
                        title="Sausage Roll"
                        description="Flaky golden pastry filled with seasoned minced pork"
                        price={800}
                    />
                    <Product
                        title="Sausage Roll"
                        description="Flaky golden pastry filled with seasoned minced pork"
                        price={800}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductSection;
