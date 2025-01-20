'use client';
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import groq from "groq";
import { useAppDispatch } from "@/app/hooks/redux";
import { client } from "@/sanity/lib/client";
import { getAllProductData } from "@/redux/allProducts.slice";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]); // All products from API
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products to display
  const [filters, setFilters] = useState({
    category: "All Categories",
    type: "All Types",
    price: "All Prices",
    brand: "All Brands",
    tags: "All Tags",
  });

  const dispatch = useAppDispatch();

  // Fetch product data from Sanity CMS
  const fetchProductData = async () => {
    const queryNewProducts = groq`*[_type == "product"]`;
    const data = await client.fetch(queryNewProducts);
    setProducts(data);
    setFilteredProducts(data); // Initialize filtered products with all products
    dispatch(getAllProductData(data)); // Save the products data in Redux
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // Handle filtering logic
  useEffect(() => {
    const { category, type, price, brand, tags } = filters;

    const filtered = products.filter((product: any) => {
      // Filter by category
      const matchCategory =
        category === "All Categories" || product?.category?.name === category;

      // Filter by type
      const matchType = type === "All Types" || product?.type === type;

      // Filter by price
      const matchPrice =
        price === "All Prices" ||
        (price === "Under £50" && product.price < 50) ||
        (price === "£50 - £100" && product.price >= 50 && product.price <= 100) ||
        (price === "Over £100" && product.price > 100);

      // Filter by brand
      const matchBrand = brand === "All Brands" || product?.brand === brand;

      // Filter by tags
      const matchTags =
        tags === "All Tags" ||
        (product?.tags && product.tags.includes(tags));

      return matchCategory && matchType && matchPrice && matchBrand && matchTags;
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  // Update filter state
  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-8">All Products</h1>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        {/* Dropdown filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {filters.category} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => updateFilter("category", "All Categories")}>
                All Categories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("category", "Chairs")}>
                Chairs
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("category", "Vases")}>
                Vases
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("category", "Lighting")}>
                Lighting
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Type Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {filters.type} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => updateFilter("type", "All Types")}>
                All Types
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("type", "Furniture")}>
                Furniture
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("type", "Decor")}>
                Decor
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("type", "Accessories")}>
                Accessories
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Price Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {filters.price} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => updateFilter("price", "All Prices")}>
                All Prices
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("price", "Under £50")}>
                Under £50
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("price", "£50 - £100")}>
                £50 - £100
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("price", "Over £100")}>
                Over £100
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Brand Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {filters.brand} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => updateFilter("brand", "All Brands")}>
                All Brands
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("brand", "Brand A")}>
                Brand A
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("brand", "Brand B")}>
                Brand B
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFilter("brand", "Brand C")}>
                Brand C
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Sort Dropdown */}
        <Select defaultValue="featured">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: any) => (
            <Link key={product._id} href={`/product/${product._id}`} className="group">
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">£{product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
