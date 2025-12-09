import React from 'react';
import { FlaskConical, ListChecks } from 'lucide-react';
import type { TestCase } from '../data/sampleData';

interface TestCasesViewProps {
    testCases: TestCase[];
}

const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-green-100 text-green-700 border-green-200',
};

export const TestCasesView: React.FC<TestCasesViewProps> = ({ testCases }) => {
    return (
        <div className="space-y-4">
            {testCases.map((testCase) => (
                <div
                    key={testCase.id}
                    className="border border-slate-200 rounded-lg p-5 bg-gradient-to-br from-white to-slate-50 hover:shadow-md transition-shadow"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <FlaskConical className="text-primary-600" size={18} />
                            <h4 className="font-semibold text-slate-800">{testCase.title}</h4>
                        </div>
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${priorityColors[testCase.priority]}`}>
                            {testCase.priority}
                        </span>
                    </div>

                    <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                            <ListChecks size={16} className="text-slate-500" />
                            <span className="text-sm font-medium text-slate-700">Steps:</span>
                        </div>
                        <ol className="space-y-1.5 ml-6">
                            {testCase.steps.map((step, index) => (
                                <li key={index} className="text-sm text-slate-600 list-decimal">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                        <span className="text-sm font-medium text-slate-700">Expected Result:</span>
                        <p className="text-sm text-slate-600 mt-1 bg-green-50 border border-green-200 rounded p-2">
                            {testCase.expectedResult}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
