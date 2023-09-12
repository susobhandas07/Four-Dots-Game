import { useState, useEffect } from 'react';
import { Favicon, TiltedSmily } from './assets/icons';

const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className='uppercase tracking-widest font-semibold text-white px-7 py-2 rounded-3xl animate-morph'
            style={{ backgroundColor: "var(--header-btn-bg)", fontFamily: "inherit" }}
        >
            {children}
        </button>
    );
};

const ScoreCard = ({ iconFill = 'white', iconReversed, iconAlign, inactive, children }) => {
    let classes = "absolute top-3 ";
    iconAlign === "right" ? classes += "-right-6" : classes += "-left-6";
    return (
        <section className={`px-7 py-1 text-center bg-white rounded-2xl border-3 border-black text-black box-shadow relative uppercase1 ${inactive && "inactive"}`}>
            <TiltedSmily fill={iconFill} reversed={iconReversed ? true : false} width="3em" className={classes} />
            {children}
        </section>
    );
};

const BoardPiece = ({ value, ...props }) => {
    let style;
    if (value === 1) {
        style = {
            backgroundColor: "var(--bg-1)", boxShadow: "0 3px #2e2222 inset"
        };
    } else if (value === 2) {
        style = { backgroundColor: "var(--bg-2)", boxShadow: "0 3px #383731 inset" }
    } else {
        style = { backgroundColor: "rgb(116, 30, 214)", boxShadow: "0 5px black inset" };
    }
    return (
        <section>
            <section
                style={style}
                className="w-10 h-10 rounded-full mx-auto border-2 border-black animate-morph"
                {...props}
            ></section>
        </section>
    );
};

export default function main({ handeler }) {
    let [board, setBoard] = useState({ user: 1, winner: null, board: Array(42).fill(0) });
    let [time, setTime] = useState(15);


    const handleChange = (e) => {
        if (!board.winner) {
            const { id } = e.target;
            setTime(15);
            setBoard(prevState => { return { ...prevState, user: prevState.user === 1 ? 2 : 1, board: prevState.board.map((val, i) => (i == id && val === 0) ? prevState.user : val) } });
        }
    };

    const restartGame = () => {
        setTime(15);
        setBoard(prevState => { return { ...prevState, user: 1, winner: null, board: Array(42).fill(0) } });
    }

    useEffect(() => {
        let interval;
        if (time > 0 && !board.winner) {
            interval = setTimeout(() => {
                setTime(prevState => prevState - 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setBoard(prevState => { return { ...prevState, winner: prevState.user === 1 ? 2 : 1 } });
        }
        return () => { clearInterval(interval); }
    }, [time]);
    return (
        <>
            <header className='w-full flex justify-around'>
                <Button onClick={handeler}>menue</Button>
                <Favicon style={{ width: "3em" }} />
                <Button onClick={restartGame}>restart</Button>
            </header>
            <section id="score-board" className='flex justify-around align-center w-full'>
                <ScoreCard iconFill={"var(--bg-1)"} iconReversed inactive={board.user === 2} >
                    <p>player 1</p>
                    <h3>12</h3>
                </ScoreCard>
                <ScoreCard iconFill={"var(--bg-2)"} iconAlign="right" inactive={board.user === 1}>
                    <p>player 2</p>
                    <h3>23</h3>
                </ScoreCard>
            </section>
            <section id="game-board" className="grid grid-cols-7 gap-2 p-2 pb-10 border-4 border-black rounded-xl bg-white">
                {board.board.map((value, i) => <BoardPiece key={i} id={i} value={value} onClick={(e) => handleChange(e)} />)}
            </section>
            <section className='-mt-10 text-center relative'>
                <svg width="211" height="162" viewBox="0 0 211 162" xmlns="http://www.w3.org/2000/svg" >
                    {board.winner
                        ? <>
                            <rect x="5" y="10" width="200" height="150" fill="black" stroke="black" strokeWidth="3px" rx="10" />
                            <rect x="5" y="5" width="200" height="150" fill="white" stroke="black" strokeWidth="3px" rx="10" />
                        </>
                        : <>
                            <path d="M127 18 198.6 47.84Q208.68 52.88 208.68 68L209 124Q209 142 191 142L22 143Q2 143 2 124L2.04 68Q2.04 52.88 12.12 47.84L73 19Q98 4 127 18" stroke="black" strokeWidth="3px" />
                            <path d="M127 13 198.6 42.84Q208.68 47.88 208.68 63L209 119Q209 137 191 137L22 138Q2 138 2 119L2.04 63Q2.04 47.88 12.12 42.84L73 14Q98-1 127 13" fill="#fe6885" stroke="black" strokeWidth="3px" />
                        </>}
                    <text x="50%" y="35%" textAnchor='middle' alignmentBaseline='middle' fill={board.winner ? "black" : "white"} className="font-bold">
                        <tspan x="50%" dy={board.winner && "-1.2em"}>PLAYER{board.winner ? board.winner : ` ${board.user}'S TURN`}</tspan>
                        <tspan x="50%" dy="1em" style={{ fontSize: "3em" }}>{board.winner ? "wins" : `${time}s`}</tspan>
                    </text>
                </svg>
                {board.winner &&
                    <button
                        className=' px-5 py-2 rounded-xl text-white absolute bottom-4 bg-blue-500 left-12 animate-morph'
                        onClick={restartGame}
                    >
                        Play again
                    </button>}
            </section >
        </>
    );
}