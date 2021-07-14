// Simple input component to take user input for serch string

const SearchInput = ({placeholderText = ""}) => {
    return (
        <div>
            <input placeholder={placeholderText}></input>
        </div>
    )
}

export default SearchInput;