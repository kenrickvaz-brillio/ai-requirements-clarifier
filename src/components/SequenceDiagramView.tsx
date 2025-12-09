import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface SequenceDiagramViewProps {
    diagram: string;
}

export const SequenceDiagramView: React.FC<SequenceDiagramViewProps> = ({ diagram }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            sequence: {
                diagramMarginX: 50,
                diagramMarginY: 10,
                actorMargin: 50,
                width: 150,
                height: 65,
                boxMargin: 10,
                boxTextMargin: 5,
                noteMargin: 10,
                messageMargin: 35,
            },
        });

        if (containerRef.current) {
            containerRef.current.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'mermaid';
            div.textContent = diagram;
            containerRef.current.appendChild(div);

            mermaid.run({
                nodes: [div],
            });
        }
    }, [diagram]);

    return (
        <div className="bg-white rounded-lg p-6 border border-slate-200 overflow-x-auto">
            <div ref={containerRef} className="flex justify-center"></div>
        </div>
    );
};
