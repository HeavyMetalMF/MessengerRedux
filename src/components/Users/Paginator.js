import React, {useState} from "react";
import c from "./Users.module.css";
import cn from 'classnames'

/* 0 5 10 */

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let leftPortionPageNumber2 = (portionNumber * props.portionSize) - 5;
    let rightPortionNumber = portionNumber * props.portionSize;

    return (
        <div>
            {
                portionNumber > 1 ? <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Назад</button> : ''
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                return <span className={cn({[c.selectedPage]: props.currentPage === p}, c.pageNumber)}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber ? <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Вперед</button> : ''}
        </div>
    )
}

export default Paginator;