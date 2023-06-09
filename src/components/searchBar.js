

const SearchBar = ({ visible, setVisible, setblurValue }) => {

    const searchBarChange2 = () => {
        setVisible(false)
        setblurValue(0)
    }

    return <>
        {visible && (
            <form >
                <div className=" input-group mt-5 z-3">
                    <input
                        type="search"
                        className="form-control bg-light fw-bold p-4 mt-5"
                        id="searchBar"
                        placeholder="Search here"
                    />
                    <button className=" input-group-text fs-1 text-danger mt-5" onClick={searchBarChange2}>
                        <i className="fa-solid fa-rectangle-xmark"></i>
                    </button>
                </div>
            </form>
        )}
    </>
}

export default SearchBar