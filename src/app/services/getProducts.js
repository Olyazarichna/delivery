export const getProducts = async (shop) => {
    try {
        const response = await fetch(
            `https://dummyjson.com/products/category/${shop}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }


}