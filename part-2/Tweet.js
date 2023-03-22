const Tweet = ({username, name, date, msg}) => (
    <div className="tweet">
        <h1>@{username} {name}</h1>
        <h2>{msg}</h2>
        <h3>{date}</h3>
    </div>
)