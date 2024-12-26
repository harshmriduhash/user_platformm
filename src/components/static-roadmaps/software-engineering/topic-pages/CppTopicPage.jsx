import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import nodeComponents from '../node-components/cpp';
import { Highlight, themes } from "prism-react-renderer";

const CppTopicPage = () => {
  const { topicSlug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log('Topic Slug:', topicSlug);
  console.log('Available Components:', Object.keys(nodeComponents));
  
  const topic = nodeComponents[topicSlug];
  
  if (!topic) {
    console.log('Topic not found for slug:', topicSlug);
    return (
      <div className="min-h-screen pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-500">Topic not found: {topicSlug}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-4 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/roadmap/software-engineer/cpp"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to C++ Roadmap
        </Link>

        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            {topic.title}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {topic.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Concept Overview */}
            {topic.conceptOverview && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-4">Concept Overview</h2>
                <p className="text-gray-300 mb-4">{topic.conceptOverview.introduction}</p>
                <div className="space-y-2">
                  {topic.conceptOverview.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      {takeaway}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Roadmap Fit */}
            {topic.roadmapFit && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-4">How It Fits in the Roadmap</h2>
                <p className="text-gray-300 mb-4">{topic.roadmapFit.description}</p>
                <div className="space-y-2">
                  {topic.roadmapFit.connections.map((connection, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      {connection}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Sections */}
            {topic.sections?.map((section, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Syntax Guide */}
            {topic.syntaxGuide && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700">
                <h2 className="text-xl font-semibold text-white p-6 pb-4">{topic.syntaxGuide.title}</h2>
                <div className="space-y-6 p-6 pt-0">
                  {topic.syntaxGuide.examples.map((example, index) => (
                    <div key={index} className="space-y-2">
                      {/* Code Editor Container */}
                      <div className="rounded-lg overflow-hidden border border-gray-700">
                        {/* Editor Title Bar */}
                        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-sm text-gray-400 ml-2">{example.title}</span>
                          </div>
                          <div className="text-sm text-gray-500">C++</div>
                        </div>
                        
                        {/* Code Content */}
                        <div className="bg-[#1e1e1e] p-4 font-mono text-sm overflow-x-auto">
                          <Highlight
                            code={example.code}
                            language="cpp"
                            theme={themes.vsDark}
                          >
                            {({ tokens, getLineProps, getTokenProps }) => (
                              <pre className="flex" style={{ margin: 0, padding: 0 }}>
                                {/* Line Numbers */}
                                <div className="select-none pr-4 text-gray-500 text-right" style={{ minWidth: '2.5em' }}>
                                  {tokens.map((_, i) => (
                                    <div key={i} style={{ lineHeight: '1.5' }}>{i + 1}</div>
                                  ))}
                                </div>
                                
                                {/* Code */}
                                <div className="overflow-x-auto flex-1 text-[#d4d4d4]">
                                  {tokens.map((line, i) => (
                                    <div 
                                      key={i} 
                                      {...getLineProps({ line })} 
                                      style={{ 
                                        display: 'flex',
                                        lineHeight: '1.5',
                                        whiteSpace: 'pre'
                                      }}
                                    >
                                      {line.map((token, key) => (
                                        <span 
                                          key={key} 
                                          {...getTokenProps({ token })}
                                          style={{ 
                                            ...getTokenProps({ token }).style,
                                            fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
                                          }} 
                                        />
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </pre>
                            )}
                          </Highlight>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Pitfalls */}
            {topic.commonPitfalls && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-4">{topic.commonPitfalls.title}</h2>
                <div className="space-y-4">
                  {topic.commonPitfalls.mistakes.map((mistake, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-red-400 font-medium">{mistake.issue}</h3>
                      <p className="text-gray-300">{mistake.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Learning Resources */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">
                Learning Resources
              </h2>
              <div className="space-y-4">
                {topic.resources?.map((resource, index) => {
                  const Icon = resource.icon;
                  const typeColors = {
                    video: 'hover:bg-red-900/50 hover:text-red-400 hover:border-red-700/50',
                    practice: 'hover:bg-green-900/50 hover:text-green-400 hover:border-green-700/50',
                    tutorial: 'hover:bg-blue-900/50 hover:text-blue-400 hover:border-blue-700/50',
                    documentation: 'hover:bg-purple-900/50 hover:text-purple-400 hover:border-purple-700/50'
                  };
                  
                  return (
                    <div key={index} className="flex flex-col items-start">
                      {resource.note && (
                        <p className="text-xs text-gray-400 mb-1 italic self-start">
                          {resource.note}
                        </p>
                      )}
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center gap-3 p-3 rounded-lg border border-transparent
                          bg-gray-700/50 transition-all duration-200 text-gray-300
                          ${typeColors[resource.type]}`}
                      >
                        <Icon className={`w-5 h-5 ${
                          resource.type === 'video' ? 'text-red-400' :
                          resource.type === 'practice' ? 'text-green-400' :
                          resource.type === 'tutorial' ? 'text-blue-400' :
                          'text-purple-400'
                        }`} />
                        <span>{resource.title}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interview Questions */}
            {topic.interviewQuestions && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-4">{topic.interviewQuestions.title}</h2>
                <div className="space-y-6">
                  {topic.interviewQuestions.questions.map((question, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-cyan-400 font-medium">{question.q}</h3>
                      <p className="text-gray-300">{question.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppTopicPage; 