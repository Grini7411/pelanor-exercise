import {Node, NodeTypes, Position} from "reactflow";
import {PositionLoggerNode} from "./PositionLoggerNode";
import {UserFileNode} from "./components/UserFileNode.tsx";
import {users} from "../users/users.ts";
import {UserInfoNode} from "./components/UserInfoNode.tsx";
import {queries} from "../queries/query.ts";

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "user-file": UserFileNode,
  "user-info": UserInfoNode,
} satisfies NodeTypes;

export const getUsersNodes = () => {
  return users.map((user, index) => {
    return {
      id: user.id,
      targetPosition: Position.Top,
      data: { label: user.path},
      position: { x: index * 150 - 250, y: 200 }
    }
  })
}

export const getQueryNodes = () => {
  return queries.map((query, index) => {
    return {
      id: query.id,
      targetPosition: Position.Top,
      data: { label: query.text },
      position: { x: (index+1) * 400 - 250, y: 200 }
    }
  })
}

export const initialNodes = [
  {
    id: "prod-cluster",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "pelanor-production-cluster (ECS-Cluster)" } },
  {
    id: "user-info",
    position: { x: -100, y: 100 },
    type: "user-info",
    data: { label: "user-info (ECS-Service)", users, queries }
  },
  {
    id: "analytics-data",
    position: { x: 100, y: 100 },
    data: { label: "analytics-data (ECS-Service)" },
  },
  ...getUsersNodes(),
  {
    id: "pelanor-data",
    position: { x: -100, y: 400 },
    targetPosition: Position.Top,
    data: { label: "pelanor-data (S3-bucket)" },
  },
  ...getQueryNodes(),
  {
    id: "user-db",
    position: { x: 400, y: 400 },
    targetPosition: Position.Top,
    data: { label: "user-db (RDS database)" },
  }
] satisfies Node[];


