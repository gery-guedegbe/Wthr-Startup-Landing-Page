import { motion } from "framer-motion";
import logo from "../assets/logos/logo.svg";

const navigationData = [
  { id: 1, link: "Home", href: "#Home" },
  { id: 2, link: "Features", href: "#Features" },
  { id: 3, link: "Testimonials", href: "#Testimonials" },
  { id: 4, link: "FAQ", href: "#faq" },
  { id: 5, link: "Blog", href: "#Blog" },
  { id: 6, link: "Download", href: "#Download" },
];

const socialData = [
  { id: 1, href: "https://x.com/gery_guedegbe0", link: "X/Twitter" },
  {
    id: 2,
    href: "https://www.linkedin.com/in/g%C3%A9ry-guedegbe-0ab692261/",
    link: "Linkedin",
  },
  { id: 3, href: "https://github.com/gery-guedegbe", link: "Github" },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-6 px-6 py-6 text-start lg:gap-10 lg:px-24">
      {/* Logo et slogan */}
      <motion.div
        className="flex w-full flex-col items-start justify-between lg:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex w-full flex-col items-start justify-center gap-3 lg:w-1/2">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-32 object-cover lg:w-56"
          />

          <p className="text-xl font-bold text-customTextPrimary lg:text-2xl">
            Experience the weather like never before.
          </p>
        </div>

        {/* Navigation et réseaux sociaux */}
        <motion.div
          className="mt-12 flex w-full flex-col items-start gap-12 lg:mt-0 lg:w-1/2 lg:flex-row lg:gap-28"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Navigation */}
          <motion.ul
            className="flex flex-col items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <li className="mb-2 text-xl font-bold text-customTextPrimary">
              Navigation
            </li>

            {navigationData.map((link) => (
              <motion.li
                key={link.id}
                className="text-lg font-bold text-customTextPrimary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + link.id * 0.1 }}
              >
                <a rel="noopener noreferrer" href={link.href}>
                  {link.link}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Réseaux sociaux */}
          <motion.ul
            className="flex flex-col items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <li className="mb-2 text-xl font-bold text-customTextPrimary">
              Social Media
            </li>

            {socialData.map((link) => (
              <motion.li
                key={link.id}
                className="text-lg font-bold text-customTextPrimary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + link.id * 0.1 }}
              >
                <a rel="noopener noreferrer" target="_blank" href={link.href}>
                  {link.link}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Mentions légales */}
      <motion.div
        className="mt-4 flex w-full flex-col items-start justify-between gap-6 text-start lg:flex-row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/tonjrv"
          className="text-base font-bold text-customTextPrimary hover:text-customHighLightPrimary hover:underline"
        >
          © {currentYear} – Toni Järvinen @tonjrv
        </a>

        <ul className="flex flex-col items-start justify-center gap-6 text-start lg:flex-row lg:items-center">
          {["Privacy Policy", "Cookies", "Terms & Conditions"].map(
            (policy, index) => (
              <motion.li
                key={index}
                className="text-base font-bold text-customTextPrimary hover:text-customHighLightPrimary hover:underline"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              >
                <a href="#">{policy}</a>
              </motion.li>
            ),
          )}
        </ul>
      </motion.div>
    </footer>
  );
};

export default Footer;
