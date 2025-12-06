import { LogOut, Menu, Search } from 'lucide-react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
    onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const { logout, user } = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchParams(prev => {
            if (query) {
                prev.set('search', query);
            } else {
                prev.delete('search');
            }
            return prev;
        });
    };

    return (
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-3 flex-1 max-w-2xl">
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search in Drive..."
                        value={searchParams.get('search') || ''}
                        onChange={handleSearch}
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary rounded-lg transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 ml-4">
                <div className="text-sm text-right hidden sm:block">
                    <div className="font-medium text-gray-700 dark:text-gray-200">{user?.email}</div>
                </div>
                <button
                    onClick={logout}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    title="Logout"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};
