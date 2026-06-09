import Product from "./Product";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type SelectedProduct = {
    title: string;
    price: number;
};

const ProductSection = () => {
    const CARD_WIDTH = 300;
    const CARD_GAP = 40;
    const ITEM_WIDTH = CARD_WIDTH + CARD_GAP;
    const AUTO_SCROLL_SPEED = 0.06;

    const products = [
        {
            title: "Sausage Roll",
            description: "Flaky golden pastry filled with seasoned minced pork",
            price: 800,
            image: 'sausage-roll.jpeg',
        },
        {
            title: "Meat Pie",
            description: "Buttery shortcrust pie packed with minced beef, potatoes, and carrots",
            price: 1000,
            image: 'meat-pie.jpeg',
        },
        {
            title: "Doughnut",
            description: "Buttery shortcrust pie packed with minced beef, potatoes, and carrots",
            price: 700,
            image: 'ring-doughnut.jpeg',
        },
        {
            title: "Foil Cake",
            description: "Dense and decadent chocolate cake with a glossy chocolate ganache glaze",
            price: 2000,
            image: 'foil-cake.jpeg',
        },
        {
            title: "Chicken Pie",
            description: "Rich creamy chicken filling wrapped in a crisp baked pastry shell",
            price: 1000,
            image: 'chicken-pie.jpeg',
        },
        {
            title: "Puff Puff",
            description: "Soft airy fried dough balls dusted lightly with cinnamon sugar",
            price: 200,
            image: 'puff-puff.jpeg',
        },
        {
            title: "Chin Chin Crunch",
            description: "Crunchy bite-size milk pastry cubes with a lightly sweet finish",
            price: 500,
            image: 'chin-chin.jpg',
        },
        {
            title: "Cake",
            description: "Moist and fluffy layered cake with rich buttercream frosting",
            price: 20000,
            image: 'cake.jpeg',
        },
    ];

    const loopedProducts = [...products, ...products];
    const cycleWidth = products.length * ITEM_WIDTH;

    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
    const [customerName, setCustomerName] = useState('');
    const [quantity, setQuantity] = useState(1);

    const dragStartXRef = useRef(0);
    const dragStartOffsetRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);
    const lastFrameTimeRef = useRef<number | null>(null);

    const normalizeOffset = (value: number) => {
        return ((value % cycleWidth) + cycleWidth) % cycleWidth;
    };

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (lastFrameTimeRef.current === null) {
                lastFrameTimeRef.current = timestamp;
            }

            const delta = timestamp - lastFrameTimeRef.current;
            lastFrameTimeRef.current = timestamp;

            if (!isDragging && !isHovered) {
                setOffset((previousOffset) =>
                    normalizeOffset(previousOffset + delta * AUTO_SCROLL_SPEED)
                );
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isDragging, isHovered, cycleWidth]);

    const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setIsDragging(true);
        dragStartXRef.current = event.clientX;
        dragStartOffsetRef.current = offset;
    };

    const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) {
            return;
        }

        const dragDelta = event.clientX - dragStartXRef.current;
        setOffset(normalizeOffset(dragStartOffsetRef.current - dragDelta));
    };

    const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const delta = event.deltaX !== 0 ? event.deltaX : event.deltaY;
        if (!delta) return;
        // Convert vertical wheel to horizontal swipe when over carousel
        event.preventDefault();
        const WHEEL_MULTIPLIER = 1.4;
        setOffset((prev) => normalizeOffset(prev + delta * WHEEL_MULTIPLIER));
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
            setOffset((prev) => normalizeOffset(prev - ITEM_WIDTH));
        } else if (event.key === 'ArrowRight') {
            setOffset((prev) => normalizeOffset(prev + ITEM_WIDTH));
        }
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    const closeOrderModal = () => {
        setSelectedProduct(null);
        setCustomerName('');
        setQuantity(1);
    };

    const handleQuantityChange = (value: string) => {
        const parsedQuantity = Number.parseInt(value, 10);

        if (Number.isNaN(parsedQuantity) || parsedQuantity < 1) {
            setQuantity(1);
            return;
        }

        setQuantity(parsedQuantity);
    };

    const handleWhatsAppOrder = () => {
        if (!selectedProduct) {
            return;
        }

        const phoneNumber = '2348134794011';
        const name = customerName.trim() || '...';
        const totalPrice = selectedProduct.price * quantity;
        const productName = selectedProduct.title.toLowerCase();
        const pluralSuffix = quantity > 1 ? 's' : '';
        const message = encodeURIComponent(
            `Hii, my name is ${name}. \nI would like to order ${quantity} ${productName}${pluralSuffix}. \nTotal price is ₦${totalPrice}.`
        );

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
        closeOrderModal();
    };

    const orderModal = selectedProduct && typeof document !== 'undefined'
        ? createPortal(
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
                onClick={closeOrderModal}
            >
                <div
                    className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                            <p className="text-[.7em] font-semibold uppercase tracking-[0.2em] text-[#72462C]/70">Place Order</p>
                            <h3 className="mt-1 text-xl font-bold text-[#522E1F]">{selectedProduct.title}</h3>
                        </div>
                        <button
                            type="button"
                            onClick={closeOrderModal}
                            className="rounded-full bg-[#72462C]/10 px-3 py-1 text-lg font-semibold text-[#72462C] transition hover:bg-[#72462C]/20"
                            aria-label="Close order modal"
                        >
                            ×
                        </button>
                    </div>

                    <div className="space-y-4">
                        <label className="block">
                            <span className="mb-1 block text-sm font-medium text-[#522E1F]">Your Name</span>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(event) => setCustomerName(event.target.value)}
                                placeholder="Enter your name"
                                className="w-full rounded-2xl border border-[#72462C]/20 bg-white px-4 py-3 text-[#522E1F] outline-none transition placeholder:text-[#72462C]/40 focus:border-[#72462C]"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-1 block text-sm font-medium text-[#522E1F]">Quantity</span>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(event) => handleQuantityChange(event.target.value)}
                                className="w-full rounded-2xl border border-[#72462C]/20 bg-white px-4 py-3 text-[#522E1F] outline-none transition placeholder:text-[#72462C]/40 focus:border-[#72462C]"
                            />
                        </label>

                        <div className="rounded-2xl bg-[#72462C]/5 p-4">
                            <div className="flex items-center justify-between gap-4 text-[.7em] sm:text-sm">
                                <span className="text-[#522E1F]/70">Unit Price</span>
                                <span className="font-semibold text-[#522E1F]">₦{selectedProduct.price}</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between gap-4 text-[.7em] sm:text-sm">
                                <span className="text-[#522E1F]/70">Total Price</span>
                                <span className="text-lg font-bold text-[#72462C]">₦{selectedProduct.price * quantity}</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleWhatsAppOrder}
                            className="w-full rounded-2xl bg-[#72462C] px-5 py-3 text-base font-semibold cursor-pointer text-white transition duration-300 hover:bg-[#502f1c] active:bg-[#2b1a11]"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        )
        : null;

    return (
        <section id="menu" className="scroll-mt-28 md:scroll-mt-32 bg-[#F2F1E9] px-4 py-10 sm:px-8 lg:px-20 lg:py-20">
                <h1 data-aos="fade-up" data-aos-delay="100" className="my-8 text-center md:text-4xl text-2xl font-bold sm:mb-10 sm:text-5xl md:mb-12 md:text-[2.5em]">
                    Featured Products
                </h1>
                <div
                    data-aos="fade-up"
                    data-aos-delay="180"
                    className="cursor-grab overflow-hidden select-none mt-10 active:cursor-grabbing"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    onWheel={onWheel}
                    onKeyDown={onKeyDown}
                    tabIndex={0}
                    role="region"
                    aria-label="Product carousel"
                    style={{ touchAction: "pan-y" }}
                >
                    <div
                        className="product-carousel-track"
                        style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
                    >
                        {loopedProducts.map((product, index) => (
                            <div
                                className="flex-none w-75"
                                data-aos="fade-up"
                                data-aos-delay={(index % products.length) * 70}
                                key={`${product.title}-${index}`}
                            >
                                <Product
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    image={product.image}
                                    onOrderClick={() => setSelectedProduct({ title: product.title, price: product.price })}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {orderModal}
        </section>
    );
};

export default ProductSection;
