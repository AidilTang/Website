import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Home, Info, Database, Image, Zap, Briefcase, FileText, Mail } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (menuId, e) => {
    e.preventDefault();
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const MenuItem = ({ href, icon, label, hasSubmenu, menuId, children }) => {
    const Icon = icon;
    const isExpanded = expandedMenus[menuId];
    
    return (
      <li className={`py-1 ${hasSubmenu ? 'has-submenu' : ''}`}>
        <a 
          href={href}
          onClick={hasSubmenu ? (e) => toggleSubmenu(menuId, e) : undefined}
          className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900"
          aria-expanded={hasSubmenu ? isExpanded : undefined}
          aria-controls={hasSubmenu ? `submenu-${menuId}` : undefined}
        >
          {icon && <Icon className="mr-2 h-4 w-4" />}
          <span className="flex-grow">{label}</span>
          {hasSubmenu && (
            isExpanded ? 
              <ChevronDown className="h-4 w-4" /> : 
              <ChevronRight className="h-4 w-4" />
          )}
        </a>
        {hasSubmenu && isExpanded && (
          <ul 
            id={`submenu-${menuId}`}
            className="pl-6 mt-1 space-y-1 submenu"
            role="menu"
          >
            {children}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div 
      className={`sidebar transition-all duration-300 bg-white shadow-lg h-full ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
      aria-hidden={!isOpen}
      role="navigation"
    >
      <div className="p-4 border-b logo">
        <h1 className="text-xl font-bold text-blue-600">EBDESK</h1>
      </div>
      
      <ul className="menu p-2 space-y-1">
        <MenuItem href="#top" icon={Home} label="Home" />
        <MenuItem href="#about" icon={Info} label="About Us" />
        <MenuItem href="#data-sources" icon={Database} label="Data Sources" />
        <MenuItem href="#multimodal" icon={Image} label="Multimodal" />
        <MenuItem href="#gen-ai-potential" icon={Zap} label="Generative AI" />
        
        <MenuItem 
          href="#use-cases" 
          icon={Briefcase} 
          label="Use Cases" 
          hasSubmenu={true} 
          menuId="use-cases"
        >
          <MenuItem href="#media-intelligence" label="Media Intelligence" />
          <MenuItem href="#information-warfare" label="Information Warfare" />
          
          <MenuItem 
            href="#government-intelligence" 
            label="Government Intelligence" 
            hasSubmenu={true} 
            menuId="gov-intel"
          >
            <MenuItem href="#geostrategic-intelligence" label="Geostrategic Intelligence" />
            <MenuItem href="#territorial-intelligence" label="Territorial Intelligence" />
            <MenuItem href="#political-intelligence" label="Political Intelligence" />
          </MenuItem>
          
          <MenuItem 
            href="#business-excellence" 
            label="Business Excellence" 
            hasSubmenu={true} 
            menuId="business"
          >
            <MenuItem href="#business-excellence" label="Market Intelligence" />
            <MenuItem href="#business-excellence" label="Risk Management" />
          </MenuItem>
        </MenuItem>
        
        <MenuItem href="#data-center" icon={FileText} label="Data Center AI Assistant" />
        <MenuItem href="#contact" icon={Mail} label="Contact Us" />
      </ul>
    </div>
  );
};

export default Sidebar;