import { Link } from "react-router-dom"

const SearchBar = ({ visible, setVisible, setblurValue, searchKey, setSearchKey, allItems, foundItems, setFoundItems }) => {

    const searchBarChange2 = () => {
        setVisible(false)
        setblurValue(0)
    }

    const searchItem = (event) => {
        const key = event.target.value.toLowerCase();
        setSearchKey(key);

        if (key !== '') {
            const items = allItems.filter((item) => {
                return item.name.toLowerCase().startsWith(key);
            });

            setFoundItems(items)
        }
        else {
            setFoundItems([])
        }
    }

    const displayItems = foundItems.map((item) => (
        <div key={item.id} >
            <Link to={`/items/${item.id}`} className=" text-decoration-none btn btn-secondary w-75 py-2 d-block mx-auto mb-3"
                onClick={searchBarChange2}>
                <div className="row">
                    <div className=" rounded-3 d-flex justify-content-center align-items-center">
                        <h6 className="text-warning">{item.name}</h6>
                    </div>
                </div>
            </Link>
        </div>
    ))

    const handleSubmit = () => {

    }

    return <>
        {visible && (
            <div>
                <form id="searchForm" onSubmit={handleSubmit}>
                    <div className=" input-group mt-5 z-3">
                        <input
                            type="search"
                            className="form-control bg-light fw-bold p-3 mt-5"
                            id="searchBar"
                            placeholder="Search here"
                            value={searchKey}
                            onChange={searchItem}
                            autoComplete="off"
                        />
                        <button className=" input-group-text fs-1 text-danger mt-5" onClick={searchBarChange2}>
                            <i className="fa-solid fa-rectangle-xmark"></i>
                        </button>
                    </div>
                </form>

                <div className=" mt-5 w-100 container">

                    {displayItems}

                </div>
            </div>
        )}
    </>
}

export default SearchBar