"use client"

interface Props {
    Text: String[];
}
export default function ListOptions({Text}: Props){
    return(
        <select name="" id="" className="bg-gradient-to-r outline-none from-blue-500 to-purple-500 text-white rounded-lg shadow-lg text-center appearance-none w-40 text-lg py-2 px-4">
            {
                Text.map((item: String, index) => (
                    <option className="bg-white text-gray-800 hover:bg-gray-200 py-2 px-4" key={index}>{item}</option>
                ))
            }
        </select>
    )
}