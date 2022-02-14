import React from "react";
import Link from "next/link";

const MenuItems = () => (
    <>
        <a href="/">about us</a>
        <Link href="/service">services</Link>
        <a href="/#events">events</a>
    </>
)

export default MenuItems;