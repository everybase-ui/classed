import { getDisplayName } from "./utils"

type ClassableComponent = React.ElementType<{ className?: string }>
type ClassedComponentProps<T extends ClassableComponent> = React.ComponentProps<T> extends infer P
    ? P extends { className?: string }
        ? P
        : any
    : any

export default function classed<T extends ClassableComponent>(Component: T) {
    function ClassedComponent(props: ClassedComponentProps<T>) {
        return <Component {...props} className={props.className} />
    }
    ClassedComponent.displayName = `classed(${getDisplayName(Component)})`
    return ClassedComponent
}