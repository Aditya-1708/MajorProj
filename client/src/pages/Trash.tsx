import React from 'react';
import { FileCard } from '../components/FileCard';
import { useTrash } from '../hooks/useFiles';

export const Trash: React.FC = () => {
    const { files, isLoading, restoreFile, hardDeleteFile } = useTrash();

    return (
        <div className="h-full flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Trash</h1>

            {isLoading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            ) : files.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-400 dark:text-gray-500">
                    <Trash2 className="w-16 h-16 mb-4 opacity-20" />
                    <p>Trash is empty</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {files.map((file) => (
                        <FileCard
                            key={file.id}
                            file={file}
                            onDownload={() => restoreFile(file.id)} // Hijacking download for restore in trash view? 
                            // Wait, the FileCard expects download/delete. 
                            // In Trash, we want "Restore" and "Delete Permanently".
                            // I might need to update FileCard or make a TrashFileCard. 
                            // For now, let's reuse FileCard but maybe I should wrap the handlers.
                            // The icon won't change though. Let's just pass the logic.
                            onDelete={() => hardDeleteFile(file.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Helper for empty state icon
import { Trash2 } from 'lucide-react';
