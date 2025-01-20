import { useState, useEffect } from 'react';
import { fetchDealerIdentifikation } from '../services/goodsApi';
import Idealers from '../interfaces/IDealers';

export const useDealerIdentifikation = () => {
    const [dealers, setDealers] = useState<Idealers[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadDealers = async () => {
            try {
                const data = await fetchDealerIdentifikation();
                setDealers(data);
            } catch (err: unknown) {

                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error("Unkown Error occured"));
                }
            } finally {
                setLoading(false);
            }
        };

        loadDealers();
    }, []);

    return { dealers, loading, error };
};
