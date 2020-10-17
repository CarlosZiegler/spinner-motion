import React from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function SpinnerWrapper({ children }) {
    return (<>
        <div className="spinner">
            {Array.from(children).map((letter, index) =>
                <Spinner key={index} delay={index} >
                    <h1>{letter}</h1>
                </Spinner>
            )}
        </div >
    </>
    );
}

function Spinner({ children, delay }) {
    return (
        <AnimatePresence initial={true}>
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: 0, y: 100, }}
                transition={{
                    flip: Infinity,
                    delay: delay / 10,
                    duration: 0.7
                }}
                style={{
                    color: "rgb(0, 72, 255)",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    textAlign: "center",
                    padding: "10px",

                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>

    );
}
