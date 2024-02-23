import {useState, useEffect} from 'react'

// 4 - custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    
    // 5 - Refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - Loading
    const [loading, setLoading] = useState(false)

    // 7 - Tratando erros 
    const [error, setError] = useState(false)

    // 8 - DELETE DESAFIO
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
        
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json" 
                },
                body: JSON.stringify(data)
            })

            setMethod(method)

        }else if (method === "DELETE"){
            //console.log("Deletado o item " + data)
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json" 
                }
            })

            setMethod(method)
            setItemId(data)

        }
    }


    useEffect(() => {
        const fetchData = async () => {

            // 6 loading 
            setLoading(true)

           try {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)

            setMethod(null) // verificar se parou no erro de duplicar as publicações
            
           } catch (error) {
            console.log(error.message)

            setError("Houve algum error ao carregar os dados!")
            
           }

            setLoading(false)
        }

        fetchData() // Chamando a função assíncrona
    }, [url, callFetch])

    // 5 - Refatorando POST
    useEffect(() => {
        const httpRequest = async () => {

            if(method === "POST"){
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()

                setCallFetch(json)
    
            } else if(method === "DELETE"){

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                const json = await res.json()

                setCallFetch(json)

            }        
        }

        httpRequest() // Chamando a função assíncrona

    },[config, method, url, itemId]) // RETIREI O METHOD E O URL 

    return { data, httpConfig, loading, error }


}