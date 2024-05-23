import {Handle, NodeProps, Position} from "reactflow";
import NodeContent, {NodeContentItemData} from "../../components/NodeContent.tsx";

export type NodeWrapperData = {
    isRoot: boolean;
    isLeaf: boolean;
    nodeConfig: NodeContentItemData;
}

export function NodeWrapper(props: NodeProps<NodeWrapperData>) {

    return (
        <>
            { props.data.isLeaf && <Handle type="target" position={Position.Top} />}
            <NodeContent type={props.data.nodeConfig.type}
                         itemTitle={props.data.nodeConfig.itemTitle}
                         icon={props.data.nodeConfig.icon}/>
            {props.data.isRoot && <Handle type="source" position={Position.Bottom} />}
        </>
    )
}