import React, { useState } from "react";

import Store from '../../../store/store.component';

import RETAIL_STORE_DATA from '../retail.data';

const RetailStoresList = () => {
    const [stores] = useState(RETAIL_STORE_DATA);
    return (
        <div className="flex-col">
         <div className="decoration-slate-800 font-semibold text-2xl">Retail stores in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default RetailStoresList;