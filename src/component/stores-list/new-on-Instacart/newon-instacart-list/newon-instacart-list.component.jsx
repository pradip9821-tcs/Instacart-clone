import React, { useState } from "react";

import NEW_ON_INSTACART_DATA from "../newon-instacart-data";

import Store from '../../../store/store.component';

const NewOnInstacartList = () => {
    const [stores] = useState(NEW_ON_INSTACART_DATA);
    return (
        <div className="flex-col">
        <div className="decoration-slate-800 font-semibold text-2xl">New on Instacart in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default NewOnInstacartList;