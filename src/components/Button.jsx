/* eslint-disable react/prop-types */
export default function Button({ children, className = "" }) {
  return <button className={className}>{children}</button>;
}
