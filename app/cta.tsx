interface CallToActionProps extends React.ComponentPropsWithoutRef<"a"> {
    variant: "primary" | "secondary";
    children?: React.ReactNode;
}

const colorVariants: Record<CallToActionProps["variant"], string> = {
    primary: "bg-gray-950 hover:bg-gray-800 text-gray-50",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-950",
};

export function CallToAction(props: CallToActionProps) {
    const { children, variant, ...linkProps } = props;
    return (
        <a {...linkProps}>
            <div
                className={`${colorVariants[variant]} flex flex-row items-center justify-center gap-2 rounded-md border border-gray-950/50 px-2.5 py-1.5 font-sans text-base font-medium`}
            >
                {children}
            </div>
        </a>
    );
}
