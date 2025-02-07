import React from 'react';
import { useTranslation } from 'react-i18next';


export function FirstContent() {

  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-start h-screen p-4 md:p-8 text-white max-w-[90%] md:max-w-[700px] mx-auto" >
      {/* Heading */}
      < h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" >
        {t('firstContent.heading')}
      </h1 >

      {/* Paragraph */}
      < p className="mt-4 text-neutral-300 max-w-full md:max-w-lg text-sm sm:text-base" >
        {t('firstContent.paragraph')}
      </p >
    </div >
  );
}