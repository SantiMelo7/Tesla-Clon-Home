export default function Image({ src, alt }) {
  return (
    <div className="absolute md:top-0 bottom-0 w-full h-full z-10">
      <img
        src={src}
        className="w-full h-full md:object-cover md:object-center sm:object-cover sm:object-bottom"
        alt={alt}
      />
    </div>
  );
}
