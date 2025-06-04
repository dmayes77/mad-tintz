"use client";

export default function AboutPage() {
  return (
    <div className="w-full mx-auto space-y-6">
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto p-6 text-primary-foreground">
          <h1 className="text-3xl font-bold text-left uppercase">About</h1>
          <p className="text-xl font-bold text-left">MAD TINTZ</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 text-gray-700 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">About</h2>
          <p>
            <strong>MAD Tintz</strong> offers professional{" "}
            <strong>mobile window tinting</strong> services in Chattanooga, TN.
            We specialize in <strong>automotive</strong>,{" "}
            <strong>residential</strong>, and <strong>commercial tint</strong>,
            bringing the convenience of expert tinting directly to you. Our
            mission is to deliver clean, legal, and stylish results — all
            without you ever leaving your driveway or job site.
          </p>
          <p className="mt-2">
            Whether you're searching for{" "}
            <strong>window tinting Chattanooga</strong>,{" "}
            <strong>window tint near me</strong>, or high-quality ceramic films
            installed at your location, MAD Tintz is the name to trust.
          </p>
        </div>

        <div className="flex flex-col laptop:flex-row gap-8 max-w-7xl mx-auto">
          {/* Column 1 */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Year Established</h2>
              <p>2025</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="list-disc list-inside">
                <li>Automotive Window Tinting</li>
                <li>Residential Window Film</li>
                <li>Commercial Flat Glass Tint</li>
                <li>Heat Rejection Film</li>
                <li>Privacy and Decorative Film</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Specialties</h2>
              <ul className="list-disc list-inside">
                <li>Mobile Window Tinting Services</li>
                <li>Ceramic and Carbon Film Installation</li>
                <li>Glare & UV Reduction</li>
                <li>Legal Compliance Expertise</li>
                <li>Precision Cuts with Computer-Cut Software</li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Business Hours</h2>
              <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Associations</h2>
              <p>International Window Film Association (IWFA)</p>
              <p>Local Chattanooga Business Network</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Payment Options</h2>
              <ul className="list-disc list-inside">
                <li>American Express</li>
                <li>Cash</li>
                <li>Check</li>
                <li>Discover</li>
                <li>MasterCard</li>
                <li>Visa</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Languages</h2>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
