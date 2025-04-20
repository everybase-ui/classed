export function getDisplayName(Component: React.ElementType) {
    return typeof Component === 'string'
        ? Component
        : (Component.displayName || Component.name || 'Component')
}