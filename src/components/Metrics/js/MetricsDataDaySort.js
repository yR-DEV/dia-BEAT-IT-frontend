const _ = require('lodash')

export default {

    dayDataLineGraph: [
        {
            "id": "",
            "color": "hsl(337, 70%, 50%)",
            "data": []
        },
        {
            "id": "",
            "color": "hsl(105, 70%, 50%)",
            "data": []
        },
        {
            "id": "",
            "color": "hsl(310, 70%, 50%)",
            "data": []
        }
    ],

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
        const daySortObject = this.dayDataLineGraph;
        uniqueDayArray.forEach((day, i) => {
            return daySortObject[i].id = day;
        })
        return this.pushPlotPointsToObject(daySortObject, bloodSugarRecords)
    },

    createDaysArray(bloodSugarRecords) {
        return bloodSugarRecords.map(record => {
            return record.record_date;
        });
    },

    startDaySort(bloodSugarRecords) {
        const uniqueDayArray = (_.uniqBy(this.createDaysArray(bloodSugarRecords)));
        return this.returnDaySortObject(uniqueDayArray, bloodSugarRecords);
    }   
} 
