import Link from "next/link";

const navBarItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
];

export function NavBar() {
    return (
        <nav className="flex flex-row">
            {navBarItems.map((item) => (
                <NavItem key={item.name} label={item.name} href={item.href} />
            ))}
        </nav>
    );
}

interface NavItemProps {
    label: string;
    href: string;
}

function NavItem(props: NavItemProps) {
    return (
        <Link
            className="flex h-12 w-32 items-center justify-center font-sans text-xl text-gray-950"
            href={props.href}
        >
            {props.label}
        </Link>
    );
}
