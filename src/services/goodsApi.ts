
import axios from 'axios'
import IUserGoods from '../interfaces/IUserGoodts'
import Idealers from '../interfaces/IDealers'


const fetchGoodsByDealersApiUrl = "https://test-frontend.dev.int.perx.ru/api/goods/"
const fetchAllGoodsApiUrl = "https://test-frontend.dev.int.perx.ru/api/goods/?dealers=0c4aab30,86e64a33"
const fetchDealerIdentifikationApiUrl = "https://test-frontend.dev.int.perx.ru/api/dealers/"



export const fetchAllGoodsPromise = () => {
    const fetchallgoods = new Promise<IUserGoods[]>((resolve, reject) => {
        axios
            .get(fetchAllGoodsApiUrl)
            .then((res) => {
                const data = res.data;
                resolve(data);
            })
            .catch((err) => {
                console.error("Error in promise:", err);
                reject(err);
            });

    });
    return fetchallgoods
}


export const fetchGoodsByDealers = () => {

    const fetchgoodsbydealers = new Promise<IUserGoods[]>((resolve, reject) => {
        axios
            .get(fetchGoodsByDealersApiUrl)
            .then((res) => {
                const data = res.data;
                resolve(data);
            })
            .catch((err) => {
                console.error("Error in promise:", err);
                reject(err);
            });

    });
    return fetchgoodsbydealers
}



export const fetchDealerIdentifikation = () => {

    const fetchdealeridentifikation = new Promise<Idealers[]>((resolve, reject) => {
        axios
            .get(fetchDealerIdentifikationApiUrl)
            .then((res) => {
                const data = res.data;
                resolve(data);
            })
            .catch((err) => {
                console.error("Error in promise:", err);
                reject(err);
            });

    });
    return fetchdealeridentifikation
}

