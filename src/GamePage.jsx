import { useState } from 'react';
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
    let [board, setBoard] = useState({ user: 1, board: Array(42).fill(0) });

    const handleChange = (e) => {
        const { id } = e.target;
        setBoard(prevState => { return { ...prevState, user: prevState.user === 1 ? 2 : 1, board: prevState.board.map((val, i) => (i == id && val === 0) ? prevState.user : val) } });
    };
    const restartGame = () => {
        setBoard(prevState => { return { user: 1, board: Array(42).fill(0) } });
    }
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
        </>
    );
}