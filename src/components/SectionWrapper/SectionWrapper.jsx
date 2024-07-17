function SectionWrapper({ children, className = "" }) {
  return (
    <section className={className + " h-1/2 flex px-40"}>{children}</section>
  );
}

export default SectionWrapper;
