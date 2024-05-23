import {Handle, NodeProps, Position} from "reactflow";
import {UserType} from "../../users/user.type.ts";
import {Query} from "../../queries/query.type.ts";
import {queries} from "../../queries/query.ts";
import {users} from "../../users/users.ts";
import {ReactNode} from "react";

export type UserInfoNodeData = {
    users: UserType[];
    label?: string;
    queries: Query[];
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
        <div>
            <Handle type="target" position={Position.Top}/>
            <div>{props.data.label}</div>
            {handleHandlers()}
        </div>
    );
}