

export type NodeContentItemData = {
    icon: string,
    type: string,
    itemTitle: string
}

export default function NodeContent({icon, type, itemTitle}: NodeContentItemData) {
    return (<div className="border border-solid rounded p-2">
        <div className="flex gap-2">
            {icon && <span>
                <img src={icon} alt=""/>
            </span>}
            <span className="text-blue-400">{type}</span>
        </div>
        <hr/>
        <div className="flex place-content-center">
            <span>{itemTitle}</span>
        </div>
    </div>)
}

