import { useState, useEffect } from 'react'
import axios from 'axios'
import { getHeaders } from '../utils/storageManager'

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const apiCall = async () => {
        try {
            setLoading(true)
            const response = await axios.get(url, getHeaders())
            setData(response.data)
        } catch (error) {
            console.log(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        apiCall()
    }, [url])

    return [data, setData]
}