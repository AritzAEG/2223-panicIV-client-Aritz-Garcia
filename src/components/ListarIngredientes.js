import React, {useState, useEffect} from 'react';

const listarIngredientes = () => {

    const [data, setData] = useState("")

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json")
        .then((res) => {
        return res.json();
        }).then ((resp) => {
        setData(resp)
        }).catch((err) => {
        console.log(err.message)
        })
    }, [])

    return(
        <div>
            {
                data &&
                data.map((ingredientes) => (
                    <p>{ingredientes}</p>
                ))
            }
        </div>
    )
}

export default listarIngredientes