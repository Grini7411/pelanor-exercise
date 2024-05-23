import type { Edge, EdgeTypes } from "reactflow";
import {users} from "../users/users.ts";
import {queries} from "../queries/query.ts";


const getUserEdge = (): Edge[] => {
    const newUsersEdges: Edge[] = [];

    users.forEach((user) => {
        const edgeToUser: Edge = {
            id: `user-info->${user.id}`,
            source: "user-info",
            sourceHandle: user.id,
            target: user.id,
            animated: true
        };

        const edgeFromUser: Edge = {
            id: `${user.id}->pelanor-data`,
            source: user.id,
            target: "pelanor-data",
            animated: false,
        }
        newUsersEdges.push(edgeToUser, edgeFromUser);
    });

    return newUsersEdges;
}

const getQueryEdge = (): Edge[] => {
    const newQueryEdges: Edge[] = [];

    queries.forEach((query) => {
        const edgeToQuery: Edge = {
            id: `user-info->${query.id}`,
            source: "user-info",
            sourceHandle: query.id,
            target: query.id,
            animated: true
        };

        const edgeFromQuery: Edge = {
            id: `${query.id}->user-db`,
            source: query.id,
            target: "user-db",
            animated: false,
        }
        newQueryEdges.push(edgeToQuery, edgeFromQuery);
    });

    return newQueryEdges;
}


export const initialEdges = [
    { id: "prod-cluster->user-info", source: "prod-cluster", target: "user-info"},
    { id: "prod-cluster->analytics-data", source: "prod-cluster", target: "analytics-data" , animated: true},
    ...getUserEdge(),
    ...getQueryEdge()


] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
