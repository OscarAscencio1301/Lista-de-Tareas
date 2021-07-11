import { useState } from "react"


export const useForm = (valoresInicales = {}) => {
  const [valores, setvalores] = useState(valoresInicales)

    const cambioValores = (e) =>{
        setvalores({
            ...valores,
            [e.target.name]: e.target.value
        })

    }

    const reset = () =>{
        setvalores(valoresInicales)
    }

    return [valores, cambioValores, reset]
}
