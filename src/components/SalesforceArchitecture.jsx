import React, { useState } from 'react';

// Helper function to represent the Python BaseNode/Flow system concepts
// This reiterates that the provided documents already detail TypeScript versions for the IDE.
const FlowSystemExplanation = () => {
  return (
    <div className="p-4 my-6 bg-gray-100 rounded-lg shadow">
      <h4 className="font-bold text-lg mb-2 text-gray-800">Regarding the Provided Python Flow System Code:</h4>
      <p className="text-gray-700 mb-2">
        The Python code you provided for <code>BaseNode</code>, <code>Flow</code>, <code>AsyncNode</code>, etc., outlines a sophisticated, extensible framework for task orchestration. These concepts are fundamental to the Salesforce AI IDE's architecture.
      </p>
      <p className="text-gray-700 mb-2">
        It's important to note that while Python code itself isn't directly executable within a React (JavaScript/TypeScript) frontend, the architectural patterns and logic from this Python system are mirrored and implemented in **TypeScript** within the backend and extension logic of the Salesforce AI IDE.
      </p>
      <p className="text-gray-700 mb-2">
        The documents you've uploaded, specifically "Detailed Architecture & Implementation Plan.txt" and "salesforce-ai-ide-detailed.md", contain extensive TypeScript code snippets that are direct adaptations and expansions of this Python flow system. These include classes like <code>BaseNode</code>, <code>Node</code>, <code>Flow</code>, <code>AsyncNode</code>, <code>AsyncFlow</code>, <code>BatchNode</code>, <code>BatchFlow</code>, and their asynchronous/parallel counterparts.
      </p>
      <p className="text-gray-700">
        Therefore, the "Flow System" tab in this application will showcase these TypeScript implementations as described in your documents, demonstrating how those Pythonic concepts are realized in the IDE's actual technology stack.
      </p>
    </div>
  );
};

// Helper for collapsible code/text sections
const CollapsibleSection = ({ title, children, sectionId, expandedSection, toggleSection }) => {
  const isExpanded = expandedSection === sectionId;
  return (
    <div className="mb-4 border border-gray-300 rounded-md">
      <button
        className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
        onClick={() => toggleSection(sectionId)}
      >
        <span className="font-semibold text-gray-700">{title}</span>
        <span>{isExpanded ? '▼ Collapse' : '▶ Expand'}</span>
      </button>
      {isExpanded && (
        <div className="p-4 border-t border-gray-300 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default function SalesforceArchitectureDeepDive() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  const renderIntroduction = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
      <p className="text-gray-700 mb-4">
        This application provides a deep dive into the Salesforce AI IDE, synthesizing information from various architectural documents, implementation plans, and design specifications. It aims to consolidate all provided details into a navigable format.
      </p>
      <p className="text-gray-700 mb-2">
        The content is organized into several key areas:
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-4">
        <li>Overall Architecture & Key Design Principles</li>
        <li>Detailed AI Assistant Architecture</li>
        <li>Flow-Based Task Orchestration System (TypeScript Implementation)</li>
        <li>Package Structure</li>
        <li>Comprehensive Implementation Plan (including bootstrapping)</li>
        <li>User Stories, Epics, and Development Use Cases</li>
        <li>Multi-Agent System Design</li>
      </ul>
      <p className="text-gray-700">
        Due to the extensive nature of the information, this component is quite large. In a production setting, each tab and its detailed subsections would be broken down into individual, manageable React components and files.
      </p>
      <FlowSystemExplanation />
    </div>
  );

  const renderKeyDesignPrinciplesAndArchitecture = () => (
    // Content primarily from SalesforceArchitecture.txt, SalesforceAIIDEArchitecture.txt, salesforce-ai-ide-detailed.md
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Salesforce AI IDE Architecture & Key Design Principles</h2>

      {/* Key Design Principles */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-700">Key Design Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-blue-600 mb-2">Modular Architecture</h4>
            <p className="text-gray-700 text-sm">
              The system is built with a modular approach, allowing components to be developed, tested, and upgraded independently. This promotes separation of concerns, reusability, and maintainability. Key packages (e.g., `salesforce-ide-core`, `ai-service`, `flow-orchestration`) encapsulate distinct functionalities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-purple-600 mb-2">AI-First Design</h4>
            <p className="text-gray-700 text-sm">
              All components are designed with AI integration in mind from the outset, ensuring seamless AI assistance throughout the development lifecycle. AI capabilities are integral, not an add-on.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-green-600 mb-2">Flow-Based Orchestration</h4>
            <p className="text-gray-700 text-sm">
              Complex operations are broken down into discrete, manageable nodes (inspired by the Python flow system and implemented in TypeScript). These nodes are combined into flexible workflows that robustly handle task execution, conditional branching, and error recovery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-red-600 mb-2">User-Controlled Automation</h4>
            <p className="text-gray-700 text-sm">
              While providing powerful AI automation, the system ensures the developer remains in control. Critical actions like file modifications or deployments require explicit user approval at key checkpoints.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-yellow-600 mb-2">Extensibility and Scalability</h4>
            <p className="text-gray-700 text-sm">
              The architecture is designed for future growth, allowing new AI providers, flow nodes, specialized agents, and IDE features to be added with relative ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-indigo-600 mb-2">Contextual Awareness</h4>
            <p className="text-gray-700 text-sm">
              The AI Assistant actively gathers and utilizes context from the current workspace, open files, project structure, and connected Salesforce org to provide relevant, accurate, and targeted assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Overall Architecture Diagram/Layers */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-700">Overall System Architecture Layers</h3>
        <p className="text-gray-600 text-sm mb-4">The Salesforce AI IDE is structured in layers, from the user-facing UI down to the core services and integrations. The following diagram is based on the structure described in `SalesforceArchitecture.txt` and `SalesforceAIIDEArchitecture1.txt`.</p>
        <div className="relative w-full max-w-5xl mx-auto border-2 border-gray-300 rounded-lg p-2 bg-gray-50">
          {/* UI Layer */}
          <div className="bg-blue-100 p-4 rounded-t-lg border-2 border-blue-300 mb-1">
            <div className="font-bold text-center text-blue-800">Theia IDE UI Layer (Frontend)</div>
            <div className="flex mt-2 gap-3 flex-wrap justify-center">
              <div className="bg-white p-2 rounded border border-blue-300 flex-1 min-w-[100px] text-sm text-center">Editor</div>
              <div className="bg-white p-2 rounded border border-blue-300 flex-1 min-w-[100px] text-sm text-center">Explorer</div>
              <div className="bg-white p-2 rounded border border-blue-300 flex-1 min-w-[100px] text-sm text-center">Terminal</div>
              <div className="bg-blue-200 p-2 rounded border border-blue-400 flex-1 min-w-[100px] text-sm text-center font-semibold">AI Assistant Panel</div>
            </div>
          </div>
          {/* Core Controller */}
          <div className="bg-purple-100 p-4 border-l-2 border-r-2 border-purple-300 mb-1">
            <div className="font-bold text-center text-purple-800">Core Controller (Extension Backend)</div>
            <div className="flex mt-2 gap-3 flex-wrap justify-center">
              <div className="bg-white p-2 rounded border border-purple-300 flex-1 min-w-[120px] text-sm text-center">Webview Provider</div>
              <div className="bg-white p-2 rounded border border-purple-300 flex-1 min-w-[120px] text-sm text-center">Message Router</div>
              <div className="bg-white p-2 rounded border border-purple-300 flex-1 min-w-[120px] text-sm text-center">State Manager</div>
            </div>
          </div>
          {/* Flow Orchestration */}
          <div className="bg-green-100 p-4 border-l-2 border-r-2 border-green-300 mb-1">
            <div className="font-bold text-center text-green-800">Flow-Based Task Orchestration</div>
            <div className="flex mt-2 gap-2 flex-wrap justify-center">
              <div className="bg-white p-2 rounded border border-green-300 flex-1 text-xs text-center">Task Nodes</div>
              <div className="bg-white p-2 rounded border border-green-300 flex-1 text-xs text-center">Flow Control</div>
              <div className="bg-white p-2 rounded border border-green-300 flex-1 text-xs text-center">Async Execution</div>
              <div className="bg-white p-2 rounded border border-green-300 flex-1 text-xs text-center">Error Handling</div>
            </div>
          </div>
          {/* Service Layer */}
          <div className="flex flex-col md:flex-row">
            {/* AI Services */}
            <div className="bg-red-100 p-4 flex-1 border-l-2 md:border-b-2 border-t-2 border-red-300 md:rounded-bl-lg">
              <div className="font-bold text-center text-red-800">AI Services</div>
              <div className="mt-2 space-y-2">
                <div className="bg-white p-2 rounded border border-red-300 text-xs">API Providers (OpenAI, Anthropic, etc.)</div>
                <div className="bg-white p-2 rounded border border-red-300 text-xs">Token Management & Budgeting</div>
                <div className="bg-white p-2 rounded border border-red-300 text-xs">Prompt Engineering & Message Parsing</div>
                <div className="bg-white p-2 rounded border border-red-300 text-xs">Multi-Agent Coordination</div>
              </div>
            </div>
            {/* File Operations */}
            <div className="bg-yellow-100 p-4 flex-1 border-l-2 border-b-2 border-t-2 border-yellow-300">
              <div className="font-bold text-center text-yellow-800">File & Workspace Operations</div>
              <div className="mt-2 space-y-2">
                <div className="bg-white p-2 rounded border border-yellow-300 text-xs">File Editor Integration</div>
                <div className="bg-white p-2 rounded border border-yellow-300 text-xs">Checkpoint System (Shadow Git)</div>
                <div className="bg-white p-2 rounded border border-yellow-300 text-xs">Diff View Integration</div>
                <div className="bg-white p-2 rounded border border-yellow-300 text-xs">Workspace Context Tracking</div>
              </div>
            </div>
            {/* Salesforce Integration */}
            <div className="bg-indigo-100 p-4 flex-1 border-2 md:border-l-0 border-indigo-300 md:rounded-br-lg">
              <div className="font-bold text-center text-indigo-800">Salesforce Integration</div>
              <div className="mt-2 space-y-2">
                <div className="bg-white p-2 rounded border border-indigo-300 text-xs">SFDX Operations Wrapper</div>
                <div className="bg-white p-2 rounded border border-indigo-300 text-xs">Metadata API Client</div>
                <div className="bg-white p-2 rounded border border-indigo-300 text-xs">Org Connection & Auth Manager</div>
                <div className="bg-white p-2 rounded border border-indigo-300 text-xs">Apex Execution Service</div>
              </div>
            </div>
          </div>
          {/* Storage Layer */}
          <div className="bg-gray-200 p-4 rounded-b-lg border-2 border-t-0 border-gray-400 mt-0">
            <div className="font-bold text-center text-gray-800">Storage & Persistence</div>
            <div className="flex mt-2 gap-3 flex-wrap justify-center">
              <div className="bg-white p-2 rounded border border-gray-400 flex-1 min-w-[120px] text-sm text-center">Settings Storage (Global/Workspace State)</div>
              <div className="bg-white p-2 rounded border border-gray-400 flex-1 min-w-[120px] text-sm text-center">Task History & Logs (File System)</div>
              <div className="bg-white p-2 rounded border border-gray-400 flex-1 min-w-[120px] text-sm text-center">Secure Credentials (Secrets API)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAiAssistantArchitectureDetailed = () => (
    // Content from SalesforceAIIDEArchitecture1.txt, AI Architecture.txt, Detailed Architecture & Implementation Plan.txt
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">AI Assistant Detailed Architecture</h2>
      <div className="relative w-full max-w-5xl mx-auto p-2">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md border border-blue-200">
          <h3 className="text-xl font-bold mb-5 text-center text-blue-800">AI Assistant Component Architecture</h3>
          {/* Chat UI Layer */}
          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mb-4">
            <div className="font-bold text-center text-blue-700">Chat UI Layer (Frontend - React)</div>
            <div className="flex mt-2 gap-3 flex-wrap justify-around text-xs">
              <div className="bg-white p-2 rounded border border-blue-300">Message Display & Formatting</div>
              <div className="bg-white p-2 rounded border border-blue-300">Input Controls (Text, File Upload)</div>
              <div className="bg-white p-2 rounded border border-blue-300">Action Buttons (Approve/Reject)</div>
              <div className="bg-white p-2 rounded border border-blue-300">History Browser & Navigation</div>
              <div className="bg-white p-2 rounded border border-blue-300">Streaming Response Handler</div>
            </div>
          </div>
          {/* Message Processing Layer */}
          <div className="bg-purple-100 p-4 rounded-lg border border-purple-300 mb-4">
            <div className="font-bold text-center text-purple-700">Message Processing Layer (Controller)</div>
            <div className="flex mt-2 gap-3 flex-wrap justify-around text-xs">
              <div className="bg-white p-2 rounded border border-purple-300">Context Collector (Workspace, Files, Org)</div>
              <div className="bg-white p-2 rounded border border-purple-300">Message Router & Controller</div>
              <div className="bg-white p-2 rounded border border-purple-300">AI Response Parser (Text, Tool Calls, Structured Data)</div>
              <div className="bg-white p-2 rounded border border-purple-300">Conversation History Manager</div>
              <div className="bg-white p-2 rounded border border-purple-300">State Management Integration</div>
            </div>
          </div>
          {/* Flow Orchestration Layer */}
          <div className="bg-green-100 p-4 rounded-lg border border-green-300 mb-4">
            <div className="font-bold text-center text-green-700">Flow Orchestration Layer</div>
            <div className="flex mt-2 gap-2 flex-wrap justify-around text-xs">
              <div className="bg-white p-2 rounded border border-green-300">Task Orchestrator (Flow Engine)</div>
              <div className="bg-white p-2 rounded border border-green-300">Reusable Flow Nodes (AI Call, File Op, SFDC Command)</div>
              <div className="bg-white p-2 rounded border border-green-300">Conditional Branching & Error Handlers</div>
              <div className="bg-white p-2 rounded border border-green-300">Async & Parallel Execution Support</div>
              <div className="bg-white p-2 rounded border border-green-300">Progress Tracking & Reporting</div>
            </div>
          </div>
          {/* Service Layers (AI & Salesforce Integration) */}
          <div className="flex flex-col md:flex-row mb-4 gap-4">
            <div className="bg-red-100 p-4 rounded-lg border border-red-300 flex-1">
              <div className="font-bold text-center text-red-700">AI Service Layer</div>
              <div className="mt-2 space-y-1 text-xs">
                <div className="bg-white p-1 rounded border border-red-300">API Provider Registry (OpenAI, Anthropic, Gemini, Local Models etc.)</div>
                <div className="bg-white p-1 rounded border border-red-300">Token Management (Budgeting, Tracking, Optimization)</div>
                <div className="bg-white p-1 rounded border border-red-300">Request Optimizer & Prompt Formatter</div>
                <div className="bg-white p-1 rounded border border-red-300">Response Stream Handler & Parser</div>
                <div className="bg-white p-1 rounded border border-red-300">MCP Hub Integration for extended capabilities</div>
              </div>
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300 flex-1">
              <div className="font-bold text-center text-indigo-700">Salesforce & Environment Integration Layer</div>
              <div className="mt-2 space-y-1 text-xs">
                <div className="bg-white p-1 rounded border border-indigo-300">Metadata Accessor (Retrieve, Deploy, Describe)</div>
                <div className="bg-white p-1 rounded border border-indigo-300">Apex Execution Service (Anonymous, Test Runner)</div>
                <div className="bg-white p-1 rounded border border-indigo-300">SOQL/SOSL Executor</div>
                <div className="bg-white p-1 rounded border border-indigo-300">Org Connection Manager & Authentication</div>
                <div className="bg-white p-1 rounded border border-indigo-300">SFDX CLI Wrapper</div>
              </div>
            </div>
          </div>
          {/* Execution Layer */}
          <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
            <div className="font-bold text-center text-yellow-700">Execution Layer (Local Environment)</div>
            <div className="flex mt-2 gap-3 flex-wrap justify-around text-xs">
              <div className="bg-white p-2 rounded border border-yellow-300">File Operations (Read, Write, Diff)</div>
              <div className="bg-white p-2 rounded border border-yellow-300">Terminal Command Execution (with approval)</div>
              <div className="bg-white p-2 rounded border border-yellow-300">Checkpoint System (Shadow Git for file versioning)</div>
              <div className="bg-white p-2 rounded border border-yellow-300">Workspace Context Provider</div>
            </div>
          </div>
        </div>
        {/* Token Management Details */}
        <CollapsibleSection title="Detailed Token Management System" sectionId="tokenManagement" expandedSection={expandedSection} toggleSection={toggleSection}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
              <h5 className="font-semibold mb-2 text-gray-700">Token Budgeting & Tracking</h5>
              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                <li>Configurable monthly/daily token budgets per user or workspace.</li>
                <li>Real-time tracking of token usage per session and historically.</li>
                <li>Priority levels for requests to manage usage near budget limits.</li>
                <li>Alerts and notifications for budget thresholds.</li>
                <li>Analytics dashboard providing insights into usage patterns, cost projections, and breakdowns by feature/request type.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-gray-700">Request Optimization Techniques</h5>
              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                <li>Selective context inclusion based on relevance to the query.</li>
                <li>Summarization of long files or documents when appropriate.</li>
                <li>Condensing previous conversation history for long interactions.</li>
                <li>Token estimation before sending requests to AI providers.</li>
                <li>Request splitting for complex tasks that might exceed single context window limits.</li>
                <li>Caching of common responses or context elements where applicable.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-gray-700">Provider Selection & Management</h5>
              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                <li>Support for multiple AI providers (OpenAI, Anthropic, Gemini, Azure OpenAI, Local LLMs via Ollama, OpenRouter, LiteLLM etc.).</li>
                <li>Dynamic provider selection criteria (capabilities, cost, performance, user preference).</li>
                <li>Fallback mechanisms to ensure reliability if a primary provider fails.</li>
                <li>Provider-specific formatters to handle varying API request/response structures.</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>
        {/* AI Architecture Text (from AI Architecture.txt) - if contains distinct info */}
        <CollapsibleSection title="Additional AI Architecture Notes (from AI Architecture.txt)" sectionId="aiArchText" expandedSection={expandedSection} toggleSection={toggleSection}>
          <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[500px]">
            {/* Placeholder - This would be populated with content from AI Architecture.txt if it offers unique perspectives not yet covered.
                Example: Detailed explanation of Webview Provider, Controller, Task Execution, API Providers, MCP Hub, Terminal Management, etc.
                The file 'AI Architecture.txt' appears to be a chapter-by-chapter explanation of an existing system ('cline').
                I will integrate key concepts if they add more detail than the diagrams.
            */}
            <h4 className="font-semibold mb-2">Webview Provider & UI Communication</h4>
            <p>The Webview Provider creates and manages the UI panel within VS Code, loading HTML content (React app) and setting up message channels (`onDidReceiveMessage`, `postMessage`) for frontend-backend communication.</p>

            <h4 className="font-semibold mt-3 mb-2">Controller as Central Hub</h4>
            <p>The Controller receives messages from the Webview, decides actions, manages state/settings by interacting with storage, directs other components (Task executor, API handlers), and sends updates back to the UI.</p>

            <h4 className="font-semibold mt-3 mb-2">Task Execution Lifecycle</h4>
            <p>A `Task` instance manages a single user request: conversation with AI, talking to API providers, executing tools (with user permission), tracking progress, and updating UI via Controller callbacks.</p>

            <h4 className="font-semibold mt-3 mb-2">API Providers Abstraction</h4>
            <p>API Providers (e.g., `AnthropicHandler`, `OpenAiHandler`) implement a standard `ApiHandler` interface, translating requests/responses for specific AI model APIs. This allows the `Task` to interact generically.</p>

            <h4 className="font-semibold mt-3 mb-2">Message Parsing & Formatting</h4>
            <p>Parses AI responses (text, tool calls using XML-like tags) into structured `AssistantMessageContent` (TextContent, ToolUse). Formats system prompts and conversation history for AI input.</p>

             <h4 className="font-semibold mt-3 mb-2">MCP (Model Context Protocol) Hub</h4>
            <p>Manages connections to external MCP Servers that provide additional tools/resources (e.g., web Browse, database access) to the AI.</p>

            <h4 className="font-semibold mt-3 mb-2">Terminal Management</h4>
            <p>Finds/creates VS Code terminals, runs commands (ideally using Shell Integration), monitors output, and signals completion. Uses `TerminalRegistry` and `TerminalProcess`.</p>

            <h4 className="font-semibold mt-3 mb-2">Storage & State Management</h4>
            <p>Uses VS Code `globalState`, `workspaceState`, `secrets` (for API keys), and file storage (`globalStorageUri`) for settings, task history, and detailed conversation logs.</p>

            <h4 className="font-semibold mt-3 mb-2">Checkpoint Tracker</h4>
            <p>Uses a shadow Git repository (in extension storage, worktree pointing to project) to take snapshots (commits) of workspace files before/after AI modifications, allowing diff views and reverts.</p>
          </pre>
        </CollapsibleSection>
      </div>
    </div>
  );

  const renderFlowSystemTypescript = () => (
    // Content from Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md
    // This section will contain the TypeScript code for the flow system.
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Flow-Based Task Orchestration System (TypeScript)</h2>
      <p className="text-gray-700 mb-4">
        The core of task management in the Salesforce AI IDE relies on a flow-based system, implemented in TypeScript. This system enables complex operations to be broken down into a series of manageable, interconnected nodes. Each node represents a discrete step in a larger workflow, promoting modularity, reusability, and robust error handling. The following are the core classes of this system as detailed in the provided architectural documents.
      </p>
      <FlowSystemExplanation/>

      <CollapsibleSection title="BaseNode<T>" sectionId="baseNode" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-sm text-gray-600 mb-2">The fundamental building block representing a single operation unit. It defines lifecycle methods (prep, exec, post) and successor linkage.</p>
        <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[400px]">
{`// Source: Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md
export abstract class BaseNode<T = any> {
  protected params: Record<string, any> = {};
  protected successors: Record<string, BaseNode<T>> = {}; // Corrected: Successors should also be BaseNode<T>
  protected nodeName: string;

  constructor(name?: string) {
    this.nodeName = name || this.constructor.name;
  }

  public setParams(params: Record<string, any>): this {
    this.params = params;
    return this;
  }

  public next<N extends BaseNode<T>>(node: N, action: string = "default"): N {
    if (this.successors[action]) {
      console.warn(\`Overwriting successor for action '\${action}' for node \${this.nodeName}\`);
    }
    this.successors[action] = node;
    return node;
  }

  protected prep(shared: T): any { return undefined; }
  protected exec(prepRes: any): any { return undefined; }
  protected post(shared: T, prepRes: any, execRes: any): string | undefined { return "default"; }

  protected _exec(prepRes: any): any {
    return this.exec(prepRes);
  }

  protected _run(shared: T): string | undefined {
    // In a real scenario, you might want to emit events or log here
    // flowEvents.emit(FlowEventEmitter.NODE_STARTED, this.nodeName);
    try {
      const prepRes = this.prep(shared);
      const execRes = this._exec(prepRes);
      const result = this.post(shared, prepRes, execRes);
      // flowEvents.emit(FlowEventEmitter.NODE_COMPLETED, this.nodeName, result);
      return result;
    } catch (error) {
      // flowEvents.emit(FlowEventEmitter.NODE_FAILED, this.nodeName, error);
      console.error(\`Error in node \${this.nodeName}: \`, error);
      throw error;
    }
  }

  public run(shared: T): string | undefined {
    if (Object.keys(this.successors).length > 0 && !(this instanceof Flow)) { // Added Flow check
      console.warn(\`Node \${this.nodeName} won't run successors. Use Flow or override run().\`);
    }
    return this._run(shared);
  }

  // Using methods instead of direct operator overloads in TypeScript for chaining
  public then<N extends BaseNode<T>>(otherNode: N): N {
    return this.next(otherNode);
  }

  public on(action: string) {
    return {
      then: <N extends BaseNode<T>>(targetNode: N): N => {
        return this.next(targetNode, action);
      }
    };
  }
}

// Helper class for conditional transitions (conceptual, similar to Python's _ConditionalTransition)
// In practice, the 'on(action).then(node)' pattern above or direct use of next() is common.
`}
        </pre>
      </CollapsibleSection>

      <CollapsibleSection title="Node<T>" sectionId="node" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-sm text-gray-600 mb-2">Extends BaseNode with retry logic and error handling, including `execFallback`.</p>
        <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[400px]">
{`// Source: Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md
export class Node<T = any> extends BaseNode<T> {
  private maxRetries: number;
  private waitTime: number; // in milliseconds
  public currentRetry: number = 0; // Made public for potential external insight

  constructor(name?: string, maxRetries: number = 1, waitTime: number = 0) {
    super(name);
    this.maxRetries = maxRetries;
    this.waitTime = waitTime;
  }

  protected execFallback(prepRes: any, error: Error): any {
    console.error(\`Node \${this.nodeName} failed after \${this.maxRetries} retries. Executing fallback.\`, error);
    throw error; // Default is to rethrow
  }

  protected _exec(prepRes: any): any {
    for (this.currentRetry = 0; this.currentRetry < this.maxRetries; this.currentRetry++) {
      try {
        if (this.currentRetry > 0) {
            console.log(\`Node \${this.nodeName}: Retrying execution (attempt \${this.currentRetry + 1}/\${this.maxRetries})\`);
        }
        return this.exec(prepRes);
      } catch (error) {
        console.warn(\`Node \${this.nodeName}: Execution attempt \${this.currentRetry + 1} failed.\`, error);
        if (this.currentRetry === this.maxRetries - 1) {
          return this.execFallback(prepRes, error instanceof Error ? error : new Error(String(error)));
        }
        if (this.waitTime > 0) {
          // Synchronous wait (blocks thread) - use with extreme caution in Node.js/browsers.
          // Prefer AsyncNode and await delay(this.waitTime) for non-blocking waits.
          const start = Date.now();
          while (Date.now() - start < this.waitTime) { /* busy wait */ }
        }
      }
    }
  }
}
`}
        </pre>
      </CollapsibleSection>

      <CollapsibleSection title="BatchNode<T>" sectionId="batchNode" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-sm text-gray-600 mb-2">Extends Node to process collections of items sequentially.</p>
        <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[400px]">
{`// Source: Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md
export class BatchNode<T = any, ItemType = any, ResultType = any> extends Node<T> {
  constructor(name?: string, maxRetries: number = 1, waitTime: number = 0) {
    super(name, maxRetries, waitTime);
  }

  // The 'exec' method in BatchNode is expected to be called with an array of items.
  // It will iterate over them, calling a per-item execution method.
  protected execPerItem(item: ItemType, prepRes?: any, shared?: T): ResultType {
    // This method should be overridden by subclasses to define work on a single item
    throw new Error(\`Node \${this.nodeName}: execPerItem not implemented for BatchNode\`);
  }

  // Override the main exec to handle the batch
  public exec(items: ItemType[] | undefined, prepRes?: any): ResultType[] { // prepRes for BatchNode may differ
    if (!items || !Array.isArray(items)) {
        console.warn(\`Node \${this.nodeName}: No items provided to BatchNode, returning empty array.\`);
        return [];
    }
    console.log(\`Node \${this.nodeName}: Processing batch of \${items.length} items.\`);
    return (items || []).map(item => this.execPerItem(item, prepRes, this.params.sharedContext)); // Pass shared context if needed
  }

  // The _exec method from Node calls this.exec, so the batch logic is triggered.
  // We might adjust how prepRes is passed or used for batch operations.
  // The prep for a BatchNode might prepare the list of items itself.
}
`}
        </pre>
      </CollapsibleSection>

      <CollapsibleSection title="Flow<T>" sectionId="flow" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-sm text-gray-600 mb-2">Orchestrates the execution of multiple connected nodes, managing sequence and conditional branches.</p>
        <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[600px]">
{`// Source: Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md
export class Flow<T = any> extends BaseNode<T> {
  protected startNode: BaseNode<T> | null = null;

  constructor(name?: string, startNode?: BaseNode<T>) {
    super(name);
    this.startNode = startNode || null;
  }

  public startWith(startNode: BaseNode<T>): BaseNode<T> { // Renamed for clarity from 'start'
    this.startNode = startNode;
    // flowEvents.emit('flow-configured', this.nodeName, startNode.nodeName);
    return startNode;
  }

  protected getNextNode(currentNode: BaseNode<T>, action?: string): BaseNode<T> | null {
    const nextAction = action || "default";
    const nextNode = currentNode.successors[nextAction];
    if (!nextNode && Object.keys(currentNode.successors).length > 0) {
      console.warn(\`Flow '\${this.nodeName}' ends at node '\${currentNode.nodeName}': Action '\${nextAction}' not found in successors [\${Object.keys(currentNode.successors).join(", ")}]\`);
    } else if (nextNode) {
        console.log(\`Flow '\${this.nodeName}': Transitioning from '\${currentNode.nodeName}' to '\${nextNode.nodeName}' via action '\${nextAction}'\`);
    }
    return nextNode || null;
  }

  // Orchestrates the flow execution
  protected _orchestrate(shared: T, flowParams?: Record<string, any>): string | undefined {
    if (!this.startNode) {
      console.error(\`Flow '\${this.nodeName}' has no start node defined.\`);
      throw new Error("Flow has no start node");
    }
    console.log(\`Flow '\${this.nodeName}' starting orchestration from node '\${this.startNode.nodeName}'\`);

    let currentNode: BaseNode<T> | null = this.startNode;
    let lastAction: string | undefined;
    let iterationCount = 0;
    const maxIterations = 100; // Safety break for cyclic flows without proper exit

    while (currentNode) {
      if (iterationCount++ > maxIterations) {
        console.error(\`Flow '\${this.nodeName}' exceeded max iterations (\${maxIterations}). Possible infinite loop. Last node: \${currentNode.nodeName}\`);
        throw new Error("Flow execution exceeded maximum iterations.");
      }

      // Pass flow-level params and allow node to merge with its own
      const nodeSpecificParams = { ...(flowParams || {}), ...(this.params || {}) }; // Combine flow params and initial node params
      currentNode.setParams(nodeSpecificParams); // Node might further refine params

      lastAction = currentNode._run(shared); // Execute the current node
      currentNode = this.getNextNode(currentNode, lastAction); // Determine the next node
    }
    console.log(\`Flow '\${this.nodeName}' orchestration completed. Last action: \${lastAction}\`);
    return lastAction; // This is the action from the last executed node
  }

  // Overrides BaseNode's _run to perform orchestration
  protected _run(shared: T): string | undefined {
    // flowEvents.emit(FlowEventEmitter.FLOW_STARTED, this.nodeName);
    const prepRes = this.prep(shared); // Flow's own prep
    const orchestrationResult = this._orchestrate(shared, this.params); // Pass flow's params to orchestrate
    const finalResult = this.post(shared, prepRes, orchestrationResult); // Flow's own post
    // flowEvents.emit(FlowEventEmitter.FLOW_COMPLETED, this.nodeName, finalResult);
    return finalResult;
  }

  // Default post for a Flow returns the result of the orchestration (last action of the last node)
  protected post(shared: T, prepRes: any, orchestrationResult: any): string | undefined {
    return orchestrationResult;
  }
}
`}
        </pre>
      </CollapsibleSection>

       <CollapsibleSection title="Async Variants (AsyncNode, AsyncFlow, etc.)" sectionId="asyncVariants" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-sm text-gray-600 mb-2">Implementations for handling asynchronous operations, using `async/await` for non-blocking execution in lifecycle methods (`prepAsync`, `execAsync`, `postAsync`).</p>
        <p className="text-sm text-gray-700 mb-3">Key changes for async nodes:</p>
        <ul className="list-disc ml-5 text-sm text-gray-700 mb-3">
            <li>Lifecycle methods become `async` (e.g., `prepAsync`, `execAsync`, `postAsync`).</li>
            <li>`Node._exec` uses a loop with `await this.execAsync()` and `await delay()` for retries.</li>
            <li>`Flow._orchestrateAsync` uses `await` when calling `_runAsync` on `AsyncNode` instances.</li>
            <li>`AsyncBatchNode` and `AsyncParallelBatchNode` use `Promise.all` for concurrent item processing.</li>
        </ul>
        <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[600px]">
{`// Source: Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md (Conceptual Summary)

// Utility for non-blocking delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class AsyncNode<T = any> extends Node<T> { // Extends Node to reuse retry logic structure
  constructor(name?: string, maxRetries: number = 1, waitTime: number = 0) {
    super(name, maxRetries, waitTime);
  }

  public async prepAsync(shared: T): Promise<any> { return undefined; }
  public async execAsync(prepRes: any): Promise<any> { return undefined; }
  public async execFallbackAsync(prepRes: any, error: Error): Promise<any> {
    console.error(\`AsyncNode \${this.nodeName} failed after \${this.maxRetries} retries (async fallback).\`, error);
    throw error;
  }
  public async postAsync(shared: T, prepRes: any, execRes: any): Promise<string | undefined> { return "default"; }

  // Override _exec for async operations
  protected async _exec(prepRes: any): Promise<any> { // Note: _exec itself is now async
    for (this.currentRetry = 0; this.currentRetry < this.maxRetries; this.currentRetry++) {
      try {
        if (this.currentRetry > 0) {
            console.log(\`AsyncNode \${this.nodeName}: Retrying async execution (attempt \${this.currentRetry + 1}/\${this.maxRetries})\`);
        }
        return await this.execAsync(prepRes);
      } catch (error) {
        console.warn(\`AsyncNode \${this.nodeName}: Async execution attempt \${this.currentRetry + 1} failed.\`, error);
        if (this.currentRetry === this.maxRetries - 1) {
          return await this.execFallbackAsync(prepRes, error instanceof Error ? error : new Error(String(error)));
        }
        if (this.waitTime > 0) {
          await delay(this.waitTime);
        }
      }
    }
  }

  // Primary execution method for async nodes
  public async runAsync(shared: T): Promise<string | undefined> {
    if (Object.keys(this.successors).length > 0 && !(this instanceof AsyncFlow)) {
      console.warn(\`AsyncNode \${this.nodeName} won't run successors. Use AsyncFlow or override runAsync().\`);
    }
    return await this._runAsync(shared);
  }

  protected async _runAsync(shared: T): Promise<string | undefined> {
    // flowEvents.emit(FlowEventEmitter.NODE_STARTED, this.nodeName);
    try {
        const prepRes = await this.prepAsync(shared);
        const execRes = await this._exec(prepRes); // _exec is now async
        const result = await this.postAsync(shared, prepRes, execRes);
        // flowEvents.emit(FlowEventEmitter.NODE_COMPLETED, this.nodeName, result);
        return result;
    } catch (error) {
        // flowEvents.emit(FlowEventEmitter.NODE_FAILED, this.nodeName, error);
        console.error(\`Error in AsyncNode \${this.nodeName}: \`, error);
        throw error;
    }
  }

  // Override synchronous run to prevent accidental use
  public _run(shared: T): string | undefined {
    console.error(\`Synchronous 'run' called on AsyncNode \${this.nodeName}. Use 'runAsync' instead.\`);
    throw new Error("Use runAsync for AsyncNode instances.");
  }
}

export class AsyncFlow<T = any> extends Flow<T> { // Extends Flow for structure
  constructor(name?: string, startNode?: BaseNode<T>) { // startNode can be sync or async
    super(name, startNode);
  }

  // Async orchestration
  protected async _orchestrateAsync(shared: T, flowParams?: Record<string, any>): Promise<string | undefined> {
    if (!this.startNode) {
      console.error(\`AsyncFlow '\${this.nodeName}' has no start node defined.\`);
      throw new Error("AsyncFlow has no start node");
    }
     console.log(\`AsyncFlow '\${this.nodeName}' starting async orchestration from node '\${this.startNode.nodeName}'\`);

    let currentNode: BaseNode<T> | null = this.startNode;
    let lastAction: string | undefined;
    let iterationCount = 0;
    const maxIterations = 100;

    while (currentNode) {
      if (iterationCount++ > maxIterations) {
        console.error(\`AsyncFlow '\${this.nodeName}' exceeded max iterations. Last node: \${currentNode.nodeName}\`);
        throw new Error("AsyncFlow execution exceeded maximum iterations.");
      }

      const nodeSpecificParams = { ...(flowParams || {}), ...(this.params || {}) };
      currentNode.setParams(nodeSpecificParams);

      if (currentNode instanceof AsyncNode) {
        lastAction = await currentNode._runAsync(shared);
      } else { // Synchronous node within an async flow
        lastAction = currentNode._run(shared);
      }
      currentNode = this.getNextNode(currentNode, lastAction);
    }
    console.log(\`AsyncFlow '\${this.nodeName}' async orchestration completed. Last action: \${lastAction}\`);
    return lastAction;
  }

  public async runAsync(shared: T): Promise<string | undefined> {
    // flowEvents.emit(FlowEventEmitter.FLOW_STARTED, this.nodeName);
    // Prep for AsyncFlow might be async or sync depending on its own nature
    const prepRes = (this instanceof AsyncNode) ? await (this as AsyncNode<T>).prepAsync(shared) : this.prep(shared);
    const orchestrationResult = await this._orchestrateAsync(shared, this.params);
    // Post for AsyncFlow might be async or sync
    const finalResult = (this instanceof AsyncNode) ? await (this as AsyncNode<T>).postAsync(shared, prepRes, orchestrationResult) : this.post(shared, prepRes, orchestrationResult);
    // flowEvents.emit(FlowEventEmitter.FLOW_COMPLETED, this.nodeName, finalResult);
    return finalResult;
  }

  // Override synchronous run from BaseNode/Flow
  public _run(shared: T): string | undefined {
    console.error(\`Synchronous 'run' called on AsyncFlow \${this.nodeName}. Use 'runAsync' instead.\`);
    throw new Error("Use runAsync for AsyncFlow instances.");
  }

  // If AsyncFlow itself is an AsyncNode (e.g. if it has its own async prep/post)
  public async prepAsync(shared: T): Promise<any> { return this.prep(shared); } // Default to sync prep
  public async postAsync(shared: T, prepRes: any, execRes: any): Promise<string | undefined> { return this.post(shared, prepRes, execRes); } // Default to sync post
}

// Example AsyncBatchNode (processes items sequentially but each item processing is async)
export class AsyncBatchNode<T = any, ItemType = any, ResultType = any> extends AsyncNode<T> {
    protected async execPerItemAsync(item: ItemType, prepRes?: any, shared?: T): Promise<ResultType> {
        throw new Error(\`Node \${this.nodeName}: execPerItemAsync not implemented for AsyncBatchNode\`);
    }
    public async execAsync(items: ItemType[] | undefined, prepRes?: any): Promise<ResultType[]> {
        if (!items) return [];
        const results: ResultType[] = [];
        for (const item of items) {
            results.push(await this.execPerItemAsync(item, prepRes, this.params.sharedContext));
        }
        return results;
    }
}

// Example AsyncParallelBatchNode (processes items concurrently)
export class AsyncParallelBatchNode<T = any, ItemType = any, ResultType = any> extends AsyncNode<T> {
    protected async execPerItemAsync(item: ItemType, prepRes?: any, shared?: T): Promise<ResultType> {
        throw new Error(\`Node \${this.nodeName}: execPerItemAsync not implemented for AsyncParallelBatchNode\`);
    }
    public async execAsync(items: ItemType[] | undefined, prepRes?: any): Promise<ResultType[]> {
        if (!items) return [];
        return Promise.all(items.map(item => this.execPerItemAsync(item, prepRes, this.params.sharedContext)));
    }
}

// AsyncBatchFlow and AsyncParallelBatchFlow would follow similar patterns,
// often where their 'prepAsync' method prepares a list of parameters (BatchParams),
// and then _orchestrateAsync is called for each, potentially in parallel.

export class AsyncBatchFlow<T = any, BatchParams = any> extends AsyncFlow<T> {
  public async prepAsync(shared: T): Promise<BatchParams[]> {
    // Subclasses should override this to return an array of parameters for each batch execution
    return [];
  }

  protected async _runAsync(shared: T): Promise<string | undefined> { // Overriding AsyncFlow's _runAsync
    const batchParamsArray = await this.prepAsync(shared);
    for (const batchParams of batchParamsArray) {
      // Execute the entire flow for each set of batch parameters
      await this._orchestrateAsync(shared, { ...this.params, ...batchParams });
    }
    // The 'post' for BatchFlow typically doesn't return the last action of a single orchestration,
    // but might summarize or indicate completion of all batches.
    return await this.postAsync(shared, batchParamsArray, null); // Result of orchestration is null as it's multiple
  }
}

export class AsyncParallelBatchFlow<T = any, BatchParams = any> extends AsyncFlow<T> {
  public async prepAsync(shared: T): Promise<BatchParams[]> {
    return [];
  }
  protected async _runAsync(shared: T): Promise<string | undefined> {
    const batchParamsArray = await this.prepAsync(shared);
    await Promise.all(
      batchParamsArray.map(batchParams =>
        this._orchestrateAsync(shared, { ...this.params, ...batchParams })
      )
    );
    return await this.postAsync(shared, batchParamsArray, null);
  }
}
`}
        </pre>
      </CollapsibleSection>
      <CollapsibleSection title="Flow System Use Case Examples (Code Generation, Deployment)" sectionId="flowUseCases" expandedSection={expandedSection} toggleSection={toggleSection}>
          <p className="text-sm text-gray-600 mb-2">Illustrative examples of how these flow classes can be composed to handle complex AI-assisted tasks like code generation and metadata deployment, including context gathering, AI calls, and result processing.</p>
          <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[600px]">
{`// Source: Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md
// (Interfaces and helper functions assumed to be defined elsewhere for brevity)

interface AIAssistantContext {
  userQuery: string;
  workspaceInfo: { rootPath: string };
  contextTypes?: string[];
  contextFiles?: Array<{ path: string; content: string; language: string }>;
  aiResponse?: string;
  generatedCode?: string | null;
  // ... other shared properties
}

// --- Code Generation Flow Example ---
class GatherContextNode extends AsyncNode<AIAssistantContext> {
  async prepAsync(shared: AIAssistantContext) { return { query: shared.userQuery }; }
  async execAsync(prep: { query: string }) {
    console.log(\`GatherContextNode: Analyzing query for context: "\${prep.query}"\`);
    // Dummy: const contextNeeded = await analyzeQueryForContext(prep.query);
    return prep.query.includes("Account") ? ["ApexClass", "SObjectAccount"] : ["ApexClass"];
  }
  async postAsync(shared: AIAssistantContext, prep: any, contextTypes: string[]) {
    shared.contextTypes = contextTypes;
    console.log(\`GatherContextNode: Context types needed: \${contextTypes.join(', ')}\`);
    return "default";
  }
}

class FetchFilesNode extends AsyncNode<AIAssistantContext> {
  async prepAsync(shared: AIAssistantContext) { /* ... */ return { contextTypes: shared.contextTypes, projectRoot: shared.workspaceInfo.rootPath }; }
  async execAsync(prep: { contextTypes: string[], projectRoot: string }) {
    console.log(\`WorkspaceFilesNode: Fetching files for types: \${prep.contextTypes.join(', ')}\`);
    // Dummy: const fileContents = await 실제_파일_패치_로직(prep.projectRoot, prep.contextTypes);
    return { "src/classes/MyClass.cls": "public class MyClass {}" };
  }
  async postAsync(shared: AIAssistantContext, prep: any, fileContents: Record<string, string>) {
    shared.contextFiles = Object.entries(fileContents).map(([path, content]) => ({ path, content, language: "apex" }));
    console.log(\`WorkspaceFilesNode: Fetched \${shared.contextFiles.length} context file(s).\`);
    return "default";
  }
}

class GenerateCodeNode extends AsyncNode<AIAssistantContext> {
  async prepAsync(shared: AIAssistantContext) { /* ... */ return { query: shared.userQuery, contextFiles: shared.contextFiles }; }
  async execAsync(prep: { query: string, contextFiles: any[] }) {
    console.log(\`GenerateCodeNode: Generating code for query: "\${prep.query}" with \${prep.contextFiles?.length || 0} context files.\`);
    // Dummy: const aiResponse = await sendToAI({ prompt: prep.query, context: prep.contextFiles, systemPrompt: "..." });
    const dummyAiResponse = \`\`\`apex
public class SampleController {
    @AuraEnabled
    public static String getGreeting() {
        return 'Hello from AI!';
    }
}\`\`\`;
    return \`Some explanation text... \${dummyAiResponse}\`;
  }
  async postAsync(shared: AIAssistantContext, prep: any, aiResponse: string) {
    shared.aiResponse = aiResponse;
    // Dummy: shared.generatedCode = extractCodeFromResponse(aiResponse);
    shared.generatedCode = aiResponse.substring(aiResponse.indexOf("public class")); // Simplified extraction
    console.log(\`GenerateCodeNode: Code generated. Length: \${shared.generatedCode?.length || 0}\`);
    return "default";
  }
}

class PresentResultNode extends AsyncNode<AIAssistantContext> { // Example of a final node
    async execAsync(prep: any, shared: AIAssistantContext) { // prep might not be needed if using shared
        console.log("PresentResultNode: Presenting generated code to user.");
        console.log("Generated Code:", shared.generatedCode);
        // In reality, this would update the UI via a callback
        return "Flow_Completed_Successfully";
    }
}


// --- Deployment Flow Example ---
interface DeploymentContext {
  filesToDeploy: string[];
  targetOrg: any; // Connection info
  apiVersion: string;
  validationResults?: any; // ValidationResults
  deploymentResult?: any; // DeploymentResult
  errorSuggestions?: string[];
}
interface ValidationResults { hasErrors: boolean; errors?: any[]; }
interface DeploymentResult { success: boolean; error?: string; }


class ValidateMetadataNode extends AsyncNode<DeploymentContext> {
  async prepAsync(shared: DeploymentContext) { /* ... */ return { files: shared.filesToDeploy, apiVersion: shared.apiVersion }; }
  async execAsync(prep: { files: string[], apiVersion: string }) {
    console.log(\`ValidateMetadataNode: Validating \${prep.files.length} files for API v\${prep.apiVersion}\`);
    // Dummy: const validationResults = await validateSalesforceMetadata(prep.files, prep.apiVersion);
    const dummyValidation = { hasErrors: prep.files.includes("Error.cls") };
    return dummyValidation;
  }
  async postAsync(shared: DeploymentContext, prep: any, results: ValidationResults) {
    shared.validationResults = results;
    if (results.hasErrors) {
      console.error("ValidateMetadataNode: Validation failed.");
      return "validation_failed";
    }
    console.log("ValidateMetadataNode: Validation passed.");
    return "validation_passed";
  }
}

class DeployToOrgNode extends AsyncNode<DeploymentContext> {
  async prepAsync(shared: DeploymentContext) { /* ... */ return { files: shared.filesToDeploy, orgConnection: shared.targetOrg, apiVersion: shared.apiVersion }; }
  async execAsync(prep: { files: string[], orgConnection: any, apiVersion: string }) {
    console.log(\`DeployToOrgNode: Deploying \${prep.files.length} files to org...\`);
    // Dummy: const deploymentResult = await deploySalesforceMetadata(...);
    return { success: true };
  }
  async postAsync(shared: DeploymentContext, prep: any, result: DeploymentResult) {
    shared.deploymentResult = result;
    if (result.success) {
      console.log("DeployToOrgNode: Deployment successful.");
      return "deployment_success";
    }
    console.error("DeployToOrgNode: Deployment failed.");
    return "deployment_failed";
  }
}

class HandleValidationErrorNode extends AsyncNode<DeploymentContext> {
  async prepAsync(shared: DeploymentContext) { /* ... */ return { validationResults: shared.validationResults }; }
  async execAsync(prep: { validationResults: ValidationResults }) {
    console.log("HandleValidationErrorNode: Generating AI suggestions for validation errors.");
    // Dummy: const suggestions = await getAIFixSuggestions(prep.validationResults.errors);
    return ["Suggestion 1: Fix X", "Suggestion 2: Check Y"];
  }
  async postAsync(shared: DeploymentContext, prep: any, suggestions: string[]) {
    shared.errorSuggestions = suggestions;
    console.log(\`HandleValidationErrorNode: AI suggestions: \${suggestions.join('; ')}\`);
    return "default"; // Or a specific action like "show_suggestions"
  }
}

// --- Example Flow Construction (Conceptual) ---
async function runCodeGenerationExample() {
    const codeGenerationFlow = new AsyncFlow<AIAssistantContext>("CodeGenerator");
    const gatherContext = new GatherContextNode("GatherContext");
    const fetchFiles = new FetchFilesNode("FetchFiles");
    const generateCode = new GenerateCodeNode("GenerateCode");
    const presentResult = new PresentResultNode("PresentResult");

    codeGenerationFlow.startWith(gatherContext)
      .then(fetchFiles) // Using 'then' as a conceptual alias for 'next'
      .then(generateCode)
      .then(presentResult);

    const sharedContext: AIAssistantContext = {
      userQuery: "Create an Apex trigger for Account object that updates related Contacts",
      workspaceInfo: { rootPath: "/path/to/project" }
    };
    await codeGenerationFlow.runAsync(sharedContext);
    console.log("Code Generation Flow completed. Final context:", sharedContext);
}

async function runDeploymentExample() {
    const deploymentFlow = new AsyncFlow<DeploymentContext>("DeploymentProcessor");
    const validateMeta = new ValidateMetadataNode("ValidateMeta");
    const deployToOrg = new DeployToOrgNode("DeployToOrg");
    const handleValidationErr = new HandleValidationErrorNode("HandleValidationErr");
    const reportSuccess = new AsyncNode<DeploymentContext>("ReportSuccess", 1,0); // Simple node
    reportSuccess.execAsync = async (p, s) => console.log("Deployment reported as successful!");


    deploymentFlow.startWith(validateMeta);
    validateMeta.on("validation_passed").then(deployToOrg);
    validateMeta.on("validation_failed").then(handleValidationErr);

    deployToOrg.on("deployment_success").then(reportSuccess);
    deployToOrg.on("deployment_failed").then(handleValidationErr); // Could also go to a different error handler

    const sharedDeploymentContext: DeploymentContext = {
      filesToDeploy: ["src/classes/MyClass.cls", "src/lwc/myComponent/myComponent.js"],
      targetOrg: { alias: "myDevOrg" },
      apiVersion: "58.0"
    };
    await deploymentFlow.runAsync(sharedDeploymentContext);
    console.log("Deployment Flow completed. Final context:", sharedDeploymentContext);
}

// To run:
// runCodeGenerationExample().catch(console.error);
// runDeploymentExample().catch(console.error);

`}
          </pre>
      </CollapsibleSection>
    </div>
  );

  const renderPackageStructure = () => (
    // Content from Detailed Architecture & Implementation Plan.txt / salesforce-ai-ide-detailed.md
    <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Detailed Package Structure</h2>
        <p className="text-gray-700 mb-4">
            The Salesforce AI IDE is organized into a modular monorepo structure, with each package handling a specific domain of functionality. This promotes separation of concerns, testability, and independent development.
        </p>
        <pre className="text-xs bg-gray-800 text-white p-3 rounded mb-6">{`salesforce-ai-ide/
├── packages/
│   ├── salesforce-ide/             # Main extension package, integrates all components
│   ├── salesforce-ide-core/        # Core APIs, types, interfaces, utils
│   ├── salesforce-ide-extension/   # Browser-specific UI extensions, Theia contributions
│   ├── ai-service/                 # AI model connections, prompt handling, response parsing, token mgt.
│   ├── flow-orchestration/         # Flow-based task execution system (BaseNode, Flow, Async variants)
│   ├── salesforce-integration/     # Salesforce org connectivity (Metadata API, SFDX, Apex exec)
│   ├── file-operations/            # File system interaction, checkpointing, diffing
│   ├── ui-components/              # Shared React UI components, WebView providers
│   ├── multi-agent-system/         # Agent registry, task planning, execution management
│   ├── telemetry/                  # Optional usage analytics (with opt-out)
│   └── documentation/              # Documentation generation services
├── examples/
├── node_modules/
├── README.md
├── package.json
└── lerna.json (or similar monorepo tool config)
`}</pre>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                { name: 'salesforce-ide', purpose: 'Main extension package that integrates all components. Handles activation, command registration, and overall coordination.', keyFiles: 'index.ts, commands/index.ts, configuration/settings.ts', deps: 'All other packages, VS Code API, Theia Framework', color: 'blue' },
                { name: 'salesforce-ide-core', purpose: 'Core APIs, interfaces, and type definitions used across the extension. Provides fundamental building blocks.', keyFiles: 'types/index.ts, interfaces/salesforce-service.ts, utils/path.ts', deps: 'TypeScript, VS Code Types', color: 'purple' },
                { name: 'salesforce-ide-extension', purpose: 'Browser-specific UI extensions and contributions for Theia IDE. Manages custom views, widgets, menus.', keyFiles: 'frontend-module.ts, contribution.ts, views/index.ts', deps: 'salesforce-ide-core, Theia UI, React', color: 'pink' },
                { name: 'ai-service', purpose: 'Manages AI service connections (OpenAI, Anthropic, etc.), prompt handling, response parsing, and token budget management.', keyFiles: 'api-providers.ts, token-manager.ts, prompt-templates.ts', deps: 'OpenAI SDK, Anthropic SDK, LangChain (optional), salesforce-ide-core', color: 'red' },
                { name: 'flow-orchestration', purpose: 'Implements the TypeScript flow-based task execution system (BaseNode, Flow, AsyncNode, etc.).', keyFiles: 'flow-nodes.ts, task-executor.ts, flows/index.ts', deps: 'salesforce-ide-core, ai-service', color: 'green' },
                { name: 'salesforce-integration', purpose: 'Provides connectivity to Salesforce orgs (Metadata API, SFDX CLI wrapper, Apex execution, Org Auth).', keyFiles: 'metadata-api.ts, sfdx-operations.ts, org-connection.ts', deps: 'JSforce, SFDX Core, salesforce-ide-core', color: 'indigo' },
                { name: 'file-operations', purpose: 'Handles file system interactions, version checkpoint management (shadow Git), and file difference visualization.', keyFiles: 'file-editor.ts, checkpoint-system.ts, diff-viewer.ts', deps: 'VS Code FS API, simple-git, salesforce-ide-core', color: 'yellow' },
                { name: 'ui-components', purpose: 'Provides shared, reusable React UI components for the IDE, WebView management, and theming.', keyFiles: 'webview-provider.ts, components/index.tsx, themes/index.ts', deps: 'React, VS Code WebView API, salesforce-ide-core', color: 'teal' },
                { name: 'multi-agent-system', purpose: 'Manages AI agent coordination, task planning and delegation to specialized agents (Architect, Developer, QA).', keyFiles: 'agent-registry.ts, task-planner.ts, execution-manager.ts', deps: 'ai-service, flow-orchestration, salesforce-ide-core', color: 'orange' },
                { name: 'telemetry', purpose: 'Optional telemetry for usage analytics and extension improvement (strictly opt-in/out).', keyFiles: 'telemetry-service.ts, events/index.ts, privacy.ts', deps: 'Application Insights (or similar), salesforce-ide-core', color: 'gray' },
                { name: 'documentation', purpose: 'Services for generating and managing documentation from code or AI.', keyFiles: 'doc-generator.ts, templates/index.ts, exporters/index.ts', deps: 'Markdown libs, PDF libs, salesforce-ide-core, ai-service', color: 'lime' },
            ].map(pkg => (
                <div key={pkg.name} className={`bg-${pkg.color}-50 p-4 rounded-lg border border-${pkg.color}-200 shadow-sm`}>
                    <h4 className={`font-bold mb-1 text-${pkg.color}-700`}>{pkg.name}</h4>
                    <p className="text-xs text-gray-600 mb-1"><strong>Purpose:</strong> {pkg.purpose}</p>
                    <p className="text-xs text-gray-600 mb-1"><strong>Key Files/Dirs:</strong> {pkg.keyFiles}</p>
                    <p className="text-xs text-gray-600"><strong>Dependencies:</strong> {pkg.deps}</p>
                </div>
            ))}
        </div>
        <CollapsibleSection title="Inter-Package Dependencies Diagram Text" sectionId="pkgDeps" expandedSection={expandedSection} toggleSection={toggleSection}>
          <pre className="text-xs bg-gray-800 text-white p-3 rounded">{`
salesforce-ide
依赖于: salesforce-ide-core, salesforce-ide-extension, ai-service, flow-orchestration, salesforce-integration, file-operations, ui-components, multi-agent-system, telemetry, documentation

salesforce-ide-extension
依赖于: salesforce-ide-core

ai-service
依赖于: salesforce-ide-core

flow-orchestration
依赖于: salesforce-ide-core, ai-service

salesforce-integration
依赖于: salesforce-ide-core

file-operations
依赖于: salesforce-ide-core

ui-components
依赖于: salesforce-ide-core

multi-agent-system
依赖于: salesforce-ide-core, ai-service, flow-orchestration

telemetry
依赖于: salesforce-ide-core

documentation
依赖于: salesforce-ide-core, ai-service
          `}</pre>
        </CollapsibleSection>
    </div>
);

  const renderImplementationPlanDetailed = () => (
    // Content from Detailed Architecture & Implementation Plan.txt, SalesforceAIIDEArchitecture.txt, salesforce-ai-ide-detailed.md
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Comprehensive Implementation Plan</h2>
      <p className="text-gray-700 mb-4">
        The development of the Salesforce AI IDE is envisioned as a phased approach, allowing for iterative development, testing, and refinement. Each phase builds upon the previous one, culminating in a fully-featured intelligent development environment.
      </p>

      {[
        {
          title: "Phase 1: Foundation & Core Setup (Weeks 1-2)",
          color: "blue",
          tasks: [
            {
              heading: "IDE Setup & Theia Configuration",
              details: [
                "Fork Theia IDE repository and establish project structure.",
                "Define main application `package.json` with Theia configurations and core dependencies.",
                "Create workspace for Lerna/monorepo package management (`packages/`).",
                "Implement basic Salesforce theme (colors, icons, styling).",
                "Create basic extension points, command contributions, and menu contributions.",
              ]
            },
            {
              heading: "Core Package (`salesforce-ide-core`)",
              details: [
                "Setup `package.json` and `tsconfig.json` for the core library.",
                "Define fundamental types and interfaces (e.g., `SalesforceMetadata`, `OrgConnection`, `AIRequest`, `AIResponse`, `SharedContext`).",
                "Implement common utility functions (path handling, async helpers, error types).",
                "Setup basic storage helpers for `globalState`, `workspaceState`, and `secrets`."
              ]
            },
            {
              heading: "Flow System Implementation (TypeScript)",
              details: [
                "Port the provided Python flow system (BaseNode, Node, Flow, etc.) to TypeScript within `flow-orchestration` package.",
                "Implement asynchronous variants (`AsyncNode`, `AsyncFlow`, `AsyncBatchNode`, `AsyncParallelBatchNode`, etc.).",
                "Develop unit tests for core flow components and lifecycle methods.",
                "Implement `FlowEventEmitter` for task progress reporting."
              ]
            },
            {
                heading: "Initial Extension Package (`salesforce-ide-extension`)",
                details: [
                    "Setup `package.json` and `tsconfig.json`.",
                    "Create basic frontend module and contributions.",
                    "Implement a basic AI Assistant Widget placeholder."
                ]
            }
          ]
        },
        // ... Other phases would be similarly detailed ...
        {
          title: "Phase 2: AI Integration & Core AI Services (Weeks 3-4)",
          color: "indigo",
          tasks: [
            {
              heading: "API Providers (`ai-service`)",
              details: [
                "Define `APIProvider` interface for abstracting AI model interactions.",
                "Implement initial connectors (e.g., OpenAIProvider, AnthropicProvider).",
                "Develop UI for provider selection and API key configuration.",
                "Implement `buildApiHandler` factory function."
              ]
            },
            {
              heading: "Token Management (`ai-service`)",
              details: [
                "Implement `TokenManager` for tracking and budgeting API token usage.",
                "Create usage analytics dashboard (basic).",
                "Implement alerts for budget thresholds and request optimization strategies."
              ]
            },
            {
              heading: "Prompt Engineering & Response Parsing (`ai-service`)",
              details: [
                "Create initial Salesforce-specific system prompt templates.",
                "Implement context window management techniques.",
                "Develop `parseAssistantMessage` to handle AI responses (text, tool calls using XML-like tags)."
              ]
            }
          ]
        },
        {
            title: "Phase 3: Salesforce Integration (Weeks 5-6)",
            color: "green",
            tasks: [
                {
                    heading: "Metadata Operations (`salesforce-integration`)",
                    details: [
                        "Implement Metadata API wrapper (retrieve, deploy, list, describe).",
                        "Create SFDX CLI integration for common org operations.",
                        "Develop UI for Browse Salesforce metadata components.",
                        "Implement deployment mechanism with progress tracking and validation flows."
                    ]
                },
                {
                    heading: "Org Connection Management (`salesforce-integration`)",
                    details: [
                        "Create connection manager for handling multiple Salesforce org authentications.",
                        "Implement OAuth 2.0 authentication flows (web server, JWT).",
                        "Add UI for managing authenticated orgs and switching active org.",
                        "Implement connection status indicators in the UI."
                    ]
                },
                {
                    heading: "Apex & Environment Integration (`salesforce-integration`, `file-operations`)",
                    details: [
                        "Implement anonymous Apex execution service.",
                        "Create a test runner for executing Apex unit tests and displaying results.",
                        "Add a debug log viewer and retrieval mechanism.",
                        "Implement Checkpoint Tracker for file versioning using shadow Git.",
                        "Implement code coverage visualization."
                    ]
                }
            ]
        },
        {
            title: "Phase 4: Multi-Agent System (Weeks 7-8)",
            color: "purple",
            tasks: [
                {
                    heading: "Agent Registry & Definition (`multi-agent-system`)",
                    details: [
                        "Implement agent definition system (`AgentConfig`, `AgentInstance`, `AgentCapability`).",
                        "Create initial specialized agent types (Architect, Developer, QA, Documentation) with system prompts.",
                        "Add agent configuration UI (if applicable).",
                        "Implement capability discovery mechanism for agents."
                    ]
                },
                {
                    heading: "Task Planner (`multi-agent-system`)",
                    details: [
                        "Develop AI-assisted project breakdown logic (requirements to user stories/epics).",
                        "Implement dependency analysis between stories/tasks.",
                        "Add story prioritization and assignment capabilities.",
                        "Create visual planning tool (basic)."
                    ]
                },
                {
                    heading: "Execution Manager (`multi-agent-system`)",
                    details: [
                        "Implement coordinated execution of tasks by multiple agents using the Flow System.",
                        "Create robust user approval workflows for agent-initiated actions.",
                        "Add progress tracking for multi-step, multi-agent tasks.",
                        "Implement error handling and recovery strategies for agent collaborations."
                    ]
                }
            ]
        },
        {
            title: "Phase 5: Frontend Enhancements & Flow Templates (Weeks 9-10)",
            color: "yellow",
            tasks: [
                { heading: "UI Components (`ui-components`)", details: ["Create polished AI chat interface.", "Implement code editor with integrated AI suggestions and actions.", "Add diff viewer for Checkpoint system.", "Create project dashboard for overview and task management."] },
                { heading: "Flow Templates (`flow-orchestration`)", details: ["Implement pre-built flows for common tasks (code generation, debugging, deployment, documentation).", "Allow for customization and creation of new flows by users (advanced)."] },
                { heading: "User Experience (UX)", details: ["Develop onboarding tutorial and contextual help.", "Create quick command palette for accessing AI features.", "Implement keyboard shortcuts.", "Refine notification system for AI interactions and task status."] }
            ]
        },
        {
            title: "Phase 6: Testing, Documentation & Release (Weeks 11-12)",
            color: "red",
            tasks: [
                { heading: "Testing", details: ["Implement comprehensive unit tests for all packages.", "Create integration tests for key workflows (AI calls, Salesforce ops, agent tasks).", "Conduct thorough User Acceptance Testing (UAT).", "Perform performance analysis and optimization."] },
                { heading: "Documentation", details: ["Create detailed user guide and tutorials.", "Add developer documentation for extensibility (API docs, package structure).", "Produce video tutorials for key features.", "Write API reference for core services."] },
                { heading: "Release Preparation", details: ["Package extension for distribution (e.g., VSIX).", "Write detailed release notes.", "Set up update mechanism for the extension.", "Prepare launch materials and marketing communications."] }
            ]
        }
      ].map(phase => (
        <div key={phase.title} className={`mb-8 p-5 bg-${phase.color}-50 rounded-lg border border-${phase.color}-300 shadow-md`}>
          <h3 className={`text-xl font-bold mb-3 text-${phase.color}-700`}>{phase.title}</h3>
          <div className="space-y-4">
            {phase.tasks.map(task => (
              <div key={task.heading} className="p-3 bg-white rounded-md shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-1">{task.heading}</h4>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  {task.details.map((detail, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: detail.replace(/\[[^\]]+\]/g,'<span class="text-blue-500 text-xs italic ml-1"></span>') }}></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
      <CollapsibleSection title="Bootstrapping Theia IDE - Code Snippets" sectionId="bootstrapCode" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-sm text-gray-600 mb-2">The following are conceptual shell commands and file content snippets for bootstrapping the Theia-based IDE, as derived from the implementation plan documents.</p>
        <h5 className="font-semibold my-2 text-gray-700">1. Clone and Configure Theia Base</h5>
        <pre className="text-xs bg-gray-800 text-white p-3 rounded-md overflow-auto max-h-[300px]">
{`# Clone Theia
git clone https://github.com/eclipse-theia/theia.git salesforce-ai-ide
cd salesforce-ai-ide

# Install dependencies
yarn

# Create application package.json (main Theia app package.json)
# (Content similar to provided in salesforce-ai-ide-detailed.md)
# Key parts:
# "name": "salesforce-ai-ide",
# "theia": { "frontend": { "config": { "applicationName": "Salesforce AI IDE" } } },
# "dependencies": { "@theia/core": "latest", ..., "salesforce-ide": "0.1.0", ... },
# "scripts": { "prepare": "yarn run clean && yarn build", "start": "theia start --plugins=local-dir:plugins" }

# Create workspace for custom packages
mkdir -p packages`}
        </pre>
        <h5 className="font-semibold my-2 text-gray-700">2. Create Core Package (`packages/salesforce-ide-core`)</h5>
        <pre className="text-xs bg-gray-800 text-white p-3 rounded-md overflow-auto max-h-[300px]">
{`cd packages/salesforce-ide-core
# Create package.json for salesforce-ide-core
# (Content similar to provided)
# "name": "salesforce-ide-core", "dependencies": { "@theia/core": "latest" }, "scripts": { ... "build": "tsc" ...}

# Create tsconfig.json for salesforce-ide-core
# (Content similar to provided)
# "compilerOptions": { "target": "ES2021", "module": "commonjs", "outDir": "lib", "rootDir": "src", ... }

# Create initial types (e.g., src/types/index.ts)
# (Content similar to provided)
# export interface SalesforceMetadata { ... }
# export interface AIRequest { ... }
cd ../..`}
        </pre>
        <h5 className="font-semibold my-2 text-gray-700">3. Implement `flow-orchestration` Package</h5>
        <pre className="text-xs bg-gray-800 text-white p-3 rounded-md overflow-auto max-h-[300px]">
{`cd packages/flow-orchestration
# Create package.json for flow-orchestration
# "name": "flow-orchestration", "dependencies": { "@theia/core": "latest", "salesforce-ide-core": "0.1.0" }

# Create src/base/flow-nodes.ts, src/base/base-node.ts etc.
# (Content would be the TypeScript implementations of BaseNode, Node, Flow from detailed docs)
#
cd ../..`}
        </pre>
         <h5 className="font-semibold my-2 text-gray-700">Immediate Bootstrap Focus</h5>
        <ul className="list-disc ml-5 text-sm text-gray-700">
            <li><strong>Create TypeScript Configurations:</strong> Add `tsconfig.json` files to each package for successful compilation.</li>
            <li><strong>Implement Flow Framework:</strong> Port the Python flow system to TypeScript as the foundation for AI task orchestration.</li>
            <li><strong>Create Token Management:</strong> Implement the token tracking and budgeting system for AI API usage.</li>
            <li><strong>Set Up Multi-Agent Coordination (Initial):</strong> Begin implementing the project analyzer and agent coordination system.</li>
        </ul>
      </CollapsibleSection>
       <div className="mt-6 bg-gray-100 p-4 rounded-lg border border-gray-300">
          <h4 className="font-semibold text-gray-800 mb-2">Implementation Strategy Notes</h4>
          <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
            <li><strong>Incrementally build:</strong> Start with core functionality and add features iteratively.</li>
            <li><strong>Use test-driven development:</strong> Create tests for each component to ensure reliability.</li>
            <li><strong>Leverage existing libraries:</strong> Integrate with established Salesforce tools (SFDX, JSforce) and Theia frameworks.</li>
            <li><strong>Focus on Minimum Viable Features (MVFs) first</strong> for core use cases before adding secondary capabilities.</li>
            <li><strong>Regular usability testing:</strong> Get feedback from potential users throughout the development cycle.</li>
          </ul>
        </div>
    </div>
  );

  const renderUserStoriesDetailed = () => (
    // Content from Detailed Architecture & Implementation Plan.txt, SalesforceAIIDEArchitecture.txt
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Detailed User Stories, Epics, & Use Cases</h2>
      <p className="text-gray-700 mb-4">
        The development is driven by user stories, grouped into epics, outlining specific functionalities and their benefits to different personas (developers, administrators, integrators).
      </p>

      {/* Epic 1 */}
      <div className="mb-6 p-4 bg-sky-50 rounded-lg border border-sky-200">
        <h3 className="text-xl font-bold text-sky-700 mb-2">Epic: AI-Assisted Development Lifecycle Enhancement</h3>
        <p className="text-sm text-gray-600 mb-3">To empower Salesforce developers by embedding intelligent assistance throughout the entire coding, debugging, testing, and learning process directly within their IDE.</p>
        {[
          { id: 'us1_1', title: "AI-Powered Code Generation", persona: "Salesforce developer", want: "to quickly generate code (Apex classes, triggers, LWC, SOQL queries) based on natural language descriptions or high-level requirements", benefit: "so that I can accelerate my development process, reduce boilerplate, and focus on complex logic.", ac: ["User can input natural language description or select context (e.g., sObject for trigger).", "AI Assistant understands Salesforce-specific context (metadata, existing code, best practices).", "Generated code follows Salesforce coding standards and best practices (e.g., bulkification, error handling).", "User can review, edit, and approve generated code before insertion into editor or new file.", "System supports generation for Apex, LWC (HTML, JS, CSS), Triggers, SOQL, and potentially Flow XML.", "Generated code includes basic comments and ApexDoc where applicable."], flow: ["User inputs: 'Create an Apex trigger on Account to update a custom field on related Contacts when Account's Industry changes'.", "System gathers context: Account and Contact sObject metadata, existing triggers on Account.", "AI generates Apex trigger code, including helper class structure if appropriate.", "System presents code with explanations of logic and best practices used.", "User reviews, potentially asks for modifications (e.g., 'add null checks').", "User approves code; system inserts it into a new .trigger file or current editor."], fileRef: "SalesforceArchitecture.txt, salesforce-ai-ide-detailed.md" },
          { id: 'us1_2', title: "Interactive Salesforce Debugging with AI", persona: "Salesforce developer", want: "AI assistance in analyzing Apex debug logs, runtime errors, and performance issues", benefit: "so that I can identify root causes more efficiently and receive targeted recommendations for fixes.", ac: ["System can analyze Apex debug logs (raw text or from active debugger).", "AI identifies common error patterns (NullPointerExceptions, SOQL 101 errors, CPU timeout risks).", "Assistant provides specific code recommendations for fixes and explains the reasoning.", "User can apply suggested fixes with a single click after review.", "AI can suggest optimal SOQL queries or code changes to address governor limit issues identified in logs.", "Support for analyzing LWC JavaScript errors and Aura component errors."], flow: ["User selects a failing Apex test or provides an error log.", "System collects relevant code context (Apex class, trigger mentioned in logs).", "AI analyzes log entries, stack traces, and code to identify root causes and problematic lines.", "System presents analysis: 'NullPointerException on line X because variable Y was not initialized.' Suggestion: 'Initialize Y before use.'", "User reviews suggestion and associated code, approves fix.", "System applies the change to the code. User re-runs tests."], fileRef: "SalesforceArchitecture.txt, salesforce-ai-ide-detailed.md" },
          { id: 'us1_3', title: "AI-Assisted Code Refactoring & Quality Improvement", persona: "Salesforce developer", want: "AI assistance to identify and perform code refactoring (e.g., improve readability, convert to bulkified patterns, optimize SOQL, adhere to best practices)", benefit: "so that I can enhance code quality, maintainability, and performance efficiently.", ac: ["System analyzes selected Apex/LWC code for refactoring opportunities.", "AI suggests specific refactoring strategies (e.g., 'Extract method', 'Replace loop with SOQL aggregate', 'Use Custom Settings for hardcoded IDs').", "Suggestions include explanations of benefits (performance, readability, maintainability).", "User can review a diff of proposed changes before applying.", "System tracks changes via Checkpoint System for easy rollback.", "AI can suggest updates to comply with latest Salesforce API versions or features."], flow: ["User selects an Apex class for refactoring analysis.", "System analyzes code against quality metrics and known anti-patterns.", "AI identifies opportunities: 'Method X is too long and complex. Suggest extracting parts Y and Z into separate private methods.'", "System presents refactoring suggestions with before/after diffs.", "User selects and approves refactoring(s).", "System applies changes, creating checkpoints. User reviews final code."], fileRef: "salesforce-ai-ide-detailed.md, SalesforceAIIDEArchitecture.txt" },
          { id: 'us1_4', title: "Automated Test Generation for Apex", persona: "Salesforce developer", want: "to automatically generate Apex unit test classes and methods for my code", benefit: "so that I can achieve and maintain high test coverage requirements with less manual effort.", ac: ["System analyzes selected Apex classes/triggers to identify testable methods and logic paths.", "AI generates comprehensive test classes with appropriate test data setup (@TestSetup).", "Generated tests cover positive, negative, and bulk scenarios.", "Tests adhere to Salesforce testing best practices (e.g., SeeAllData=false, assertions).", "User can review and modify generated test code before saving.", "System can run generated tests and report results."], flow: ["User selects an Apex class (e.g., 'OpportunityService.cls').", "System analyzes methods, parameters, DML operations, and conditional logic.", "AI generates 'OpportunityServiceTest.cls' with test methods for each public service method, including data setup for Opportunities, Accounts, etc.", "System presents test class for review; user may adjust assertions or add more scenarios.", "User approves, system saves test class. User runs tests."], fileRef: "salesforce-ai-ide-detailed.md, SalesforceAIIDEArchitecture.txt" },
        ].map(story => (
          <div key={story.id} className="bg-white p-3 rounded-md shadow-sm mb-3 border border-gray-200">
            <h4 className="font-semibold text-gray-700 text-sm">{story.title}</h4>
            <p className="italic text-xs text-gray-500 my-1">As a {story.persona}, I want {story.want} {story.benefit}</p>
            <button onClick={() => toggleSection(story.id)} className="text-xs text-blue-600 hover:underline focus:outline-none">
              {expandedSection === story.id ? 'Hide Details' : 'Show Details'} ({story.fileRef})
            </button>
            {expandedSection === story.id && (
              <div className="mt-2 text-xs">
                <strong className="block mb-1 text-gray-600">Acceptance Criteria:</strong>
                <ul className="list-disc ml-5 text-gray-500 space-y-0.5">
                  {story.ac.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\[[^\]]+\]/g, '<span class="text-blue-400 italic"></span>') }}></li>)}
                </ul>
                <strong className="block mt-2 mb-1 text-gray-600">Example Flow:</strong>
                <ol className="list-decimal ml-5 text-gray-500 space-y-0.5">
                  {story.flow.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\[[^\]]+\]/g, '<span class="text-blue-400 italic"></span>') }}></li>)}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Add other Epics similarly */}
       <div className="mb-6 p-4 bg-lime-50 rounded-lg border border-lime-200">
        <h3 className="text-xl font-bold text-lime-700 mb-2">Epic: Intelligent Salesforce Administration & Operations</h3>
         <p className="text-sm text-gray-600 mb-3">To assist Salesforce Administrators and DevOps engineers in managing org configurations, deployments, and data operations with AI-driven insights and automation.</p>
        {[
            { id: 'us2_1', title: "AI-Assisted Metadata Deployment", persona: "Salesforce administrator/developer", want: "AI guidance during metadata deployments (changesets, SFDX source deploy)", benefit: "so that I can predict potential issues, understand dependencies, validate changes effectively, and avoid common deployment failures.", ac: ["System validates selected metadata components locally before deployment attempt.", "AI analyzes dependencies between components and potential conflicts with target org.", "Assistant recommends deployment strategies, order, and pre/post deployment steps.", "User receives detailed reporting of deployment results, with AI explanations for any failures and rollback suggestions.", "Support for SFDX source format deployments and static resource bundles."], flow: ["User selects metadata components (e.g., Apex classes, LWC, Profiles) for deployment.", "System validates components using local SFDX tools.", "AI analyzes selected components and target org metadata (if connected) for potential conflicts (e.g., missing dependencies, API version issues).", "System recommends deployment plan: 'Deploy Apex classes first, then LWC. Ensure Profile X has Apex class access.'", "User approves plan. System executes deployment via SFDX.", "If errors: AI explains 'Error: Dependent class Y not found. Suggestion: Add Y to package or deploy it first.'"], fileRef: "salesforce-ai-ide-detailed.md, SalesforceAIIDEArchitecture.txt" },
            { id: 'us2_2', title: "Automated & Intelligent Salesforce Documentation", persona: "Salesforce developer/architect/consultant", want: "to automatically generate and maintain comprehensive technical and functional documentation for my Salesforce org and custom code", benefit: "so that knowledge is preserved, onboarding is easier, and compliance requirements are met.", ac: ["System analyzes Apex classes (ApexDoc), triggers, LWC, Flows, and potentially declarative metadata (Objects, Fields, Validation Rules).", "AI generates human-readable documentation: descriptions, parameters, return values, usage examples, business logic explanations.", "Documentation follows configurable team standards or templates.", "Generated documentation can be exported in multiple formats (Markdown, HTML, PDF).", "AI can summarize complex Flows or Process Builders into plain English descriptions.", "Ability to link documentation to specific metadata components within the IDE."], flow: ["User selects 'Account.object' and related Apex triggers for documentation.", "System analyzes metadata XML and Apex code structure.", "AI generates: Object definition summary, field descriptions (from help text or inferred), trigger logic explanations, common use cases.", "System presents preview; user can edit or add custom notes.", "User approves. System saves documentation (e.g., as Markdown files in a '/docs' folder, or integrates with a knowledge base)."], fileRef: "salesforce-ai-ide-detailed.md, SalesforceAIIDEArchitecture.txt" },
            { id: 'us2_3', title: "Interactive Learning & Best Practice Assistant", persona: "new Salesforce developer or a developer learning a new Salesforce feature", want: "interactive, context-aware learning assistance and best practice guidance while I am coding", benefit: "so that I can learn effectively on the job, avoid common pitfalls, and write high-quality Salesforce code from the start.", ac: ["Assistant provides real-time, context-aware tips and suggestions based on the code being written.", "Explanations for Salesforce-specific patterns, governor limits, and security best practices.", "Code suggestions come with links to relevant Salesforce documentation or Trailhead modules.", "Interactive Q&A about Salesforce development concepts related to the current task.", "Progressive learning track based on user's skill level and interaction history (advanced)."], flow: ["User writes a SOQL query inside a for loop in Apex.", "System identifies potential performance issue.", "AI provides contextual tip: 'This SOQL query is inside a loop, which can lead to hitting governor limits. Consider querying outside the loop and processing results with a Map.' Links to 'Apex Governor Limits' documentation.", "User can ask follow-up: 'How do I use a Map here?' AI provides code snippet and explanation."], fileRef: "salesforce-ai-ide-detailed.md, SalesforceAIIDEArchitecture.txt" },
            { id: 'us2_4', title: "Salesforce API Integration Assistant", persona: "Salesforce integrator/developer", want: "AI guidance and code generation for creating API integrations with external systems", benefit: "so that I can connect Salesforce to other platforms more efficiently and securely.", ac: ["Assistant helps design integration architecture (e.g., choosing between REST, SOAP, Platform Events, MuleSoft).", "System generates boilerplate code for callouts (Apex HTTP client, named credentials setup).", "AI provides security best practices for API integrations (authentication, data encryption, error handling).", "Helper utilities for common integration tasks (JSON parsing, XML handling, authentication headers).", "Generates basic documentation for the created API integration points."], flow: ["User describes integration need: 'Need to sync new Salesforce Accounts to an external ERP via REST API.'", "AI suggests: Use an after-insert trigger on Account, queueable Apex for the callout, and a Named Credential for endpoint.", "System generates Apex trigger, Queueable class with HTTP callout structure, and instructions for Named Credential setup.", "User refines specific API endpoint, request/response payload mapping with AI help.", "AI provides recommendations for error logging and retry mechanisms."], fileRef: "salesforce-ai-ide-detailed.md, SalesforceAIIDEArchitecture.txt" },
        ].map(story => (
          <div key={story.id} className="bg-white p-3 rounded-md shadow-sm mb-3 border border-gray-200">
            <h4 className="font-semibold text-gray-700 text-sm">{story.title}</h4>
            <p className="italic text-xs text-gray-500 my-1">As a {story.persona}, I want {story.want} {story.benefit}</p>
            <button onClick={() => toggleSection(story.id)} className="text-xs text-blue-600 hover:underline focus:outline-none">
              {expandedSection === story.id ? 'Hide Details' : 'Show Details'} ({story.fileRef})
            </button>
            {expandedSection === story.id && (
              <div className="mt-2 text-xs">
                <strong className="block mb-1 text-gray-600">Acceptance Criteria:</strong>
                <ul className="list-disc ml-5 text-gray-500 space-y-0.5">
                  {story.ac.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\[[^\]]+\]/g, '<span class="text-blue-400 italic"></span>') }}></li>)}
                </ul>
                <strong className="block mt-2 mb-1 text-gray-600">Example Flow:</strong>
                <ol className="list-decimal ml-5 text-gray-500 space-y-0.5">
                  {story.flow.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\[[^\]]+\]/g, '<span class="text-blue-400 italic"></span>') }}></li>)}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderMultiAgentSystemDetailed = () => (
    // Content from Detailed Architecture & Implementation Plan.txt, SalesforceAIIDEArchitecture.txt, salesforce-ai-ide-detailed.md
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Multi-Agent System Architecture (Detailed)</h2>
      <p className="text-gray-700 mb-4">
        The Salesforce AI IDE leverages a sophisticated multi-agent system to tackle complex development projects. This system employs specialized AI agents that collaborate, each contributing its unique expertise to achieve a common goal. The orchestration of these agents is managed by the Flow System and a dedicated Execution Manager.
      </p>

      <div className="mb-8 p-4 bg-white rounded-lg shadow border border-gray-200">
        <h3 className="text-xl font-bold text-gray-700 mb-3">Specialized Agent Types & Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Architect Agent */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-700 mb-1">Architect Agent</h4>
            <p className="text-xs text-gray-600 mb-2"><strong>Purpose:</strong> Analyzes project requirements, designs system architecture, breaks down projects into user stories/tasks, and creates detailed technical plans.</p>
            <strong className="text-xs text-gray-500">Capabilities:</strong>
            <ul className="list-disc ml-4 text-xs text-gray-600 space-y-0.5 mt-1">
              <li>Requirement Elicitation & Analysis.</li>
              <li>User Story and Epic Generation from high-level descriptions.</li>
              <li>System Architecture Design (component breakdown, data models, integrations).</li>
              <li>Technical Dependency Identification.</li>
              <li>Creating Implementation Specifications for Developer Agents.</li>
              <li>Suggesting appropriate Salesforce features and patterns (e.g., when to use Flows vs. Apex).</li>
            </ul>
             <p className="text-2xs text-gray-400 mt-1">System Prompt Focus: Systematic thinking, Salesforce best practices, detailed technical specifications.</p>
          </div>
          {/* Developer Agent */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-700 mb-1">Developer Agent</h4>
            <p className="text-xs text-gray-600 mb-2"><strong>Purpose:</strong> Implements code (Apex, LWC, etc.) based on technical specifications from the Architect Agent or direct user input.</p>
            <strong className="text-xs text-gray-500">Capabilities:</strong>
            <ul className="list-disc ml-4 text-xs text-gray-600 space-y-0.5 mt-1">
              <li>Writing Apex classes, triggers, batch jobs, queueables.</li>
              <li>Developing Lightning Web Components (HTML, JS, CSS).</li>
              <li>Implementing business logic according to specifications.</li>
              <li>Writing SOQL queries and DML statements (bulkified).</li>
              <li>Refactoring and optimizing existing code.</li>
              <li>Generating unit tests for its own code.</li>
              <li>Documenting code with comments and ApexDoc.</li>
            </ul>
            <p className="text-2xs text-gray-400 mt-1">System Prompt Focus: High-quality, well-documented, efficient, maintainable Salesforce code.</p>
          </div>
          {/* QA Agent */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-700 mb-1">QA Agent (Quality Assurance)</h4>
            <p className="text-xs text-gray-600 mb-2"><strong>Purpose:</strong> Ensures code quality, test coverage, and adherence to requirements by designing and executing tests.</p>
            <strong className="text-xs text-gray-500">Capabilities:</strong>
            <ul className="list-disc ml-4 text-xs text-gray-600 space-y-0.5 mt-1">
              <li>Creating test plans and comprehensive test cases.</li>
              <li>Generating/writing Apex unit tests with robust assertions.</li>
              <li>Verifying implementations against user story acceptance criteria.</li>
              <li>Identifying edge cases, potential bugs, and performance bottlenecks.</li>
              <li>Suggesting improvements for reliability and code maintainability.</li>
              <li>Performing static code analysis (via integrated tools or AI).</li>
            </ul>
            <p className="text-2xs text-gray-400 mt-1">System Prompt Focus: Thorough testing, edge case identification, detailed test reports.</p>
          </div>
          {/* Documentation Agent */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-700 mb-1">Documentation Agent</h4>
            <p className="text-xs text-gray-600 mb-2"><strong>Purpose:</strong> Creates and maintains comprehensive technical and user-facing documentation for the project.</p>
            <strong className="text-xs text-gray-500">Capabilities:</strong>
            <ul className="list-disc ml-4 text-xs text-gray-600 space-y-0.5 mt-1">
              <li>Generating ApexDoc for classes and methods.</li>
              <li>Creating user guides and reference materials based on features.</li>
              <li>Documenting system architecture and design decisions from Architect Agent.</li>
              <li>Producing end-user training materials or FAQs.</li>
              <li>Summarizing complex logic (e.g., from Flows or Apex) into plain language.</li>
            </ul>
            <p className="text-2xs text-gray-400 mt-1">System Prompt Focus: Clarity, accuracy, completeness, user-friendliness of documentation.</p>
          </div>
           {/* Deployment & DevOps Agent */}
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-700 mb-1">Deployment & DevOps Agent</h4>
            <p className="text-xs text-gray-600 mb-2"><strong>Purpose:</strong> Manages the deployment lifecycle, assists with version control, and helps implement DevOps best practices for Salesforce projects.</p>
            <strong className="text-xs text-gray-500">Capabilities:</strong>
            <ul className="list-disc ml-4 text-xs text-gray-600 space-y-0.5 mt-1">
              <li>Validating metadata and preparing deployment packages (SFDX source, change sets).</li>
              <li>Executing deployments to various Salesforce environments (sandboxes, production) with pre/post steps.</li>
              <li>Assisting with Git operations (branching strategies, merging, pull requests).</li>
              <li>Generating scripts for CI/CD pipelines (e.g., GitHub Actions, Jenkins for Salesforce).</li>
              <li>Monitoring deployment status, reporting errors with AI-suggested fixes, and assisting with rollback plans.</li>
              <li>Advising on environment management and release strategies.</li>
            </ul>
            <p className="text-2xs text-gray-400 mt-1">System Prompt Focus: Reliable deployments, version control best practices, CI/CD automation.</p>
          </div>
          {/* Security Analyst Agent */}
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <h4 className="font-bold text-teal-700 mb-1">Security Analyst Agent</h4>
            <p className="text-xs text-gray-600 mb-2"><strong>Purpose:</strong> Focuses on identifying security vulnerabilities in code and configuration, ensuring adherence to Salesforce security best practices.</p>
            <strong className="text-xs text-gray-500">Capabilities:</strong>
            <ul className="list-disc ml-4 text-xs text-gray-600 space-y-0.5 mt-1">
              <li>Scanning Apex code for common vulnerabilities (SOQL Injection, XSS in LWC, FLS/CRUD violations, insecure API calls).</li>
              <li>Reviewing Salesforce configurations (sharing rules, profiles, permission sets) for potential over-exposure of data.</li>
              <li>Suggesting secure coding practices and concrete remediation steps for identified vulnerabilities.</li>
              <li>Assisting with Salesforce Shield setup (Platform Encryption, Event Monitoring, Field Audit Trail) and configuration queries.</li>
              <li>Generating security assessment reports based on scans and reviews.</li>
              <li>Advising on secure API integration practices.</li>
            </ul>
             <p className="text-2xs text-gray-400 mt-1">System Prompt Focus: Proactive security, vulnerability detection, Salesforce security standards.</p>
          </div>
        </div>
      </div>

      <CollapsibleSection title="Multi-Agent Project Workflow & Coordination" sectionId="multiAgentWorkflow" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-gray-700 mb-3 text-sm">
          Complex projects are managed via a collaborative workflow, orchestrated by the system and guided by user approvals.
        </p>
        <ol className="list-decimal ml-5 text-gray-600 space-y-3 text-sm">
          <li>
            <strong>Project Analysis & Planning (Architect Agent):</strong>
            <ul className="list-disc ml-5 text-xs mt-1">
              <li>User submits high-level project requirements or goals.</li>
              <li>Architect Agent analyzes these, clarifies ambiguities (potentially via Q&A with user), and breaks the project into discrete user stories or technical tasks.</li>
              <li>Identifies dependencies between stories/tasks and suggests a logical sequence.</li>
              <li>Creates initial technical specifications for key components.</li>
              <li>Presents this project plan (stories, dependencies, high-level design) to the user for review and approval.</li>
            </ul>
          </li>
          <li>
            <strong>Task Allocation & Prioritization (System/User):</strong>
            <ul className="list-disc ml-5 text-xs mt-1">
              <li>Based on the approved plan, user stories/tasks are assigned to the most appropriate specialized agents (e.g., code implementation to Developer Agent, test case design to QA Agent).</li>
              <li>User can adjust priorities and assignments.</li>
              <li>Token budgets or resource estimates might be allocated per major task.</li>
            </ul>
          </li>
          <li>
            <strong>Coordinated Execution (Multiple Agents, Flow Orchestration):</strong>
            <ul className="list-disc ml-5 text-xs mt-1">
              <li>Agents execute their assigned tasks sequentially or in parallel (where dependencies allow), using the Flow System.</li>
              <li>Outputs from one agent (e.g., Architect's design document) become inputs for another (e.g., Developer Agent).</li>
              <li>Developer Agent writes code, unit tests. Checkpoints are created.</li>
              <li>QA Agent designs and executes tests against the developed code. Reports bugs or issues back to the Developer Agent for fixes (iterative loop).</li>
              <li>Security Analyst Agent might perform scans at predefined stages or on demand.</li>
              <li>User is prompted for approval before critical actions like committing code changes generated by an agent, or deploying components.</li>
            </ul>
          </li>
          <li>
            <strong>Documentation (Documentation Agent):</strong>
            <ul className="list-disc ml-5 text-xs mt-1">
              <li>The Documentation Agent generates/updates technical documentation, user guides, and API references based on the implemented features and code.</li>
            </ul>
          </li>
          <li>
            <strong>Verification, Integration & Deployment (QA, Deployment Agents, User):</strong>
            <ul className="list-disc ml-5 text-xs mt-1">
              <li>QA Agent performs final validation and regression testing.</li>
              <li>Deployment Agent prepares the deployment package, performs validation deployments (dry runs).</li>
              <li>User gives final authorization for deployment to the target Salesforce org.</li>
              <li>Deployment Agent executes the deployment and reports status.</li>
            </ul>
          </li>
        </ol>
      </CollapsibleSection>

      <CollapsibleSection title="User Approval Workflow in Multi-Agent System" sectionId="userApprovalMultiAgent" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-gray-700 mb-3 text-sm">
          To ensure the developer remains in full control, the multi-agent system incorporates explicit user approval steps at critical junctures.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 text-sm mb-1">1. Plan Approval</h5>
                <ul className="list-disc ml-4 text-xs text-gray-600">
                    <li>Architect Agent presents the project breakdown (stories, tasks, dependencies) for user review.</li>
                    <li>User can modify, add, remove, or reprioritize items in the plan.</li>
                    <li>The approved plan forms the basis for subsequent agent actions.</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 text-sm mb-1">2. Implementation (Code Change) Approval</h5>
                <ul className="list-disc ml-4 text-xs text-gray-600">
                    <li>Before Developer Agent (or any agent) modifies or creates files, the proposed changes (diff view) are presented.</li>
                    <li>User reviews the code, can request modifications from the agent, or approve the changes.</li>
                    <li>Checkpoints are typically created before and after approved changes.</li>
                </ul>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 text-sm mb-1">3. Test Execution & Plan Approval</h5>
                <ul className="list-disc ml-4 text-xs text-gray-600">
                    <li>QA Agent may present a test plan (test cases, scope) for complex features for user review.</li>
                    <li>User approves test execution. Test results (pass/fail, coverage) are presented for review.</li>
                    <li>Failed tests may trigger remediation suggestions from QA or Developer agents, requiring further approval for fixes.</li>
                </ul>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-700 text-sm mb-1">4. Deployment Approval</h5>
                <ul className="list-disc ml-4 text-xs text-gray-600">
                    <li>Deployment Agent presents the final deployment plan (components, target org, validation results/dry run).</li>
                    <li>User reviews pre-deployment checks and authorizes the actual deployment to the Salesforce org.</li>
                </ul>
            </div>
        </div>
      </CollapsibleSection>
      <CollapsibleSection title="Agent Registry and Execution Manager Implementation Snippets (Conceptual)" sectionId="agentRegistryCode" expandedSection={expandedSection} toggleSection={toggleSection}>
        <p className="text-sm text-gray-600 mb-2">Conceptual TypeScript structure for Agent Registry and Execution Manager, based on descriptions in `salesforce-ai-ide-detailed.md`.</p>
        <pre className="text-xs bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-[600px]">
{`// --- AgentRegistry (Conceptual) ---
// interface APIProvider { name: string; sendRequest: (options: any) => Promise<any>; /* ... */ }
// interface AgentCapability { id: string; name: string; description: string; }
// interface AgentConfig { id: string; name: string; description: string; systemPrompt: string; capabilities: AgentCapability[]; provider?: APIProvider; }
// interface AgentInstance { config: AgentConfig; provider: APIProvider; }

class AgentRegistry {
  private static instance: AgentRegistry;
  private agents: Map<string, AgentConfig> = new Map();
  private defaultProvider?: APIProvider; // Assume APIProvider is defined

  private constructor() { this.registerBuiltInAgents(); }
  public static getInstance(): AgentRegistry { /* Singleton logic */ return AgentRegistry.instance || (AgentRegistry.instance = new AgentRegistry()); }
  public setDefaultProvider(provider: APIProvider): void { this.defaultProvider = provider; }
  public registerAgent(config: AgentConfig): void { this.agents.set(config.id, config); }
  public getAgent(id: string): AgentConfig | undefined { return this.agents.get(id); }
  public listAgents(): AgentConfig[] { return Array.from(this.agents.values()); }

  public createAgentInstance(id: string, providerOverride?: APIProvider): AgentInstance {
    const agentConfig = this.getAgent(id);
    if (!agentConfig) throw new Error(\`Agent not found: \${id}\`);
    const selectedProvider = providerOverride || agentConfig.provider || this.defaultProvider;
    if (!selectedProvider) throw new Error(\`No API provider available for agent: \${id}\`);
    return { config: agentConfig, provider: selectedProvider };
  }

  private registerBuiltInAgents(): void {
    this.registerAgent({
      id: 'architect', name: 'Architect Agent', description: 'Designs system architecture...',
      systemPrompt: 'You are an expert software architect...',
      capabilities: [{ id: 'project_breakdown', name: 'Project Breakdown', description: '...'}]
    });
    this.registerAgent({
      id: 'developer', name: 'Developer Agent', description: 'Implements code...',
      systemPrompt: 'You are an expert Salesforce developer...',
      capabilities: [{ id: 'code_implementation', name: 'Code Implementation', description: '...'}]
    });
    // ... register QA, Documentation, Deployment, Security, Data Agents ...
  }
}

// --- TaskPlanner (Conceptual) ---
// interface UserStory { id: string; title: string; description: string; acceptanceCriteria: string[]; priority: string; complexity: string; assignedAgent?: string; }
// interface ProjectBreakdown { stories: UserStory[]; dependencies: Record<string, string[]>; }

class TaskPlanner {
  private agentRegistry: AgentRegistry;
  private provider: APIProvider; // AI provider for the planner itself (e.g., Architect Agent uses this)

  constructor(providerForPlanner: APIProvider) {
    this.agentRegistry = AgentRegistry.getInstance();
    this.provider = providerForPlanner;
  }

  public async breakdownProject(projectDescription: string): Promise<ProjectBreakdown> {
    const architectInstance = this.agentRegistry.createAgentInstance('architect', this.provider);
    const prompt = \`Analyze the project: "\${projectDescription}". Break it down into user stories (title, desc, AC, priority, complexity) and dependencies. Format as JSON: { stories: [...], dependencies: {...} }.\`;
    const response = await architectInstance.provider.sendRequest({ systemPrompt: architectInstance.config.systemPrompt, prompt });
    // Simplified parsing
    try { return JSON.parse(response.text.match(/\\{\\s*"stories":/) ? response.text.substring(response.text.indexOf('{')) : '{}'); }
    catch (e) { console.error("Failed to parse breakdown:", e); return { stories: [], dependencies: {} }; }
  }
  // ... assignAgentsToStories, determineOptimalAgent methods ...
}

// --- ExecutionManager & Story Execution Flow (Conceptual) ---
// interface StoryContext { story: UserStory; projectContext: string; codeArtifacts: Record<string, string>; outputs: Record<string, any>; status: string; agentInstance: AgentInstance; }
// Assume AsyncFlow, AsyncNode, TokenManager are defined as in the Flow System Tab

class ExecutionManager {
  private agentRegistry: AgentRegistry;
  private tokenManager: TokenManager; // Assume TokenManager is defined
  // private taskExecutor: TaskExecutor; // If using a generic task executor

  constructor(private defaultProvider: APIProvider) {
    this.agentRegistry = AgentRegistry.getInstance();
    this.tokenManager = TokenManager.getInstance();
    // this.taskExecutor = TaskExecutor.getInstance();
  }

  public async executeStory(story: UserStory, projectContext: string, /* onProgress */): Promise<any /*ExecutionResult*/> {
    const agentId = story.assignedAgent || 'developer';
    const agentInstance = this.agentRegistry.createAgentInstance(agentId, this.defaultProvider);
    const storySharedContext: StoryContext = { story, projectContext, codeArtifacts: {}, outputs: {}, status: 'pending', agentInstance };

    const storyExecutionFlow = this.buildStoryExecutionFlow(story, agentInstance); // Pass agent

    try {
      storySharedContext.status = 'in_progress';
      // onProgress(10, 'Story execution started');
      await storyExecutionFlow.runAsync(storySharedContext); // Pass shared context to the flow
      storySharedContext.status = 'completed';
      // onProgress(100, 'Story execution completed');
      return { storyId: story.id, success: true, outputs: storySharedContext.outputs };
    } catch (error) {
      storySharedContext.status = 'failed';
      // onProgress(100, 'Story execution failed');
      return { storyId: story.id, success: false, outputs: storySharedContext.outputs, error: String(error) };
    }
  }

  private buildStoryExecutionFlow(story: UserStory, agentInstance: AgentInstance): AsyncFlow<StoryContext> {
    const flow = new AsyncFlow<StoryContext>(\`FlowFor-\${story.id}\`);
    // Nodes specific to the agent's capabilities and story type
    const understandNode = new UnderstandStoryNode_AgentSpecific("UnderstandStory", agentInstance);
    const planNode = new PlanImplementationNode_AgentSpecific("PlanImplementation", agentInstance);
    // ... more nodes like Implement, Test, Finalize ...

    flow.startWith(understandNode).then(planNode); // Chain nodes
    return flow;
  }
}

// Example Agent-Specific Node
class UnderstandStoryNode_AgentSpecific extends AsyncNode<StoryContext> {
  private agentInstance: AgentInstance;
  constructor(name: string, agentInstance: AgentInstance) { super(name); this.agentInstance = agentInstance; }

  async execAsync(prepRes: any, shared: StoryContext): Promise<any> { // prepRes might be passed from flow.prep
    const { story, projectContext } = shared;
    const prompt = \`As \${this.agentInstance.config.name}, understand this story: \${story.title} - \${story.description}. Context: \${projectContext}. What are key components, tech, approach, challenges?\`;
    const response = await this.agentInstance.provider.sendRequest({
      systemPrompt: this.agentInstance.config.systemPrompt, prompt, temperature: 0.7
    });
    shared.outputs.understanding = response.text; // Store in shared context
    // TokenManager.getInstance().recordUsage(...);
    return "understood"; // Action for flow branching
  }
}
// Other agent-specific nodes (PlanImplementationNode_AgentSpecific, etc.) would be similar
`}
        </pre>
      </CollapsibleSection>
    </div>
  );

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-xl min-h-screen p-2">
      <div className="p-4 bg-white rounded-t-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Salesforce AI IDE - Deep Dive</h1>
      </div>
      <div className="flex flex-wrap border-b border-gray-300 bg-white shadow-sm sticky top-0 z-10">
        {[
          { id: 'introduction', label: 'Introduction' },
          { id: 'principlesArchitecture', label: 'Overall Architecture & Principles' },
          { id: 'aiAssistantArchitecture', label: 'AI Assistant Architecture (Detailed)' },
          { id: 'flowSystem', label: 'Flow System (TypeScript)' },
          { id: 'packageStructure', label: 'Package Structure' },
          { id: 'implementationPlan', label: 'Implementation Plan (Detailed)' },
          { id: 'userStories', label: 'User Stories & Epics (Detailed)' },
          { id: 'multiAgentSystem', label: 'Multi-Agent System (Detailed)' },
        ].map(tab => (
          <button
            key={tab.id}
            className={`px-3 py-3 font-medium text-xs sm:text-sm focus:outline-none transition-colors duration-150 whitespace-nowrap
              ${activeTab === tab.id
                ? 'text-blue-700 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:border-b-2'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-6 overflow-auto bg-gray-50 rounded-b-lg shadow-inner mt-1 flex-grow">
        {activeTab === 'introduction' && renderIntroduction()}
        {activeTab === 'principlesArchitecture' && renderKeyDesignPrinciplesAndArchitecture()}
        {activeTab === 'aiAssistantArchitecture' && renderAiAssistantArchitectureDetailed()}
        {activeTab === 'flowSystem' && renderFlowSystemTypescript()}
        {activeTab === 'packageStructure' && renderPackageStructure()}
        {activeTab === 'implementationPlan' && renderImplementationPlanDetailed()}
        {activeTab === 'userStories' && renderUserStoriesDetailed()}
        {activeTab === 'multiAgentSystem' && renderMultiAgentSystemDetailed()}
      </div>
      <footer className="text-center p-3 text-xs text-gray-500 mt-auto bg-white border-t border-gray-200">
        This is a detailed synthesis based on the provided Salesforce AI IDE documentation. Citations refer to source snippets from the uploaded files.
      </footer>
    </div>
  );
}