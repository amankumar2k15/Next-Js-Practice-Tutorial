import para from "./para.module.css"
import heading from "./heading.module.css"
import outside from "../style/outside.module.css"

export default function CssTesting() {
    return (
        <>
            <div className={outside.divvChange}>This is my pure heading tag</div>
            <h1 className={heading.mainHeading}>This is my pure heading tag</h1>
            <h2 className={heading.mainHeading} style={{ backgroundColor: "black" }}>This is my second tag</h2>
            {/* //In p tag  para  is coming from globals.css    */}
            <p className={`${para.mainPara} para`} >This is my para tag</p>
        </>
    )
}