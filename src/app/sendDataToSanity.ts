import { client } from '../sanity/lib/client'; // Import your Sanity client

/**
 * Sends data to Sanity.
 * @param {Object} productData - The product data to send to Sanity.
 * @returns {Promise<void>}
 */
const sendDataToSanity = async (productData: any) => {
    try {
        const result = await client.create({
            _type: 'product', // Replace with the correct schema type
            ...productData,
        });
        console.log('Data sent successfully:', result);
    } catch (error) {
        console.error('Failed to send data to Sanity:', error);
    }
};

export default sendDataToSanity;


// import { client } from "../sanity/lib/client"

// export const createProduct = async (productData: any) => {
//     try {
//         const result = await client.create({
//             _type: 'product',
//             ...productData,
//         });
//         console.log('Product created:', result);
//         return result;
//     } catch (error) {
//         console.error('Error creating product:', error);
//         throw error;
//     }
// };

// export const createProductsInSanity = async (products: any) => {
//     try {
//         for (const product of products) {
//             await createProduct(product);
//         }
//         console.log('All products successfully sent to Sanity!');
//     } catch (error) {
//         console.error('Failed to send products:', error);
//     }
// };


// export const syncProductsWithSanity = async () => {
//     try {
//         const products = await fetchProducts(); // Step 1: Fetch data
//         await createProductsInSanity(products); // Step 2: Send data to Sanity
//     } catch (error) {
//         console.error('Error syncing products with Sanity:', error);
//     }
// };

// Call the function
// syncProductsWithSanity();
