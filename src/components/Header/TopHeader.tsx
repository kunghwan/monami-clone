import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

type SNS = IconType;

type LinkName = "HOME" | "SITE MAP" | "CONTACT US";
interface LinkProps {
  name: LinkName;
  path: string;
}
const TopHeader = () => {
  const sns: SNS[] = [FaFacebook, FaInstagram, FaYoutube];
  const links: LinkProps[] = [
    { name: "HOME", path: "/" },
    { name: "SITE MAP", path: "/map" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <div className="flex justify-between items-center">
      <ul className="flex gap-x-0">
        {sns.map((Icon, index) => {
          return (
            <li
              key={index}
              className=" w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-200 rounded-full"
            >
              <Icon />
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-x-2.5">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <button>{link.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopHeader;
