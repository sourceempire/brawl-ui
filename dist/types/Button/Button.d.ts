/// <reference types="react" />
type ButtonVariant = "primary" | "secondary" | "accent" | "surfaceSecondary";
type Props = {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?: ButtonVariant;
};
export declare function Button({ children, className, variant, onClick }: Props): import("react/jsx-runtime").JSX.Element;
export {};
