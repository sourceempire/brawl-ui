import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "accent" | "surfaceSecondary";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: ButtonVariant;
};

export function Button({ children, className, variant = "secondary", onClick }: Props) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
