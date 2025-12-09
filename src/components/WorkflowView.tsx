import React from 'react';
import { User, Cpu } from 'lucide-react';
import type { WorkflowStep } from '../data/sampleData';

interface WorkflowViewProps {
    workflows: WorkflowStep[];
}

export const WorkflowView: React.FC<WorkflowViewProps> = ({ workflows }) => {
    return (
        <div className="space-y-4">
            {workflows.map((workflow, index) => (
                <div key={workflow.id} className="relative">
                    <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 text-white flex items-center justify-center font-semibold shadow-md">
                                {workflow.step}
                            </div>
                            {index < workflows.length - 1 && (
                                <div className="w-0.5 h-12 bg-gradient-to-b from-primary-300 to-indigo-300 my-2"></div>
                            )}
                        </div>

                        <div className="flex-1 pb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-slate-800">{workflow.title}</h4>
                                <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                    {workflow.actor === 'User' ? <User size={12} /> : <Cpu size={12} />}
                                    {workflow.actor}
                                </span>
                            </div>
                            <p className="text-slate-600 text-sm">{workflow.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
