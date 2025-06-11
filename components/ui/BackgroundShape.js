export default function BackgroundShape({ children }) {
  return (
    <div className="relative bg-gradient-to-b from-[#F0FDF4] via-transparent to-[#F0FDF4] py-16 ">
      <div className="hidden laptop:block absolute inset-y-0 left-0 w-1/2">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 600 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,0 L600,800 L0,800 L0,0 Z"
            fill="#F0FDF4" /* adjust to a very light green/gray if you want */
            opacity={0.7}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
