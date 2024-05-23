import {Node, NodeTypes, Position} from "reactflow";
import {users} from "../users/users.ts";
import {UserInfoNode, UserInfoNodeData} from "./components/UserInfoNode.tsx";
import {queries} from "../queries/query.ts";
import {NodeWrapper, NodeWrapperData} from "./components/NodeWrapper.tsx";

export const nodeTypes = {
  "user-info": UserInfoNode,
  "node-wrapper": NodeWrapper
} satisfies NodeTypes;

export const getUsersNodes = () => {
  return users.map((user, index) => {
    return {
      id: user.id,
      targetPosition: Position.Top,
      data: { label: user.path},
      position: { x: index * 150 - 250, y: 250 }
    }
  })
}

export const getQueryNodes = () => {
  return queries.map((query, index) => {
    return {
      id: query.id,
      targetPosition: Position.Top,
      data: { label: query.text },
      position: { x: (index+3) * 150 - 250, y: 250 }
    }
  })
}

export const initialNodes = [
  {
    id: "prod-cluster",
    position: { x: -50, y: -100 },
    type: "node-wrapper",
    data: {
      isRoot: true,
      isLeaf: false,
      nodeConfig: {
        itemTitle: "pelanor-production-cluster",
        icon: '/assets/icons/ecs.svg',
        type: 'ECS-Cluster',
      },
      label: ''
    }
  },
  {
    id: "user-info",
    position: { x: -100, y: 100 },
    type: "user-info",
    data: {
      label: "",
      users,
      queries,
      nodeConfig: {
        itemTitle: "user-info",
        icon: '/assets/icons/ecs-service.svg',
        type: 'ECS-Service',
      },
    }
  },
  {
    id: "analytics-data",
    position: { x: 100, y: 100 },
    type: "node-wrapper",
    data: {
      label: "",
      isRoot: false,
      isLeaf: true,
      nodeConfig: {
        itemTitle: "analytics-data",
        icon: '/assets/icons/ecs-service.svg',
        type: 'ECS-Service',
      },
    },
  },
  ...getUsersNodes(),
  {
    id: "pelanor-data",
    position: { x: -100, y: 400 },
    targetPosition: Position.Top,
    type: "node-wrapper",
    data: {
      label: "",
      isRoot: false,
      isLeaf: true,
      nodeConfig: {
        itemTitle: "pelanor-data",
        icon: '/assets/icons/s3.svg',
        type: 'S3-bucket',
      },
    },
  },
  ...getQueryNodes(),
  {
    id: "user-db",
    position: { x: 300, y: 400 },
    targetPosition: Position.Top,
    type: "node-wrapper",
    data: {
      label: "",
      isRoot: false,
      isLeaf: true,
      nodeConfig: {
        itemTitle: "user-db",
        icon: '/assets/icons/rds.svg',
        type: 'RDS database',
      },
    },
  }
] satisfies Node<NodeWrapperData | UserInfoNodeData | unknown>[];


