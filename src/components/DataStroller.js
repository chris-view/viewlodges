import React, { useState } from 'react';
import { useContext, useEffect } from "react";
import { RoomContext } from "../context";
import InfiniteScroll from 'react-infinite-scroll-component';
import RoomsList from './RoomsList';
import Loading from "./Loading";

function DataStroller() {

    const context = useContext(RoomContext)
    const { sortedRooms} = context;

    const [count, setCount] = useState({
        prev: 0,
        next: 10
    })

    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(sortedRooms.slice(count.prev, count.next))
    
   useEffect(() => {
        setCount(({ prev: 0, next: 10 }))
        setHasMore(true);
        setCurrent(sortedRooms.slice(0, 10))
        
    }, [sortedRooms])
    useEffect(() =>{
        if (current.length === sortedRooms.length) {
            setHasMore(false);
            return;
        }
    },[current.length, sortedRooms.length])
    
    const getMoreData = () => {
    if (current.length === sortedRooms.length) {
        setHasMore(false);
        return;
    }
    setTimeout(() => {
        setCurrent(current.concat(sortedRooms.slice(count.prev + 10, count.next + 10)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
    }
    
    return (
        <div id="scrollableDiv" style={{height:"100vh", overflow:"auto"}} >
            <InfiniteScroll
                dataLength = {current.length}
                next = {getMoreData}
                hasMore = {hasMore}
                loader = {<Loading />}
                scrollableTarget = "scrollableDiv"
                // endMessage={
                //     <p>
                //     <b>Yay! You have seen it all</b>
                //     </p>
                // }
                >
                    <RoomsList rooms={current} />
            </InfiniteScroll>
        </div>
    )
}

export default DataStroller
