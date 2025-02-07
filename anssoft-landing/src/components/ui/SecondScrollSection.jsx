import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function SecondScrollSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);


  /**
   * toggleAccordion function:
   * - Toggles the active accordion item based on the provided index.
   * - If the clicked item is already active, it collapses it (set to null).
   * - Otherwise, it sets the clicked item's index as the active one.
   *
   */
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: t("secondScrollSection.expertTeam"),
      content:
        t("secondScrollSection.expertTeamDesc"),
    },
    {
      title: t("secondScrollSection.commitmentQuality"),
      content: t("secondScrollSection.commitmentQualityDesc"),
    },
    {
      title: t("secondScrollSection.customerSatisfaction"),
      content: t("secondScrollSection.customerSatisfactionDesc"),
    },
    {
      title: t("secondScrollSection.innovativeSolutions"),
      content: t("secondScrollSection.innovativeSolutionsDesc"),
    },
  ];

  return (
    // Main container:
    // - Arranges children in a column on small screens and a row on medium screens.
    // - Ensures minimum height covers the viewport and applies padding and text color.
    <div className="flex flex-col md:flex-row items-center min-h-[100vh] p-4 sm:p-8 bg-transparent text-white">
      {/* Left Image */}
      <div className="flex-1 w-full md:w-auto">
        <img
          src="/second-scroll-image.png"
          alt="Second Scroll Section"
          className="object-contain w-full h-auto max-w-[500px] mx-auto"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 w-full md:pl-8 lg:pl-16 mt-8 md:mt-0">
        <p className="text-sm uppercase text-neutral-300">{t("secondScrollSection.whyChooseUs")}</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-2">
          {t("secondScrollSection.commitmentMessage")}
        </h2>
        <div className="mt-6">
          {accordionItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left text-base sm:text-lg font-semibold bg-transparent border-none outline-none flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span
                  className={`${activeIndex === index ? 'text-blue-400' : 'text-neutral-50'
                    }`}
                >
                  {item.title}
                </span>
                <span
                  className={`transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-neutral-300 text-sm sm:text-base">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}