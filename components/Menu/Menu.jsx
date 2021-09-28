import Image from "next/image";
import { useContent } from "@contexts/ContentProvider";
import {
  MenuWrapper,
  MenuNavWrapper,
  MenuBrand,
  MenuNav,
  MenuNavItem,
} from "./Menu.style";

const NavItem = ({ item, version }) => (
  <MenuNavItem version={version}>
    <a href={item.href} title={item.title}>
      {item.name}
    </a>

    {item.subMenu && <ul className="simple-list hidden">Blau</ul>}
  </MenuNavItem>
);

export const Menu = ({ version = 'dark' }) => {
  const { menu: menuContent, brand: brandContent } =
    useContent("shared.header");

  return (
    <MenuWrapper>
      <MenuBrand href={brandContent.link.href} title={brandContent.link.title}>
        <Image
          width="130"
          height="45"
          src={brandContent.image.src}
          alt={brandContent.image.alt}
        />
      </MenuBrand>

      <MenuNavWrapper>
        <MenuNav>
          {menuContent.items.map((item, index) => (
            <NavItem version={version} item={item} key={index} />
          ))}
        </MenuNav>
      </MenuNavWrapper>
    </MenuWrapper>
  );
};
