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
        next: 5
    })

    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(sortedRooms.slice(count.prev, count.next))
    
   useEffect(() => {
        setCount(({ prev: 0, next: 5 }))
        setHasMore(true);
        setCurrent(sortedRooms.slice(0, 5))
        
    }, [sortedRooms])
    useEffect(() =>{
        if ((current.length === sortedRooms.length) || (sortedRooms.length === 0) || sortedRooms.length < current.length) {
            setHasMore(false);
            return;
        }
    },[current.length, sortedRooms.length, sortedRooms])
    
    const getMoreData = () => {
    if ((current.length === sortedRooms.length)) {
        setHasMore(false);
        return;
    }
    
    setTimeout(() => {
        setCurrent(current.concat(sortedRooms.slice(count.prev + 5, count.next + 5)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 5, next: prevState.next + 5 }))
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
