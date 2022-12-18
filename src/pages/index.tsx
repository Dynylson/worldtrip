import { BannerHome } from "../components/BannerHome";
import { Slider } from "../components/Slider";
import { TripCharacteristics } from "../components/TripCharacteristics";

export default function Home() {
  return (
    <>
      <BannerHome />
      <TripCharacteristics />
      <Slider />
    </>
  );
}
