import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Box } from "@chakra-ui/react";
import "./styles.css";

const ROWS = 6;
const COLS = 6;
// const BLOCK_SIZE = 50;
const COOLDOWN = 1000;
let isFlipped = false;

const Tile = ({ row, col }: { row: number; col: number }) => {
    const bgPosition = `${col * 20}% ${row * 20}%`;

    return (
        <Box
            className="tile"
            flex="1"
            position="relative"
        >
            <div
                className="tile-face tile-front"
                style={{ backgroundPosition: bgPosition }}
            ></div>
            <div
                className="tile-face tile-back"
                style={{ backgroundPosition: bgPosition }}
            ></div>
        </Box>
    );
};

const Board = () => {
    const renderRows = () => {
        const rows = [];
        for (let i = 0; i < ROWS; i++) {
            const rowTiles = [];
            for (let j = 0; j < COLS; j++) {
                rowTiles.push(<Tile key={`${i}-${j}`} row={i} col={j} />);
            }
            rows.push(
                <Box
                    key={i}
                    className="row"
                >
                    {rowTiles}
                </Box>
            );
        }
        return rows;
    };

    useEffect(() => {
        initializeTileAnimations();
    }, []);

    return <section className="board">{renderRows()}</section>;
};

const initializeTileAnimations = () => {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile, index) => {
        let lastEnterTime = 0;

        tile.addEventListener("mouseenter", () => {
            const currentTime = Date.now();
            if (currentTime - lastEnterTime > COOLDOWN) {
                lastEnterTime = currentTime;

                let tiltY;
                if (index % 6 === 0) {
                    tiltY = -40;
                } else if (index % 6 === 5) {
                    tiltY = 40;
                } else if (index % 6 === 1) {
                    tiltY = -20;
                } else if (index % 6 === 4) {
                    tiltY = 20;
                } else if (index % 6 === 2) {
                    tiltY = -10;
                } else {
                    tiltY = 10;
                }

                animateTile(tile as HTMLElement, tiltY);
            }
        });
    });

    // Add flipButton click event listener
    // const flipButton = document.getElementById("flipButton");
    // flipButton?.addEventListener("click", () => flipAllTiles(tiles));
};


const animateTile = (tile: HTMLElement, tiltY: number) => {
    gsap
        .timeline()
        .set(tile, { rotateX: isFlipped ? 180 : 0, rotateY: 0 })
        .to(tile, {
            rotateX: isFlipped ? 450 : 270,
            rotateY: tiltY,
            duration: 0.5,
            ease: "power2.out",
        })
        .to(
            tile,
            {
                rotateX: isFlipped ? 540 : 360,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out",
            },
            "-=0.25"
        );
};

const flipAllTiles = (tiles: NodeListOf<Element>) => {
    isFlipped = !isFlipped;
    gsap.to(tiles, {
        rotateX: isFlipped ? 180 : 0,
        duration: 1,
        stagger: {
            amount: 0.5,
            from: "random",
        },
        ease: "power2.inOut",
    });
};

const BlockHeroFlip = () => {
    return (
        <Board />
    );
};

export default BlockHeroFlip;
