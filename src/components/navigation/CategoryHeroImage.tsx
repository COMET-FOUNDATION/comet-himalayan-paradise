export function CategoryHeroImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full overflow-hidden bg-green-950">
      {/* Native dimensions preserve the complete panorama without cropping. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full" />
    </div>
  );
}
