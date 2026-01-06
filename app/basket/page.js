"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
    const {
        cartItems,
        addToCart,
        decreaseQty,
        removeFromCart,
        totalPrice,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <>
                <Navbar></Navbar>
                <div className="h-screen flex items-center justify-center text-gray-500">
                    Your cart is empty 🛒
                </div>
                <Footer></Footer>
            </>
        );
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border p-4 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    className="w-20 h-20 object-contain"
                                />
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="text-sm text-gray-500">
                                        ${item.price}
                                    </p>

                                    {/* Quantity controls */}
                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="w-8 h-8 border rounded hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="w-8 h-8 border rounded hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-6 border-t pt-4">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-xl font-bold">
                        ${totalPrice.toFixed(2)}
                    </span>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default CartPage;
