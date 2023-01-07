import React, { useState, useRef } from "react";

export const DragNDrop = ({ data }) => {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log('drag start', params);
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnd = () => {
        console.log('ending drag..');
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragNode.current = null;
        dragItem.current = null;
    }

    const handleDragEnter = (e,params) => {
        console.log("entering drag..", params);
        const currentItem =dragItem.current;
        if (e.target !== dragNode.current) {
            console.log('target is not same');
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.grpI].items.splice(params.grpI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]);
                dragItem.current = params;
                return newList;
            })
        }
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item';
        }
        return 'dnd-item';
    }

    return (
        <div className='drag-n-drop'>
            {list.map((grp, grpI) => (
                <div
                    key={grp.title}
                    className='dnd-group'
                    onDragEnter={dragging && !grp.items.length?(e)=>{handleDragEnter(e,{grpI,item:0})} :null}
                >
                    <div className='group-title'> {grp.title}</div>
                    {grp.items.map((item, itemI) => (
                        <div
                            draggable
                            onDragStart={(e) => { handleDragStart(e, { grpI, itemI }) }}
                            onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI })} : null}
                            key={item}
                            className={dragging ? getStyles({ grpI, itemI }) : 'dnd-item'}>
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )

}

export default DragNDrop;