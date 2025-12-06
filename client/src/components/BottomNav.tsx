import clsx from 'clsx';
import { Home, Search, Trash2, User } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const BottomNav: React.FC = () => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pb-safe z-40">
            <div className="flex justify-around items-center h-16">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        clsx(
                            'flex flex-col items-center justify-center w-full h-full space-y-1',
                            isActive ? 'text-primary dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        )
                    }
                >
                    <Home className="w-6 h-6" />
                    <span className="text-xs font-medium">Files</span>
                </NavLink>

                {/* Search could be a modal trigger or separate page, keeping as mock for now or linking to search page if it existed */}
                <button
                    className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => {
                        // Focus search input in header or open search modal
                        document.querySelector<HTMLInputElement>('input[type="text"]')?.focus();
                    }}
                >
                    <Search className="w-6 h-6" />
                    <span className="text-xs font-medium">Search</span>
                </button>

                <NavLink
                    to="/trash"
                    className={({ isActive }) =>
                        clsx(
                            'flex flex-col items-center justify-center w-full h-full space-y-1',
                            isActive ? 'text-primary dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        )
                    }
                >
                    <Trash2 className="w-6 h-6" />
                    <span className="text-xs font-medium">Trash</span>
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        clsx(
                            'flex flex-col items-center justify-center w-full h-full space-y-1',
                            isActive ? 'text-primary dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        )
                    }
                >
                    <User className="w-6 h-6" />
                    <span className="text-xs font-medium">Profile</span>
                </NavLink>
            </div>
        </nav>
    );
};
