import { useState } from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import { CheckSquare, Folder, Home, Menu } from 'lucide-react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <aside
        className={`h-screen bg-gray-800/50 text-gray-100 transition-all durantion-300 ${isOpen ? 'w-64' : 'w-16'}`}
      >
        <div className="flex items-center justify-between p-4">
          {isOpen && <span className="font-bold">DevControl</span>}
        </div>
        {/* Menu */}
        <nav className="mt-4 space-y-1">
          <SidebarItem
            className="font-bold"
            icon={<Menu size={20} />}
            label={isOpen ? 'DevControl' : ''}
            isOpen={isOpen}
            element={
              <button onClick={() => setIsOpen(!isOpen)}>
                <Menu size={20} />
              </button>
            }
          />

          <SidebarItem
            icon={<Home size={20} />}
            label="Dashboard"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<CheckSquare size={20} />}
            label="Tarefas"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<Folder size={20} />}
            label="Projetos"
            isOpen={isOpen}
          />
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
