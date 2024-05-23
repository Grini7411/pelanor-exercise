import {Handle, NodeProps, Position} from "reactflow";
import {User} from "../../users/user.ts";
import {Query} from "../../queries/query.type.ts";
import {queries} from "../../queries/query.ts";
import {users} from "../../users/users.ts";
import {ReactNode} from "react";
import NodeContent, {NodeContentItemData} from "../../components/NodeContent.tsx";

export type UserInfoNodeData = {
    users: User[];
    label?: string;
    queries: Query[];
    nodeConfig: NodeContentItemData;
}

export function UserInfoNode(props: NodeProps<UserInfoNodeData>) {
    const totalUsers = props.data.users.length;
    const totalQueries = props.data.queries.length;

    const handleHandlers = (): ReactNode[] =>{
        return [...users, ...queries].map((item, index) => {
            return <Handle type="source"
                    position={Position.Bottom}
                    key={`handle-${index}`}
                    id={item.id}
                    className={`handle-${index}-${totalUsers + totalQueries}`}/>
        })
    }

    return (
        <div className="border rounded p-2 border-solid">
            <Handle type="target" position={Position.Top}/>
            <div>{props.data.label}</div>
            <NodeContent icon={props.data.nodeConfig.icon}
                         type={props.data.nodeConfig.type}
                         itemTitle={props.data.nodeConfig.itemTitle}/>
            {handleHandlers()}
        </div>
    );
}