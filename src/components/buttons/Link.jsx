export default function Link({ href, text, className }) {
    return (
      <>
        <a
            href={href}
            className={`${className} inline-block font-medium w-[250px] mx-auto text-sm rounded-[5px]
            shadow-xl hover:scale-95 hover:transition`}
            target="_blank"
            rel="noopener norreferer"
          >
            {text}
          </a>
      </>
    );
}