export default function SplashImage() {
  return (
    <div
      className="relative w-full overflow-hidden shrink-0
        h-[120vw]
        md:h-[55vw] md:max-h-[900px] md:min-h-[400px]"
    >
      <img
        src="/splash-image.png"
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none
          [object-position:center_20%]
          md:[object-position:center_center]"
      />
    </div>
  );
}
