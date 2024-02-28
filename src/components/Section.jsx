export default function Section({ title, className, classNameSub, subTitle, children }) {
  return (
    <>
      <section
        className="text-center h-screen w-screen relative"
        data-header-color="white"
      >
        <div className="relative z-30 flex flex-col h-screen text-white overflow-auto">
          <section className="mt-28">
            <h2 className={`${className} text-4xl mb-1 font-medium`}>{title}</h2>
            <p className={`${classNameSub} text-sm mt-2 font-medium`}>
              {subTitle}
            </p>
          </section>
          {children}
        </div>
      </section>
    </>
  );
}
