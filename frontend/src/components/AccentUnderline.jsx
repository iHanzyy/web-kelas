export default function AccentUnderline({ label, percent = 0, className = '' }) {
  const safePercent = Math.min(100, Math.max(0, percent));

  return (
    <div className={`relative w-fit flex pb-2 ${className}`}>        
      {/* Text content */}
      <div className="relative z-10 font-poppins-extrabold">
        {label}
      </div>

      {/* Underline track matches text width */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#205759] rounded overflow-hidden">
        {/* Fluid filled portion based on percent */}
        <div
          className="absolute inset-y-0 left-0 transition-all duration-300 ease-in-out bg-[#2ddcdc]"
          style={{ width: `${safePercent}%` }}
        />
      </div>
    </div>
  );
}