const Person = ({name, age, hobbies}) => {
    const vote = age < 18 ? ["You must be 18 to vote.", false] : ["Please go vote!", true];
    const displayName = name.length <= 8 ? name : name.slice(0, 8);
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {displayName}</li>
                <li>Age: {age}</li>
                <li>Hobbies:</li>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </ul>
            <h3>{vote}</h3>
            <button class="btn btn-primary ml-3">Vote</button>
            <hr></hr>
        </div>
    )
}