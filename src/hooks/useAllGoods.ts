
import { useEffect, useState } from 'react';
import IUserGoods from '../interfaces/IUserGoodts.js';
import { fetchAllGoodsPromise } from '../services/goodsApi.js';


export const useAllGoods = () => {
    const [goods, setGoods] = useState<IUserGoods[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadAllGoods = async () => {
            try {
                const data = await fetchAllGoodsPromise();
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
        loadAllGoods();
    }, []);

    return { goods, loading, error };
};
