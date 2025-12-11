function Container({ children, attributes }) {
  const className = attributes?.className || "";
  return (
    <div className={`container mx-auto h-screen`} {...attributes}>
      {children}
    </div>
  );
}

export default Container;
