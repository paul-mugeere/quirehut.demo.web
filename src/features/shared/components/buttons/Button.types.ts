export interface ButtonProps {
    type?: "button" | "submit"
    handleOnClick?: ()=>void,
    state?: boolean | undefined,
    label: string
    className?: string
}