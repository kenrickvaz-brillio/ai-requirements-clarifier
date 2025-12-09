import React from 'react';
import { Code2, Send } from 'lucide-react';
import type { APIContract } from '../data/sampleData';

interface APIContractsViewProps {
    contracts: APIContract[];
}

const methodColors: Record<string, string> = {
    GET: 'bg-blue-100 text-blue-700 border-blue-200',
    POST: 'bg-green-100 text-green-700 border-green-200',
    PUT: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    DELETE: 'bg-red-100 text-red-700 border-red-200',
};

export const APIContractsView: React.FC<APIContractsViewProps> = ({ contracts }) => {
    return (
        <div className="space-y-6">
            {contracts.map((contract, index) => (
                <div
                    key={index}
                    className="border border-slate-200 rounded-lg overflow-hidden bg-white"
                >
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 text-xs font-bold rounded border ${methodColors[contract.method]}`}>
                                {contract.method}
                            </span>
                            <code className="text-sm font-mono text-slate-700 bg-white px-3 py-1 rounded border border-slate-200">
                                {contract.endpoint}
                            </code>
                        </div>
                        <p className="text-sm text-slate-600">{contract.description}</p>
                    </div>

                    <div className="p-4 space-y-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Send size={16} className="text-primary-600" />
                                <h5 className="font-semibold text-slate-800 text-sm">Request Schema</h5>
                            </div>
                            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                                {JSON.stringify(contract.requestSchema, null, 2)}
                            </pre>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Code2 size={16} className="text-primary-600" />
                                <h5 className="font-semibold text-slate-800 text-sm">Response Schema</h5>
                            </div>
                            <pre className="bg-slate-900 text-blue-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                                {JSON.stringify(contract.responseSchema, null, 2)}
                            </pre>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
