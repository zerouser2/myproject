import { Link, Outlet, useSearchParams } from "react-router-dom";


function SearchParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('queryad');

    const updateQuery = (newQuery) => {
        setSearchParams({ queryad: newQuery });
    };

    return (
        <div>
            <input
                type="text"
                value={query || ''}
                onChange={(e) => updateQuery(e.target.value)}
            />
            <button onClick={() => updateQuery('новый запрос')}>Обновить запрос</button>
            <br></br>
            <Link to="team">TEAM</Link>
            <Link to="contact">CONTACTS</Link>

            <Outlet />
        </div>
    );
}

export default SearchParams;