export const getShops = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products/categories");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
};
