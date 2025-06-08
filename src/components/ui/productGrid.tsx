export default function ProductGrid() {
    const products = [
        {
            id: 1,
            name: "Leather Backpack",
            price: "$129.99",
            src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
            alt: "Brown leather backpack"
        },
        {
            id: 2,
            name: "Wireless Headphones",
            price: "$199.99",
            src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            alt: "Black wireless headphones"
        },
        {
            id: 3,
            name: "Smart Watch",
            price: "$299.99",
            src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            alt: "Modern smartwatch"
        },
        {
            id: 4,
            name: "Camera Lens",
            price: "$899.99",
            src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            alt: "Professional camera lens"
        },
        {
            id: 5,
            name: "Mechanical Keyboard",
            price: "$159.99",
            src: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
            alt: "RGB mechanical keyboard"
        },
        {
            id: 6,
            name: "Gaming Mouse",
            price: "$79.99",
            src: "https://images.unsplash.com/photo-1527814050087-3793815479db",
            alt: "Gaming mouse with RGB"
        }
    ];

    return (
        <div className="grid gap-6 p-8">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                    <img
                        src={product.src}
                        alt={product.alt}
                        className="h-64 w-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full translate-y-full bg-white p-4 transition-transform duration-300 group-hover:translate-y-0">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}