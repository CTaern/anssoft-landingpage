import { useTranslation } from "react-i18next";

export function FooterSection() {

  const { t } = useTranslation();
  return (
    <footer className="flex flex-col items-center justify-center w-full min-h-screen py-16 px-6 text-white bg-black">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center">

        {/* Contact Section */}
        <div className="col-span-1 md:col-span-2 bg-black/70 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">{t("footer.getInTouch")}</h3>
          <p className="text-neutral-300 text-sm md:text-base mb-2">
            Nişantaşı, Dr. Mehmet Hulusi Baybal Cd. hazım uluşahin iş merkezi A blok p142, 42090 Selçuklu/Konya
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-2">
            Email: <a href="mailto:info@anssoft.com.tr" className="text-blue-400 hover:underline">info@anssoft.com.tr</a>
          </p>
          <p className="text-neutral-300 text-sm md:text-base">
            {t("footer.phone")} +90 538 321 51 41
          </p>
        </div>

        {/* Map Section */}
        <div className="col-span-1 md:col-span-2 bg-black/70 rounded-lg shadow-lg flex flex-col items-center w-full">
          <h3 className="text-xl font-semibold text-white mb-4">{t("footer.ourLocation")}</h3>
          <div className="w-full max-w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.311714254932!2d32.47912947535492!3d37.876392306300815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0856dc78967c1%3A0x8be858fc7917bef6!2sANSSOFT!5e0!3m2!1str!2str!4v1737116120220!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="anssoft-location"
            ></iframe>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4">{t("footer.learnMore")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-blue-400 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-blue-400 hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-blue-400 hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4">{t("footer.stayConnected")}</h3>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/anssoft_/" className="text-blue-400 hover:text-blue-600">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/company/anssoft/" className="text-blue-400 hover:text-blue-600">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
