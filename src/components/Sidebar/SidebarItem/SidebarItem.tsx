function SidebarItem({
  icon,
  label,
  isOpen,
}: {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
}) {
  return (
    <>
      <div className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-800">
        {icon}
        {isOpen && <span>{label}</span>}
      </div>
    </>
  );
}

export default SidebarItem;
