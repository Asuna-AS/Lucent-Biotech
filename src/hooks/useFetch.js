import { useEffect, useState } from 'react';

const useFetch = (file) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/Lucent-Biotech/database/${file}.json`)
        .then(res => res.json())
            .then(data => setData(data))
    },[file])
    return [data]
}
export default useFetch
