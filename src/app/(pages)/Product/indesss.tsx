// // import { Inter } from 'next/font/google'

// // import "./globals.css"
// // import { Footer } from '@/app/component/footer'
// // import { SiteHeader } from '@/app/component/Siteheader'

// // const inter = Inter({ subsets: ["latin"] })

// // export const metadata = {
// //   title: "Avion",
// //   description: "Luxury homeware for people who love timeless design quality",
// // }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>
// //         <SiteHeader />
// //         {children}
// //         <Footer />
// //       </body>
// //     </html>
// //   )
// // }










// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { ChevronDown } from 'lucide-react';
// import groq from "groq";
// import { useAppDispatch } from "@/app/hooks/redux";
// import { client } from "@/sanity/lib/client";
// import { getAllProductData } from "@/redux/allProducts.slice";
// import { useEffect, useState } from "react";

// export default function ProductsPage() {
//     const [products, setProducts] = useState([]); // Original products from API
//     const [filteredProducts, setFilteredProducts] = useState([]); // Products filtered by user input
//     const [filters, setFilters] = useState({
//         category: 'all',
//         type: 'all',
//         price: 'all',
//         brand: 'all',
//         tag: '',
//     });

//     const dispatch = useAppDispatch();

//     // Fetch products from Sanity
//     const fetchProductData = async () => {
//         const queryNewProducts = groq`*[_type == "product"]`;
//         const data = await client.fetch(queryNewProducts);
//         setProducts(data);
//         setFilteredProducts(data); // Initialize filtered products
//         dispatch(getAllProductData(data)); // Save the data in Redux
//     };

//     useEffect(() => {
//         fetchProductData();
//     }, []);

//     // Filter products based on active filters
//     const filterProducts = () => {
//         let updatedProducts = products;

//         // Filter by category
//         if (filters.category !== 'all') {
//             updatedProducts = updatedProducts.filter((product: any) =>
//                 product.category?.name?.toLowerCase() === filters.category.toLowerCase()
//             );
//         }

//         // Filter by type
//         if (filters.type !== 'all') {
//             updatedProducts = updatedProducts.filter((product: any) =>
//                 product._type?.toLowerCase() === filters.type.toLowerCase()
//             );
//         }

//         // Filter by price
//         if (filters.price !== 'all') {
//             updatedProducts = updatedProducts.filter((product: any) => {
//                 if (filters.price === 'under50') return product.price < 50;
//                 if (filters.price === '50to100') return product.price >= 50 && product.price <= 100;
//                 if (filters.price === 'over100') return product.price > 100;
//                 return true;
//             });
//         }

//         // Filter by brand (if brand info exists in product data)
//         if (filters.brand !== 'all') {
//             updatedProducts = updatedProducts.filter((product: any) =>
//                 product.brand?.toLowerCase() === filters.brand.toLowerCase()
//             );
//         }

//         // Search by tags
//         if (filters.tag.trim() !== '') {
//             updatedProducts = updatedProducts.filter((product: any) =>
//                 product.tags?.some((tag: string) =>
//                     tag.toLowerCase().includes(filters.tag.toLowerCase())
//                 )
//             );
//         }

//         setFilteredProducts(updatedProducts);
//     };

//     // Update filters and apply filtering logic
//     const handleFilterChange = (key: string, value: string) => {
//         setFilters((prevFilters) => ({
//             ...prevFilters,
//             [key]: value,
//         }));
//     };

//     useEffect(() => {
//         filterProducts();
//     }, [filters]);

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-medium mb-8">All Products</h1>

//             {/* Filters Section */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//                 <div className="flex flex-wrap items-center gap-2">
//                     {/* Category Filter */}
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" size="sm">
//                                 Category
//                                 <ChevronDown className="ml-2 h-4 w-4" />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem onClick={() => handleFilterChange('category', 'all')}>All Categories</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('category', 'chairs')}>Chairs</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('category', 'vases')}>Vases</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('category', 'lighting')}>Lighting</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>

//                     {/* Type Filter */}
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" size="sm">
//                                 Product Type
//                                 <ChevronDown className="ml-2 h-4 w-4" />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem onClick={() => handleFilterChange('type', 'all')}>All Types</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('type', 'furniture')}>Furniture</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('type', 'decor')}>Decor</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('type', 'accessories')}>Accessories</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>

//                     {/* Price Filter */}
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" size="sm">
//                                 Price
//                                 <ChevronDown className="ml-2 h-4 w-4" />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem onClick={() => handleFilterChange('price', 'all')}>All Prices</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('price', 'under50')}>Under £50</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('price', '50to100')}>£50 - £100</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('price', 'over100')}>Over £100</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>

//                     {/* Brand Filter */}
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" size="sm">
//                                 Brand
//                                 <ChevronDown className="ml-2 h-4 w-4" />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem onClick={() => handleFilterChange('brand', 'all')}>All Brands</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('brand', 'brand-a')}>Brand A</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('brand', 'brand-b')}>Brand B</DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => handleFilterChange('brand', 'brand-c')}>Brand C</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </div>

//                 {/* Search by Tags */}
//                 <input
//                     type="text"
//                     placeholder="Search by tags..."
//                     className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full sm:w-[250px]"
//                     value={filters.tag}
//                     onChange={(e) => handleFilterChange('tag', e.target.value)}
//                 />
//             </div>

//             {/* Products Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {filteredProducts.map((product: any) => (
//                     <Link
//                         key={product._id}
//                         href={`/product/${product._id}`}
//                         className="group"
//                     >
//                         <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 width={400}
//                                 height={400}
//                                 className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                             />
//                         </div>
//                         <div className="mt-4 space-y-1">
//                             <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
//                             <p className="text-sm text-gray-500">
