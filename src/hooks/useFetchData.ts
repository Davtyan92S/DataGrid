import { useState, useEffect } from 'react';

interface RowData {
    id: number;
    image: string;
    description: string;
    date: string;
    price: number;
}

const useFetchData = (url: string) => {
    const [data, setData] = useState<RowData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result.data); 
            } catch (err:any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
