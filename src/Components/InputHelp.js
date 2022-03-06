import { useState } from "react"


function InputHelp() {
    const [search, setSearch] = useState('')

    const updateSearch = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div>
            <input className="rounded" onChange={updateSearch} value={search} placeholder='What can we help you find today?' style={{width: '20rem'}}/>
           
        </div>
    )
}
export default InputHelp