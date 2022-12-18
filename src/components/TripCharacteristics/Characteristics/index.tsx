import Image from "next/image";

interface CharacteristicsProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function Characteristics({
  src,
  alt,
  width,
  height,
}: CharacteristicsProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
