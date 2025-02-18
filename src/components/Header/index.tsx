import BtmHeader from "./BtmHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex flex-col w-full border bg-white border-b-1 border-zinc-100 z-50">
      <TopHeader />
      <BtmHeader />
    </header>
  );
};

export default Header;
