# AI Requirements Clarifier

A beautiful, responsive frontend demo that transforms user stories into comprehensive technical specifications using static sample data.

**[Live Demo](https://zealous-sky-02da3fd1e.6.azurestaticapps.net)**

![AI Requirements Clarifier](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)

## ✨ Features

- **Clean, Modern UI**: Lovable-style design with smooth animations and transitions
- **Responsive Layout**: Two-panel desktop layout, stacked mobile layout
- **Five Output Sections**:
  - 📋 Acceptance Criteria with priority badges
  - 🔄 User Workflows with step-by-step visualization
  - 🧪 Test Cases with detailed steps and expected results
  - 📊 Sequence Diagrams using Mermaid
  - 🔌 API Contracts with JSON schemas
- **Collapsible Sections**: Expand/collapse each output section
- **Loading States**: Elegant skeleton loading for 1.5 seconds
- **Regenerate Function**: Refresh outputs with the same static data
- **No Backend Required**: 100% frontend-only demo

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **Tailwind CSS** for styling
- **Mermaid** for sequence diagrams
- **Lucide React** for beautiful icons

## 📁 Project Structure

```
ai-requirements-clarifier/
├── src/
│   ├── components/
│   │   ├── AcceptanceCriteriaView.tsx
│   │   ├── APIContractsView.tsx
│   │   ├── CollapsibleSection.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   ├── SequenceDiagramView.tsx
│   │   ├── TestCasesView.tsx
│   │   └── WorkflowView.tsx
│   ├── data/
│   │   └── sampleData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

## 🎯 Usage

1. **Enter User Story**: Paste or type your user story in the left panel
2. **Generate**: Click "Generate Requirements" to see AI-powered analysis
3. **Review**: Explore the five generated sections in the right panel
4. **Regenerate**: Click "Regenerate" to refresh the output

## 🎨 Design Features

- **Premium Aesthetics**: Gradient backgrounds, smooth shadows, and modern color palette
- **Micro-animations**: Fade-in, slide-up, and hover effects
- **Typography**: Inter font family for clean, professional look
- **Color System**: Primary blue/indigo gradient with semantic colors
- **Responsive**: Mobile-first design that adapts to all screen sizes

## 📝 Sample Data

The demo includes pre-filled sample data for a user login story:

- 7 Acceptance Criteria items
- 7 Workflow steps
- 5 Test Cases
- 1 Sequence Diagram
- 3 API Contract endpoints

All data is defined in `src/data/sampleData.ts` and can be easily customized.

## 🔧 Customization

### Modify Sample Data

Edit `src/data/sampleData.ts` to change the static output data.

### Adjust Styling

- Colors: `tailwind.config.js`
- Component styles: `src/index.css`
- Layout: Individual component files

### Change Loading Duration

In `src/App.tsx`, modify the timeout value:

```typescript
setTimeout(() => {
  setIsLoading(false);
  setHasGenerated(true);
}, 1500); // Change this value (in milliseconds)
```

## 🌟 Key Components

### CollapsibleSection
Reusable component for expandable/collapsible content sections.

### LoadingSkeleton
Animated skeleton loader displayed during generation.

### AcceptanceCriteriaView
Displays acceptance criteria with priority badges.

### WorkflowView
Step-by-step workflow visualization with actor indicators.

### TestCasesView
Test cases with steps, expected results, and priorities.

### SequenceDiagramView
Mermaid-based sequence diagram renderer.

### APIContractsView
API endpoint documentation with request/response schemas.

## 📄 License

MIT License - feel free to use this project for any purpose.

## 🙏 Acknowledgments

- Design inspired by Lovable demos
- Icons by Lucide
- Diagrams powered by Mermaid

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
