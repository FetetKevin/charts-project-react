import Charts from './Charts'

export default function Main() {
    return (
        <main>
            <h2>Spending - Last 7 days</h2>

            <Charts />

            <div className="hr"></div>

            <div className="main-footer">
                <div className="main-left">
                    <h3>Total this month</h3>
                    <h4>$478.33</h4>
                </div>

                <div className="main-right">
                    <h3>+2.4%</h3>
                    <h4>from last month</h4>
                </div>
            </div>
        </main>
    );
}
