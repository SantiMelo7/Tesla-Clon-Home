export const Video = ({ src }) => {
  return (
    <div className="absolute top-0 bottom-0 h-full w-full z-10">
      <video
        loop
        muted
        autoPlay
        className="object-center object-cover h-full w-full"
        src={src}
      ></video>
    </div>
  );
};
