// Simple input component to take user input for serch string

const SearchInput = ({placeholderText = "", value, onChange}) => {
    return (
        <div>
            <input placeholder={placeholderText} value={value} onChange={onChange}></input>
        </div>
    )
}

export default SearchInput;