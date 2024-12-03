/**
 * @class Products
 * @description purpose of this page is to render product list
 * @author Nawod Madhuwantha
 */

import { useSelector } from "react-redux";
import { RootState } from "../lib/store/store";
import { useEffect, useState } from "react";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { FilterTypes } from "../lib/constants/products";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "../components/products/ProductCard";

const Products = () => {
    const products = useSelector((state: RootState) => state.productStates);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filterType, setFilterType] = useState<string>(
        FilterTypes.Name.value
    );
    const [filteredProducts, setFilteredProducts] =
        useState<Product[]>(products);

    /**
     * filter products according to search query
     */
    const filter = () => {
        const filteredList = products.filter((product) => {
            if (filterType === FilterTypes.Name.value) {
                return product.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            } else {
                return product.price
                    .toString()
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            }
        });
        setFilteredProducts(filteredList);
    };

    useEffect(() => {
        filter();
    }, [searchQuery, filterType]);

    return (
        <div className="container py-8">
            <h1 className="section-title">Products</h1>
            <div className="mx-4 flex gap-4">
                <TextField
                    label={`Search products by ${filterType}...`}
                    placeholder="Search product..."
                    multiline
                    className="w-full"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    size="small"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Filter by :"
                    value={filterType}
                    className="w-28"
                    size="small"
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    {FilterTypes.list.map((option) => (
                        <MenuItem
                            key={option.id}
                            value={option.value}
                        >
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
