import React, { useState } from 'react';
import { useContext, useEffect } from "react";
import { RoommieContext } from "../roommieContext";
import InfiniteScroll from 'react-infinite-scroll-component';
import RoomieList from './RoomieList';
import Loading from "./Loading";

function RoommieStroller() {

    const context = useContext(RoommieContext)
    const { sortedRoommies} = context;

    const [count, setCount] = useState({
        prev: 0,
        next: 5
    })

    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(sortedRoommies.slice(count.prev, count.next))
    
   useEffect(() => {
        setCount(({ prev: 0, next: 5 }))
        setHasMore(true);
        setCurrent(sortedRoommies.slice(0, 5))
        
    }, [sortedRoommies])
    useEffect(() =>{
        if ((current.length === sortedRoommies.length) || (sortedRoommies.length === 0) || sortedRoommies.length < current.length) {
            setHasMore(false);
            return;
        }
    },[current.length, sortedRoommies.length, sortedRoommies])
    
    const getMoreData = () => {
    if (current.length === sortedRoommies.length) {
        setHasMore(false);
        return;
    }
    setTimeout(() => {
        setCurrent(current.concat(sortedRoommies.slice(count.prev + 5, count.next + 5)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 5, next: prevState.next + 5 }))
    }
    
    return (
        <div id="roommieStrollableDiv" style={{height:"100vh", overflow:"auto"}} >
            <InfiniteScroll
                dataLength = {current.length}
                next = {getMoreData}
                hasMore = {hasMore}
                loader = {<Loading />}
                scrollableTarget = "roommieStrollableDiv"
                // endMessage={
                //     <p>
                //     <b>Yay! You have seen it all</b>
                //     </p>
                // }
                >
                    <RoomieList roommies={current} />
            </InfiniteScroll>
        </div>
    )
}

export default RoommieStroller
