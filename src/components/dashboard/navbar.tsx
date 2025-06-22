export const DashboardNavbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-sm border-r border-gray-200 z-50 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Foresia
        </div>
      </div>
      <div className="flex-1 p-4">
        {/* Navigation items can be added here */}
      </div>
    </nav>
  );
};