import type {OnConnect} from "reactflow";
import {addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState,} from "reactflow";

import {useCallback} from "react";

import "reactflow/dist/style.css";

import {initialNodes, nodeTypes} from "./nodes";
import {edgeTypes, initialEdges} from "./edges";

export default function App() {
  const [nodes,, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView>
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
