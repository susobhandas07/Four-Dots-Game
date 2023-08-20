import { Favicon, Smily, ExpressionLess, TiltedSmily } from './assets/icons.jsx';
const Button = ({ children, type, bg, ...props }) => {
    const style = (type === "secondary") ? { backgroundColor: bg || "var(--bg-2)", color: "black" } : { backgroundColor: bg || "var(--bg-1)", color: "white" };
    return (
        <button
            {...props}
            style={style}
            className='border-2 rounded-xl border-black w-4/5 max-w-sm py-2 uppercase font-bold text-left px-2 box-shadow my-2 flex justify-between items-center animate-morph h-16'
        >
            {children}
        </button>
    );
}
export default function main({ handeler }) {
    return (
        <div className='grid place-items-center w-full '>
            <Favicon style={{ width: "4em", marginBottom: "3rem" }} />
            <Button onClick={handeler}>
                player vs cpu
                <Smily fill="var(--bg-1)" width="2em" stroke="white" className="ml-auto -mr-2 z-10" />
                <ExpressionLess fill="var(--bg-1)" width="2em" stroke="white" />
            </Button>
            <Button type="secondary">
                player vs player
                <TiltedSmily fill='var(--bg-2)' width="2em" className="ml-auto -mr-2 z-10" reversed />
                <TiltedSmily reversed fill='var(--bg-2)' width="2em" />
            </Button>
            <Button type="secondary" bg="white">game rule</Button>
        </div>
    );
}