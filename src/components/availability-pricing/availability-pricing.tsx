"use client";

import { useWarehouseConfig } from "@/hooks/use-warehouse-config";
import { useUITranslations } from "@/hooks/use-warehouse-config";
import { CheckCircle2, Calendar, DollarSign, FileText } from "lucide-react";
import { trackButtonClick } from "@/utils/button-tracking";

export default function AvailabilityPricing() {
  const warehouseConfig = useWarehouseConfig();
  const t = useUITranslations();
  const availability = warehouseConfig.availability;

  return (
    <section className="py-16 lg:py-24" id="availability">
      <div className="container  xl:max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl mb-3  md:mb-6 text-[#173C65] fw-bold font-libre ">
            {t('availability.title')}
          </h2>
          <p className="text-sm  md:text-base text-gray-600 md:max-w-3xl w-[94%] mx-auto leading-relaxed font-['Assistant',sans-serif]">
            {t('availability.subtitle')}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl  md:p-6 p-5 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
            {/* Availability Status */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-gray-300 h-full">
              <div className="md:w-16 md:h-16 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-base font-bold mb-2"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {availability.status}
              </h3>
              <p
                className="text-sm md:text-base text-gray-600 flex-grow"
                style={{
                  fontFamily: "Assistant, sans-serif",
                }}
              >
                {availability.statusText}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-300 h-full">
              <div
                className="md:w-16 md:h-16 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#173C65" }}
              >
                <DollarSign className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-base font-bold mb-2"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {availability.pricing}
              </h3>
              <p
                className="text-sm md:text-base text-gray-600 flex-grow"
                style={{
                  fontFamily: "Assistant, sans-serif",
                }}
              >
                {availability.pricingModel}
              </p>
            </div>

            {/* Lease Terms */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300 h-full">
              <div
                className="md:w-16 md:h-16 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#173C65" }}
              >
                <Calendar className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-base font-bold mb-2"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {t('availability.leaseTerms')}
              </h3>
              <p
                className="text-sm md:text-base text-gray-600 flex-grow"
                style={{
                  fontFamily: "Assistant, sans-serif",
                }}
              >
                {availability.leaseTerms}
              </p>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300 h-full">
              <div
                className="md:w-16 md:h-16 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#173C65" }}
              >
                <FileText className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-basefont-bold mb-2 text-center"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {t('availability.getQuote')}
              </h3>
              <a
                href="#contact"
                onClick={() => trackButtonClick('availability-contact-cta')}
                className="px-6 py-2 rounded-lg text-wrap hover:-translate-y-1 font-semibold text-sm font-['Assistant',sans-serif] border-2  bg-[#173C65] text-white text-center transition-all duration-300  hover:-translate-y-1 hover:shadow-lg"
                suppressHydrationWarning
              >
                {t('availability.contactUs')}
              </a>
            </div>
          </div>

          {/* Available areas & modules - enhanced layout like reference */}
          {availability.availableAreas && availability.modules && (
            <div className="mt-8 lg:mt-10 pt-8 lg:pt-10 border-t-2 border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                {/* Available areas - 3 points with blue bullets, same black text */}
                <div>
                  <h3
                    className="md:text-xl text-base font-bold mb-4"
                    style={{
                      color: "#173C65",
                      fontFamily: "Libre Baskerville, Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {t('availability.availableAreasTitle')}
                  </h3>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#173C65" }} aria-hidden />
                      <span className="text-sm md:text-base leading-relaxed text-black" style={{ fontFamily: "Assistant, sans-serif" }}>
                        {availability.availableAreas.summary}
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#173C65" }} aria-hidden />
                      <span className="text-sm md:text-base leading-relaxed text-black" style={{ fontFamily: "Assistant, sans-serif" }}>
                        {availability.availableAreas.subdividable}
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#173C65" }} aria-hidden />
                      <span className="text-sm md:text-base leading-relaxed text-black" style={{ fontFamily: "Assistant, sans-serif" }}>
                        {availability.availableAreas.note}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Available modules - building blocks with left accent */}
                <div>
                  <h3
                    className="md:text-xl text-base font-bold mb-4"
                    style={{
                      color: "#173C65",
                      fontFamily: "Libre Baskerville, Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {t('availability.availableModulesTitle')}
                  </h3>
                  <ul className="space-y-5">
                    {availability.modules.map((mod: { id: string; sqm: string; availability: string }) => {
                      const isImmediate = mod.availability.toLowerCase().includes('immediate') || mod.availability.toLowerCase().includes('inmediat');
                      return (
                        <li
                          key={mod.id}
                          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pl-4 border-l-4 border-[#173C65] py-1"
                          style={{ fontFamily: "Assistant, sans-serif" }}
                        >
                          <div>
                            <p
                              className="md:text-lg text-base font-bold mt-0.5 mb-0.5"
                              style={{ color: "#173C65", fontFamily: "Libre Baskerville, Georgia, serif", fontWeight: 600 }}
                            >
                              Module {mod.id}
                            </p>
                            <p
                              className="text-sm md:text-3xl font-bold mt-0.5"
                              style={{ color: "#173C65", fontFamily: "Assistant, sans-serif" }}
                            >
                              {mod.sqm} m²
                            </p>
                          </div>
                          <div className="sm:text-right sm:shrink-0">
                            {isImmediate ? (
                              <span
                                className="inline-block px-2 py-0 rounded-full text-sm md:text-sm font-semibold border-2"
                                style={{
                                  color: "#173C65",
                                  borderColor: "#173C65",
                                  backgroundColor: "rgba(23, 60, 101, 0.08)",
                                  fontFamily: "Assistant, sans-serif",
                                }}
                              >
                                {mod.availability.toUpperCase()}
                              </span>
                            ) : (
                              <span className="text-sm md:text-base text-gray-600" style={{ fontFamily: "Assistant, sans-serif" }}>
                                {mod.availability}
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
