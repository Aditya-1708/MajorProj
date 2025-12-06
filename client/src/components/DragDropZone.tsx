import { UploadCloud } from 'lucide-react';
import React from 'react';
import { useDropzone } from 'react-dropzone';

interface DragDropZoneProps {
    onUpload: (files: File[]) => void;
    children: React.ReactNode;
    disabled?: boolean;
}

export const DragDropZone: React.FC<DragDropZoneProps> = ({ onUpload, children, disabled }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                onUpload(acceptedFiles);
            }
        },
        noClick: true, // Disable click to upload on the container, we have a button for that
        noKeyboard: true,
        disabled
    });

    return (
        <div {...getRootProps()} className="h-full relative outline-none ring-0">
            <input {...getInputProps()} />

            {children}

            {isDragActive && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-blue-50/90 dark:bg-blue-900/50 backdrop-blur-sm border-2 border-dashed border-primary rounded-xl m-4 transition-all">
                    <div className="flex flex-col items-center animate-bounce">
                        <UploadCloud className="w-16 h-16 text-primary mb-4" />
                        <p className="text-xl font-bold text-primary">Drop files to upload</p>
                    </div>
                </div>
            )}
        </div>
    );
};
