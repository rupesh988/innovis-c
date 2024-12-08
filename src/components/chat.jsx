import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Handle,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { 
  Trash2, Edit, Plus, Save, FileText, PlayCircle, 
  StopCircle, FileCheck, Target, Clock, Users, 
  Sigma, MessageCircle, Briefcase, Database, Server 
} from 'lucide-react';

const nodeTypes = [
  { type: 'project', label: 'Project', icon: Briefcase },
  { type: 'milestone', label: 'Milestone', icon: Target },
  { type: 'task', label: 'Task', icon: FileCheck },
  { type: 'decision', label: 'Decision', icon: Sigma },
  { type: 'meeting', label: 'Meeting', icon: Users },
  { type: 'communication', label: 'Communication', icon: MessageCircle },
  { type: 'timeline', label: 'Timeline', icon: Clock },
  { type: 'resource', label: 'Resource', icon: Database },
  { type: 'system', label: 'System', icon: Server },
  { type: 'process', label: 'Process', icon: PlayCircle }
];

const initialNodes = [
  { 
    id: '1', 
    type: 'project', 
    data: { 
      label: 'New Project', 
      description: 'Project kickoff and initial planning',
      status: 'Not Started'
    }, 
    position: { x: 250, y: 50 } 
  },
];

const initialEdges = [];
let id = 2;

const Flowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Custom node rendering
  const customNodes = Object.fromEntries(
    nodeTypes.map(nodeType => [
      nodeType.type, 
      ({ data }) => (
        <div 
          className={`p-4 border-2 rounded-lg shadow-md text-center 
            ${nodeType.type === 'project' ? 'border-blue-500 bg-blue-50' :
              nodeType.type === 'milestone' ? 'border-green-500 bg-green-50' :
              nodeType.type === 'task' ? 'border-purple-500 bg-purple-50' :
              nodeType.type === 'decision' ? 'border-orange-500 bg-orange-50' :
              nodeType.type === 'meeting' ? 'border-yellow-500 bg-yellow-50' :
              'border-gray-500 bg-gray-50'
            }`}
        >
          <nodeType.icon className="mx-auto mb-2" />
          <div className="font-bold">{data.label}</div>
          {data.description && (
            <div className="text-sm text-gray-600 mt-1">{data.description}</div>
          )}
          {data.status && (
            <div className={`text-xs mt-1 font-semibold 
              ${data.status === 'Not Started' ? 'text-gray-500' :
                data.status === 'In Progress' ? 'text-yellow-600' :
                'text-green-600'
              }`}
            >
              Status: {data.status}
            </div>
          )}
          <Handle type="target" position="top" className="w-2 h-2 left-1/2" />
          <Handle type="source" position="bottom" className="w-2 h-2 left-1/2" />
        </div>
      )
    ])
  );

  // Add a new node
  const addNode = (type) => {
    const newNode = {
      id: `${id++}`,
      type,
      data: { 
        label: `New ${nodeTypes.find(n => n.type === type)?.label || 'Node'}`,
        description: 'Add description here',
        status: type === 'project' ? 'Not Started' : 'Pending'
      },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  // Handle edge creation
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );

  // Edit node
  const handleNodeEdit = (node) => {
    setSelectedNode(node);
    setModalOpen(true);
  };

  // Save node changes
  const saveNode = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id ? { ...node, data: selectedNode.data } : node
      )
    );
    setModalOpen(false);
    setSelectedNode(null);
  };

  // Delete node
  const deleteNode = (nodeId) => {
    setNodes((nds) => nds.filter(node => node.id !== nodeId));
    setModalOpen(false);
    setSelectedNode(null);
  };

  return (
    <div className="flex h-screen">
      {/* Node Type Sidebar */}
      <div className="w-1/6 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Node Types</h2>
        <div className="space-y-2">
          {nodeTypes.map((nodeType) => (
            <button
              key={nodeType.type}
              onClick={() => addNode(nodeType.type)}
              className={`w-full p-2 rounded-md flex items-center justify-start 
                ${nodeType.type === 'project' ? 'bg-blue-500 text-white' :
                  nodeType.type === 'milestone' ? 'bg-green-500 text-white' :
                  nodeType.type === 'task' ? 'bg-purple-500 text-white' :
                  'bg-gray-500 text-white'
                }`}
            >
              <nodeType.icon className="mr-2" size={20} />
              {nodeType.label}
            </button>
          ))}
        </div>
      </div>

      {/* React Flow Canvas */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodeTypes={customNodes}
          onNodeClick={(event, node) => handleNodeEdit(node)}
        >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>

      {/* Node Edit Modal */}
      {modalOpen && selectedNode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
              Edit Node
              <button 
                onClick={() => deleteNode(selectedNode.id)}
                className="text-red-600 hover:bg-red-100 p-2 rounded"
              >
                <Trash2 />
              </button>
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Label</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={selectedNode.data.label}
                onChange={(e) =>
                  setSelectedNode({ 
                    ...selectedNode, 
                    data: { ...selectedNode.data, label: e.target.value } 
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows="3"
                value={selectedNode.data.description}
                onChange={(e) =>
                  setSelectedNode({ 
                    ...selectedNode, 
                    data: { ...selectedNode.data, description: e.target.value } 
                  })
                }
              />
            </div>
            {selectedNode.type !== 'project' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={selectedNode.data.status}
                  onChange={(e) =>
                    setSelectedNode({ 
                      ...selectedNode, 
                      data: { ...selectedNode.data, status: e.target.value } 
                    })
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={saveNode}
                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 flex items-center"
              >
                <Save className="mr-2" /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flowchart;