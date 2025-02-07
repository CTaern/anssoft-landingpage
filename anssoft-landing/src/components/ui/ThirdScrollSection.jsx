import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ThirdScrollSection() {
  // Retrieve the translation function from react-i18next.
  const { t } = useTranslation();
   // Get the navigation function from react-router-dom to programmatically change routes.
  const navigate = useNavigate();
  // Function to navigate to the '/services' page when the button is clicked.
  const handleNavigation = () => {
    navigate('/services');
  };
  // Define an array of service objects, each with a number, title, and description.
  const services = [
    {
      number: "01/",
      title: t("thirdScrollSection.digitalTransformation"),
      description:
        t("thirdScrollSection.digitalTransformationDesc"),
    },
    {
      number: "02/",
      title: t("thirdScrollSection.softwareIntegration"),
      description:
        t("thirdScrollSection.softwareIntegrationDesc"),
    },
    {
      number: "03/",
      title: t("thirdScrollSection.customSoftware"),
      description:
        t("thirdScrollSection.customSoftwareDesc"),
    },
    {
      number: "04/",
      title: t("thirdScrollSection.ctoConsulting"),
      description:
        t("thirdScrollSection.ctoConsultingDesc"),
    },
  ];

  return (
    // Main container: centers content with padding and sets a minimum height.
    // It is positioned relative to allow the background overlay to be placed absolutely.
    <div className="flex flex-col justify-center items-center min-h-screen py-8 sm:py-12 px-4 sm:px-6 text-white relative overflow-auto">
      {/* Background Styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80 h-full"></div>

      {/* Section Content */}
      <div className="relative z-10 w-full max-w-[90%] md:max-w-5xl text-center">
        {/* Section Title */}
        <p className="text-sm sm:text-lg uppercase text-neutral-400 tracking-wide mb-4 mt-8">
          {t("thirdScrollSection.ourSolutions")}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-snug mb-8 sm:mb-10">
          {t("thirdScrollSection.manageProjects")} <br />
          {t("thirdScrollSection.highControl")}
        </h2>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start border-t border-gray-600 py-4 sm:py-6"
            >
              <span className="text-lg sm:text-xl font-semibold text-blue-400 w-12 sm:w-16">
                {service.number}
              </span>
              <div className="flex flex-col text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-md mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-8 sm:mt-10">
          <button className="px-4 sm:px-6 py-2 sm:py-3 border border-neutral-500 text-white rounded-lg transition hover:bg-white hover:text-black flex items-center text-sm sm:text-base"
            onClick={handleNavigation}>
            {t("thirdScrollSection.viewAllServices")}
            <span className="ml-2">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};