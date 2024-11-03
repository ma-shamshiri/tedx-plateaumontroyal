import React, { useEffect, useRef, useState } from "react";
import "./styles.css"; // Separate CSS file

import {
    snapshot1,
    snapshot2,
    snapshot3,
    snapshot4,
    snapshot5,
    snapshot6,
    snapshot7,
    snapshot8,
    snapshot9,
    groupMeeting1,
} from "../../assets";
import { Box, Image, Text } from "@chakra-ui/react";

const CGVideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const markerRef = useRef<HTMLDivElement | null>(null);
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [cursorText, setCursorText] = useState("Pause");
    const snapshots = [
        snapshot1,
        snapshot2,
        snapshot3,
        snapshot4,
        snapshot5,
        snapshot6,
        snapshot7,
        snapshot8,
        snapshot9,
    ];
    useEffect(() => {
        const video = videoRef.current;
        const marker = markerRef.current;
        const timeline = timelineRef.current;
        const cursor = cursorRef.current;

        // Update the video marker's position based on the video play time
        const handleTimeUpdate = () => {
            if (video && marker) { // Null check for marker
                const percentage = (video.currentTime / video.duration) * 100;
                marker.style.left = `calc(${percentage}% - 1px)`;
            }
        };

        // Seek to the clicked position on the timeline
        const handleTimelineClick = (e: MouseEvent) => {
            e.stopPropagation();
            if (video && timeline && marker) { // Null check for marker and timeline
                const rect = timeline.getBoundingClientRect();
                const clickPosition = e.clientX - rect.left;
                const percentage = clickPosition / rect.width;
                video.currentTime = percentage * video.duration;
                marker.style.left = `calc(${percentage * 100}% - 1px)`;
            }
        };

        // Toggle play/pause on video and update cursor text
        const handlePlayPause = (e: MouseEvent) => {
            if (video && !timeline?.contains(e.target as Node)) { // Ensure click is outside the timeline
                if (isPlaying) {
                    video.pause();
                    setCursorText("Play");
                } else {
                    video.play();
                    setCursorText("Pause");
                }
                setIsPlaying(!isPlaying);
            }
        };

        // Move the custom cursor to follow the mouse
        const handleMouseMove = (e: MouseEvent) => {
            if (cursor) { // Null check for cursor
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        // Add event listeners
        video?.addEventListener("timeupdate", handleTimeUpdate);
        timeline?.addEventListener("click", handleTimelineClick);
        document.addEventListener("click", handlePlayPause);
        document.addEventListener("mousemove", handleMouseMove);

        // Cleanup function to remove event listeners
        return () => {
            video?.removeEventListener("timeupdate", handleTimeUpdate);
            timeline?.removeEventListener("click", handleTimelineClick);
            document.removeEventListener("click", handlePlayPause);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isPlaying]); // Re-run useEffect when isPlaying state changes

    return (
        <Box
            position="relative"
            width="100%"
            height={{ base: "initial", lg: "93vh" }}
            overflow="hidden"
        >
            <Box
                // className="video-container"
                width="100%"
                height="100%"
                overflow="hidden"
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    id="mainVideo"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                >
                    <source src={groupMeeting1} type="video/mp4" />
                </video>
            </Box>

            <Box
                // className="cursor"
                ref={cursorRef}
                display={{ base: "none", lg: "block" }}
                position="absolute"
                top="20px"
                left="20px"
                textTransform="uppercase"
                transition="transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1)"
                pointerEvents="none"
                zIndex={2}
            >
                <Text color="#fff" fontSize="13px"> {cursorText} </Text>
            </Box>

            <Box
                // className="video-timeline"
                ref={timelineRef}
                position="absolute"
                bottom={0}
                width="100%"
                height={{ base: "100px", lg: "160px" }}
                display="flex"
                flexDirection="column"
                padding="1em"
                gap="0.5em"
                cursor="pointer"
            >
                <Box className="video-marker" ref={markerRef}></Box>
                <Box
                    // className="video-timestamps"
                    position="relative"
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Text color="#fff" fontSize="13px"> 00:00 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:05 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:10 </Text>
                    <Text color="#fff" fontSize="13px"> 00:15 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:20 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:25 </Text>
                    <Text color="#fff" fontSize="13px"> 00:30 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:35 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:40 </Text>
                    <Text color="#fff" fontSize="13px"> 00:45 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:50 </Text>
                    <Text display={{ base: "none", lg: "block" }} color="#fff" fontSize="13px"> 00:55 </Text>
                    <Text color="#fff" fontSize="13px"> 01:00 </Text>
                </Box>
                <Box
                    // className="video-frames"
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="space-between"
                    gap={{ base: "0.25em", lg: "1em" }}
                    borderTop="1px dashed #fff"
                    borderBottom={{ base: "none", lg: "1px dashed #fff" }}
                    padding="0.75em 0"
                >
                    {[...Array(9)].map((_, index) => (
                        <Box className="frame" key={index}>
                            <Image
                                src={snapshots[index]}
                                alt="video snapshots"
                                width="100%"
                                height="100%"
                                objectFit="cover"
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box >
    );
};

export default CGVideoPlayer;
