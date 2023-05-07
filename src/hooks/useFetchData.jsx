import React, { useState, useEffect } from 'react'

export default function useFetchData(selection) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = 'https://hp-api.onrender.com/api/'

    useEffect(() => {
        if(!selection){
            return ;
        }
        setLoading(true)
        const fetchData = async () => {
            let url = apiUrl ;
            if(selection === 'characters'){
                url += selection
            }
            else if(selection === 'students' || selection === 'staff'){
                url += 'characters/' + selection;
            }
            else if(selection === 'spells'){
                url += selection;
            }
            try {
                const res = await fetch(url)
                const jsonData = await res.json()
                console.log('This is >>>>>>', jsonData)
                setData(jsonData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();

    }, [selection]) 
    return { data, loading, error }

}
