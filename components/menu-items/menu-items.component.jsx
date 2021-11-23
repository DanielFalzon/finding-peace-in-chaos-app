import React from "react";
import Link from "next/link";

const MenuItems = () => (
    <>
        <Link href="/service"><a>services</a></Link>
        <a href="http://localhost:3000#boop">events</a>
        <a href="http://localhost:3000#boop">contact us</a>
    </>
)

export default MenuItems;