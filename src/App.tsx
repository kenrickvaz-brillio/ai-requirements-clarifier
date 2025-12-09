import { useState } from 'react';
import {
  Sparkles,
  FileText,
  GitBranch,
  FlaskConical,
  Network,
  Code2,
  RefreshCw,
  Wand2
} from 'lucide-react';
import { CollapsibleSection } from './components/CollapsibleSection';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { AcceptanceCriteriaView } from './components/AcceptanceCriteriaView';
import { WorkflowView } from './components/WorkflowView';
import { TestCasesView } from './components/TestCasesView';
import { SequenceDiagramView } from './components/SequenceDiagramView';
import { APIContractsView } from './components/APIContractsView';
import { sampleOutput } from './data/sampleData';
import './index.css';

const SAMPLE_USER_STORY = `As a user, I want to be able to log into the application using my email and password so that I can access my personalized dashboard and account information.

The login process should be secure, validate my credentials, and provide clear feedback if authentication fails.`;

function App() {
  const [userStory, setUserStory] = useState(SAMPLE_USER_STORY);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    setHasGenerated(false);

    // Simulate AI processing with 1.5 second delay
    setTimeout(() => {
      setIsLoading(false);
      setHasGenerated(true);
    }, 1500);
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary-500 to-indigo-600 p-2.5 rounded-lg shadow-lg">
              <Sparkles className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                AI Requirements Clarifier
              </h1>
              <p className="text-sm text-slate-600">
                Transform user stories into comprehensive technical specifications
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Input */}
          <div className="space-y-6">
            <div className="card">
              <div className="section-header">
                <FileText className="text-primary-600" size={22} />
                <span>User Story Input</span>
              </div>

              <textarea
                value={userStory}
                onChange={(e) => setUserStory(e.target.value)}
                placeholder="Paste your user story here..."
                className="w-full h-64 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none font-mono text-sm text-slate-700 bg-slate-50"
              />

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleGenerate}
                  disabled={isLoading || !userStory.trim()}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <Wand2 size={18} />
                  {isLoading ? 'Generating...' : 'Generate Requirements'}
                </button>

                {hasGenerated && !isLoading && (
                  <button
                    onClick={handleRegenerate}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <RefreshCw size={18} />
                    Regenerate
                  </button>
                )}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-200 rounded-lg p-5">
              <h3 className="font-semibold text-primary-900 mb-2 flex items-center gap-2">
                <Sparkles size={18} />
                How it works
              </h3>
              <ul className="space-y-2 text-sm text-primary-800">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Enter your user story in the text area above</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Click "Generate Requirements" to analyze</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Review AI-generated acceptance criteria, workflows, test cases, and more</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Use "Regenerate" to refine the output</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            {!hasGenerated && !isLoading && (
              <div className="card text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-full mb-4">
                  <Sparkles className="text-primary-600" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Ready to Generate
                </h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Enter your user story and click "Generate Requirements" to see AI-powered analysis
                </p>
              </div>
            )}

            {isLoading && <LoadingSkeleton />}

            {hasGenerated && !isLoading && (
              <div className="space-y-6">
                {/* Acceptance Criteria */}
                <CollapsibleSection
                  title="Acceptance Criteria"
                  icon={<FileText size={20} />}
                >
                  <AcceptanceCriteriaView criteria={sampleOutput.acceptanceCriteria} />
                </CollapsibleSection>

                {/* Workflows */}
                <CollapsibleSection
                  title="User Workflows"
                  icon={<GitBranch size={20} />}
                >
                  <WorkflowView workflows={sampleOutput.workflows} />
                </CollapsibleSection>

                {/* Test Cases */}
                <CollapsibleSection
                  title="Test Cases"
                  icon={<FlaskConical size={20} />}
                >
                  <TestCasesView testCases={sampleOutput.testCases} />
                </CollapsibleSection>

                {/* Sequence Diagram */}
                <CollapsibleSection
                  title="Sequence Diagram"
                  icon={<Network size={20} />}
                >
                  <SequenceDiagramView diagram={sampleOutput.sequenceDiagram} />
                </CollapsibleSection>

                {/* API Contracts */}
                <CollapsibleSection
                  title="API Contracts"
                  icon={<Code2 size={20} />}
                >
                  <APIContractsView contracts={sampleOutput.apiContracts} />
                </CollapsibleSection>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center text-sm text-slate-600">
            <p>
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Demo uses static sample data • No backend required
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
