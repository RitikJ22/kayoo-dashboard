import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  ReactFlowInstance,
  Node,
  Edge,
  Connection,
  BackgroundVariant,
  XYPosition,
} from "reactflow";
import "reactflow/dist/style.css";
import "./style.css";
import { DndSideBar } from "./dnd-sidebar";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Header" },
    position: { x: 100, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

export const DnDFlow: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null);

  const onConnect = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeDoubleClick = (_event: React.MouseEvent, node: Node) => {
    const newLabel = prompt("Enter new label:", node.data.label);
    if (newLabel) {
      setNodes((nds) =>
        nds.map((n) =>
          n.id === node.id ? { ...n, data: { ...n.data, label: newLabel } } : n
        )
      );
    }
  };

  const handleAddNode = (_type: string, label: string) => {
    if (!reactFlowWrapper.current || !reactFlowInstance) return;

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const position: XYPosition = reactFlowInstance.project({
      x: Math.random() * (reactFlowBounds.width - 100),
      y: Math.random() * (reactFlowBounds.height - 100),
    });

    const newNode: Node = {
      id: getId(),
      type: "default",
      position,
      data: {
        label: selectedDropdown ? `${selectedDropdown} - ${label}` : label,
      },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div className="dndflow flex gap-5 items-center justify-center min-h-[450px]">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onNodeDoubleClick={onNodeDoubleClick}
            fitView
          >
            <Background color="#99b3ec" variant={BackgroundVariant.Lines} />
            <Controls />
          </ReactFlow>
        </div>
        <DndSideBar
          onAddNode={handleAddNode}
          setSelectedDropdown={setSelectedDropdown}
        />
      </ReactFlowProvider>
    </div>
  );
};
