import React, { useRef, useEffect } from 'react'
import { appearOnIntersect } from '../../utils/appearOnIntersectLogic';

function WorkItem({ title, refName, content, titleDecorator = ['', ''] }) {

    const itemRef = useRef();

    useEffect(() => appearOnIntersect(itemRef, refName, 'fancify-work'), [])

    return (
        <>
            <div className="work-title">{titleDecorator[0]}{title}{titleDecorator[1]}</div>
            <p className={`work-description ${refName}`} ref={itemRef}>
                {content}
            </p>
        </>
    )
}

export default WorkItem;
