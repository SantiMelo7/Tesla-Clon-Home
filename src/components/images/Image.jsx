export default function Image({ src, alt }) {
  return (
    <div className="absolute md:top-0 bottom-0 w-full h-full z-10">
      <img src={src} alt={alt} />
    </div>
  );
}
