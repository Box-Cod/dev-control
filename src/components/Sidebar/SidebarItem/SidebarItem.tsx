function SidebarItem({
  icon,
  label,
  isOpen,
  element,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  element?: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div
        className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-800 ${className}`}
      >
        {icon}
        {isOpen && <span>{label}</span>}
        {element}
      </div>
    </>
  );
}

export default SidebarItem;
