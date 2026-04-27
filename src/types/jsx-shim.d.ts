/**
 * @types/react v19 removed the global `JSX` namespace in favour of `React.JSX`.
 * This shim re-exports it globally so existing component files that use the
 * bare `JSX.Element` return type continue to compile without mass edits.
 *
 * New code should prefer `React.JSX.Element` or `React.ReactElement`.
 */
declare namespace JSX {
  type Element = React.JSX.Element;
  type ElementClass = React.JSX.ElementClass;
  type ElementAttributesProperty = React.JSX.ElementAttributesProperty;
  type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute;
  type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
  interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
}
