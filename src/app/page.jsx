import BannerPpal from "../components/bannerPpal/page"
import SectionVideo from "../components/contentHome/page";
import Navbar from "../components/navBar/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <BannerPpal />
      <SectionVideo />
    </>
  );
}
