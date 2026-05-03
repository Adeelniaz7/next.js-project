"use client"
import React, { Suspense } from "react";
import { Input } from "./ui/input";
import { useSearchParams } from "next/navigation";
import { search } from "@/app/actions/Search";

const SearchInputContent = () => {
    const searchParams = useSearchParams();
    return (
        <form action={search}>
            <Input defaultValue={searchParams.get("term") || ""} type="text" name="term" placeholder="search post..." />
        </form>
    )
}

const SearchInput = () => {
    return (
        <Suspense fallback={<form><Input type="text" name="term" placeholder="search post..." /></form>}>
            <SearchInputContent />
        </Suspense>
    )
}
export default SearchInput;