const footerIcons = [
  { name: "GitHub", imgPath: "/images/icons8-github-48.png", href: "https://github.com/Najib-Murshed-UWO" },
  { name: "Salesforce", imgPath: "/images/icons8-salesforce-48.png", href: "https://www.salesforce.com/trailblazer/klpohohshx76fki1gm" },
  { name: "LinkedIn", imgPath: "/images/icons8-linkedin-48.png", href: "https://www.linkedin.com/in/najibmurshed/" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {footerIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={icon.name}
            >
              <img src={icon.imgPath} alt={icon.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center md:col-start-3 md:items-end md:justify-end">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Md Najib Murshed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
