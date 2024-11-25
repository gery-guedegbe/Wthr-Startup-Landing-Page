import { useRef } from "react";

const NavLink = ({
  children,
  setPosition,
  setActiveLink,
  isLogo,
  isActive,
  href,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onClick={() => {
        if (isLogo || !ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });

        if (!isLogo) return setActiveLink(children);
      }}
      className={`relative z-30 block cursor-pointer px-3 text-sm font-bold leading-5 tracking-widest md:text-base ${
        isActive ? "text-customBlack" : "text-customHighLightPrimary"
      }`}
    >
      <a href={`/${href}`}>{children}</a>
    </li>
  );
};

export default NavLink;
