export const sendOrders = async (orderData) => {
    try {
        const endpoint = "https://647055d53de51400f72413ba.mockapi.io/orders";
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            throw new Error("Error saving the order");
        }

        await response.json();
    } catch (error) {
        console.error(error);
    }
};
