import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleSectionProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    icon,
    children,
    defaultOpen = true,
}) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    return (
        <div className="card animate-slide-up">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left group"
            >
                <div className="section-header mb-0">
                    <span className="text-primary-600">{icon}</span>
                    <span>{title}</span>
                </div>
                <div className="text-slate-400 group-hover:text-slate-600 transition-colors">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>

            {isOpen && (
                <div className="mt-4 animate-fade-in">
                    {children}
                </div>
            )}
        </div>
    );
};
