import React, { useState } from 'react';

export const Architecture: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const architectureLayers = [
    {
      step: '01',
      title: 'Presentation Layer',
      tech: 'Angular / Flutter',
      role: 'Client Interfaces & State Machines',
      detail:
        'Responsible solely for rendering UI, capturing user interaction, and communicating over HTTP/REST. Implements MVVM / Smart-Dumb component patterns to keep views decoupled from business logic.',
    },
    {
      step: '02',
      title: 'API & Gateway Boundary',
      tech: 'REST API',
      role: 'HTTP Contracts & Route Dispatching',
      detail:
        'Standardized HTTP contracts (RESTful verbs, RFC 7807 problem details, versioning, DTO validation, and token authentication) guarding system boundaries.',
    },
    {
      step: '03',
      title: 'Host & Controller Pipeline',
      tech: 'ASP.NET Core',
      role: 'Middleware, Routing & Request Lifecycle',
      detail:
        'Handles dependency injection container bootstrapping, middleware pipeline (logging, CORS, exception handling), and passes request models to the application service layer.',
    },
    {
      step: '04',
      title: 'Application / Service Layer',
      tech: 'Domain & Application Services',
      role: 'Business Rules & Transaction Orchestration',
      detail:
        'Coordinates business transactions, validates domain invariants, and depends strictly on abstractions rather than concrete database implementations (Dependency Inversion).',
    },
    {
      step: '05',
      title: 'Repository Layer',
      tech: 'Repository Pattern & ORM',
      role: 'Data Access Abstraction',
      detail:
        'Mediates between domain entities and database tables. Exposes pure asynchronous query interfaces (e.g. GetByIdAsync, AddAsync) without leaking SQL syntax into business logic.',
    },
    {
      step: '06',
      title: 'Persistence Engine',
      tech: 'PostgreSQL / SQL Server',
      role: 'ACID Storage & Relational Integrity',
      detail:
        'Provides relational schema enforcement, foreign key constraints, indexes, transaction isolation, and persistent audit logs.',
    },
  ];

  const architecturalConcepts = [
    {
      title: 'Clean Architecture',
      desc: 'Inner domain models remain independent of external frameworks, databases, or user interfaces.',
    },
    {
      title: 'SOLID Principles',
      desc: 'Single responsibility, open-closed, Liskov substitution, interface segregation, and dependency inversion.',
    },
    {
      title: 'Repository Pattern',
      desc: 'Encapsulates data access mechanisms behind strongly-typed collection interfaces.',
    },
    {
      title: 'Service Layer',
      desc: 'Defines the application boundary and establishes a set of available operations.',
    },
    {
      title: 'Dependency Injection',
      desc: 'Supplies required dependencies from outside a class, enabling modularity and high testability.',
    },
    {
      title: 'Separation of Concerns',
      desc: 'Divides the software program into distinct sections, where each section addresses a separate concern.',
    },
    {
      title: 'MVVM & MVC',
      desc: 'Structured UI architecture ensuring state management and user actions remain isolated from business calculations.',
    },
    {
      title: 'Unidirectional Data Flow',
      desc: 'Requests descend down explicit layer contracts, and results return via immutable data transfer objects.',
    },
  ];

  const codeSnippet = `public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(Guid id);
    Task AddAsync(Order order);
}

public class OrderService : IOrderService
{
    private readonly IOrderRepository _repository;

    public OrderService(IOrderRepository repository)
    {
        _repository = repository;
    }
}`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <section id="architecture" className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            08 &bull; Systems Design & Clean Code
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Software Architecture & Layered Flow
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Structuring systems for long-term maintainability through decoupling, explicit data contracts, and dependency inversion.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="mb-12">
          <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase mb-4">
            System Tier Hierarchy & Data Flow (Click layer for details)
          </h3>

          <div className="space-y-2.5 max-w-3xl">
            {architectureLayers.map((layer, index) => {
              const isSelected = activeLayer === index;
              const isLast = index === architectureLayers.length - 1;

              return (
                <React.Fragment key={layer.step}>
                  <div
                    onClick={() => setActiveLayer(isSelected ? null : index)}
                    className={`cursor-pointer p-4 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200/90 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded ${
                            isSelected ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-600 border border-slate-200'
                          }`}
                        >
                          {layer.step}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm sm:text-base">
                              {layer.title}
                            </h4>
                            <span
                              className={`text-xs font-mono px-2 py-0.5 rounded ${
                                isSelected ? 'bg-slate-800 text-blue-300' : 'bg-blue-50 text-blue-700'
                              }`}
                            >
                              {layer.tech}
                            </span>
                          </div>
                          <p
                            className={`text-xs mt-0.5 ${
                              isSelected ? 'text-slate-300' : 'text-slate-500'
                            }`}
                          >
                            {layer.role}
                          </p>
                        </div>
                      </div>

                      <i
                        className={`ri-arrow-down-s-line text-lg transition-transform ${
                          isSelected ? 'rotate-180 text-white' : 'text-slate-400'
                        }`}
                      />
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {layer.detail}
                      </div>
                    )}
                  </div>

                  {!isLast && (
                    <div className="flex justify-center py-0.5">
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                        <i className="ri-arrow-down-line" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Code Example: C# Dependency Inversion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Code Block Container */}
          <div className="lg:col-span-7 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden shadow-xs">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-300 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-slate-400">OrderService.cs — Dependency Inversion</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                title="Copy snippet to clipboard"
              >
                <i className={copied ? 'ri-check-line text-emerald-400' : 'ri-file-copy-line'} />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto text-slate-200 leading-relaxed">
              <code>
                <span className="text-blue-400">public interface</span>{' '}
                <span className="text-emerald-400">IOrderRepository</span>{'\n'}
                {'{'}{'\n'}
                {'    '}Task&lt;<span className="text-emerald-400">Order?</span>&gt;{' '}
                <span className="text-yellow-300">GetByIdAsync</span>(Guid id);{'\n'}
                {'    '}Task <span className="text-yellow-300">AddAsync</span>(<span className="text-emerald-400">Order</span> order);{'\n'}
                {'}'}{'\n\n'}
                <span className="text-blue-400">public class</span>{' '}
                <span className="text-emerald-400">OrderService</span> :{' '}
                <span className="text-emerald-400">IOrderService</span>{'\n'}
                {'{'}{'\n'}
                {'    '}<span className="text-blue-400">private readonly</span>{' '}
                <span className="text-emerald-400">IOrderRepository</span> _repository;{'\n\n'}
                {'    '}<span className="text-blue-400">public</span>{' '}
                <span className="text-yellow-300">OrderService</span>(
                <span className="text-emerald-400">IOrderRepository</span> repository){'\n'}
                {'    '}{'{'}{'\n'}
                {'        '}_repository = repository;{'\n'}
                {'    '}{'}'}{'\n'}
                {'}'}
              </code>
            </pre>
          </div>

          {/* Explanation Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/60">
              <h4 className="text-sm font-bold text-slate-950 flex items-center gap-2 mb-2">
                <i className="ri-cpu-line text-blue-600" />
                <span>Why Dependency Injection Matters</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                In this C# implementation, <code className="font-mono text-xs px-1 bg-white border border-slate-200 rounded">OrderService</code>{' '}
                depends strictly on the abstraction <code className="font-mono text-xs px-1 bg-white border border-slate-200 rounded">IOrderRepository</code>,
                not a direct database client or SQL Server context.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Mockability:</strong> Unit tests substitute the repository with an in-memory mock without running database engines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Decoupling:</strong> Database schema modifications or ORM replacements never leak into business calculations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Inversion of Control:</strong> The IoC container controls lifecycle and instance lifetimes (Transient, Scoped, Singleton).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architectural Principles Grid */}
        <div>
          <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase mb-4">
            Core Architectural Tenets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {architecturalConcepts.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-md border border-slate-200/90 bg-slate-50/40"
              >
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
