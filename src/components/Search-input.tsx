"use client"
import React from "react";
import { Input } from "./ui/input";
import { useSearchParams } from "next/navigation";
import { search } from "@/app/actions/Search";

const SearchInput = () => {
    const searchParams = useSearchParams();
    return (
        <form action={search}>
            <Input defaultValue={searchParams.get("term") || ""} type="text" name="term" placeholder="search post..." />

        </form>

    )
}
export default SearchInput;