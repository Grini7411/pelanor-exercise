import {Handle, type NodeProps, Position} from "reactflow";

export type UserFileNodeData = {
    label?: string;
    id: string;
}

export function UserFileNode(props: NodeProps<UserFileNodeData>) {
    return (
        <div>
            <Handle type="target" key={props.data.id} position={Position.Top}/>
            {props?.data?.label && <h3>{props.data.label}</h3>}
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}