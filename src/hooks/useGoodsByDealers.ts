import { useState, useEffect } from 'react';
import { fetchGoodsByDealers } from '../services/goodsApi';
import IUserGoods from '../interfaces/IUserGoodts';

export const useGoodsByDealers = () => {
    const [goods, setGoods] = useState<IUserGoods[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadGoods = async () => {
            try {
                const data = await fetchGoodsByDealers();
                setGoods(data);
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
        loadGoods();
    }, []);

    return { goods, loading, error };
};
