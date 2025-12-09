import React from 'react';

export const LoadingSkeleton: React.FC = () => {
    return (
        <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="card">
                    <div className="skeleton h-6 w-48 mb-4"></div>
                    <div className="space-y-3">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-5/6"></div>
                        <div className="skeleton h-4 w-4/6"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};
