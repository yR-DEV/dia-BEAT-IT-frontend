import React from 'react';

import MetricsAveragesSort from './MetricsAveragesSort';

const Averages = (props) => {

    MetricsAveragesSort.startAverageSort(props.bloodSugarRecords);

    return (
        <div className="something">
             p
        </div>
    )
}

export default Averages