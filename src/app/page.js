import Banner from "./components/banner";
import Novedades from "./components/novedades";
import ProximasCarreras from "./components/proximas";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <ProximasCarreras />
      <Novedades />
    </div>
  );
}
