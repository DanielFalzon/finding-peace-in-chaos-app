import React from "react";
import Link from "next/link";

const MenuItems = () => (
    <>
        <a href="http://localhost:3000#boop">about us</a>
        <Link href="/service">services</Link>
        <a href="http://localhost:3000#boop">events</a>
        <a href="/contact">contact us</a>
    </>
)

export default MenuItems;