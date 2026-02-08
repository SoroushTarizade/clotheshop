export async function GET() {
    try {
        const res = await fetch("https://fakestoreapi.com/products", {
            cache: "no-store",
        });

        if (!res.ok) {
            return Response.json(
                { error: "Failed to fetch products" },
                { status: 500 }
            );
        }

        const data = await res.json();
        return Response.json(data);
    } catch (error) {
        return Response.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
