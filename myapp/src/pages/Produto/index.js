import { useParams } from "react-router-dom"

function Produto() {
    const {id} = useParams()
    return(
        <div>Este é o produto {id}</div>
    )
}
export default Produto;