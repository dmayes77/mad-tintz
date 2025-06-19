import { RiEyeOffLine, RiShieldUserLine } from "react-icons/ri";
import CloudImage from "@/components/ui/CloudImage";

export default function FeatureSectionLayout102() {
  return (
    <section className="relative py-12 laptop:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 px-6">
        {/* Text Content */}
        <div className="flex-1 flex flex-col laptop:flex-row gap-8">
          <div className="flex-1">
            <h2 className=" font-extrabold text-gray-900">
              Unmatched Privacy and Security
              <br />
              with Our Residential Window Tinting Solutions
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 mb-6">
              Transform your home into a private sanctuary while enhancing
              security. Our premium window tinting adds style and protects your
              family from harmful UV rays.
            </p>

            <div className="flex flex-row gap-8">
              <div className="flex flex-col items-start gap-2">
                <RiEyeOffLine className="text-5xl text-accent" />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Enhanced Privacy
                  </h3>
                  <p className="text-gray-600">
                    Enjoy peace of mind with reduced visibility from the
                    outside.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <RiShieldUserLine className="text-5xl text-accent" />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Increased Security
                  </h3>
                  <p className="text-gray-600">
                    Protect your home against break-ins with our durable window
                    films.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative w-full overflow-hidden rounded-2xl shadow-xl">
          <CloudImage
            publicId="mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8"
            alt="Residential window tint example"
            ratio={2 / 1}
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
