function Search({onSearch}) {

    let handleKeyDown = (e) => {
        let input = document.getElementById("buscador"); 
        if (e.key === 'Enter') {
            onSearch(input.value); 
        }
    }

    return (
        <div className='container mt-3'>
            <input id="buscador" className="form-control me-2" type="search" 
            placeholder="Buscar..."  aria-label="Buscar" 
            onKeyDown={handleKeyDown}
            />
        </div>)
}

export default Search; 