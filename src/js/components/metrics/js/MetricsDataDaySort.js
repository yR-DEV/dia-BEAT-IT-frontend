const _ = require('lodash')

export default {
    createPlotPoint(time, blood_sugar) {
        return { "x": time, "y": blood_sugar }
    },

    pushPlotPointsToObject(dayObj, bloodSugarRecords) {
        const daySortObject = dayObj;
        dayObj.forEach((day, i) => {
            bloodSugarRecords.forEach(record => {
                if (record.record_date === day.id) {
                    return daySortObject[i].data.push(this.createPlotPoint(record.record_time, record.blood_sugar));
                }
            })
        });
        return daySortObject;
    },

    returnDaySortObject(uniqueDayArray, bloodSugarRecords) {
        const newSortArray = uniqueDayArray.map((day) => {
            return {"id": day, "color": "hsl(310, 70%, 50%)", "data": []}
        })
        return this.pushPlotPointsToObject(newSortArray, bloodSugarRecords)
    },

    createDaysArray(bloodSugarRecords) {
        return bloodSugarRecords.map(record => {
            return record.record_date;
        });
    },

    startDaySort(bloodSugarRecords) {
        if (_.isEmpty(bloodSugarRecords)) {
            console.log('nothing from the api yet');
        } else {
            const uniqueDayArray = (_.uniqBy(this.createDaysArray(bloodSugarRecords)));
            return this.returnDaySortObject(uniqueDayArray, bloodSugarRecords);
        }
    }   
} 
