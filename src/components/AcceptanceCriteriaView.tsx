import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { AcceptanceCriteria } from '../data/sampleData';

interface AcceptanceCriteriaViewProps {
    criteria: AcceptanceCriteria[];
}

const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-green-100 text-green-700 border-green-200',
};

export const AcceptanceCriteriaView: React.FC<AcceptanceCriteriaViewProps> = ({ criteria }) => {
    return (
        <div className="space-y-3">
            {criteria.map((item) => (
                <div
                    key={item.id}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary-300 transition-colors"
                >
                    <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                    <div className="flex-1">
                        <p className="text-slate-700">{item.description}</p>
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${priorityColors[item.priority]}`}>
                        {item.priority}
                    </span>
                </div>
            ))}
        </div>
    );
};
