import './Button.module.css'

type Props = {
    children: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button(props: Props) {
    return (<button onClick={props.onClick}>{props.children}</button>)
}