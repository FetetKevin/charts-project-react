import data from "../data.json";

export default function Charts() {

    const myGraphs = data.map(el => {
        return (
            <div className="chart">
                <div className={el.amount > 50 ? "graph cian" : "graph"} style={{height: el.amount*3}}></div>
                <p>{el.day}</p>
            </div>
        )
    })
    return (
        <div className="charts">
            {myGraphs}
        </div>
    );
}