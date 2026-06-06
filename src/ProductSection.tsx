import Product from "./Product";
import { useEffect, useRef, useState } from "react";

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
            price: 2500,
            image: 'cake.jpeg',
        },
    ];

    const loopedProducts = [...products, ...products];
    const cycleWidth = products.length * ITEM_WIDTH;

    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

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

    return (
        <section id="menu" className="scroll-mt-28 md:scroll-mt-32 bg-[#F2F1E9] px-4 py-10 sm:px-8 lg:px-20 lg:py-20">
                <h1 data-aos="fade-up" data-aos-delay="100" className="my-8 text-center md:text-4xl text-3xl font-bold sm:mb-10 sm:text-5xl md:mb-12 md:text-[2.5em]">
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
                                />
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    );
};

export default ProductSection;
