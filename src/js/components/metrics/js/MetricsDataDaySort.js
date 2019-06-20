const _ = require('lodash')

export default {
    // Creates object of one plot point and is returned to the below function
    // where it is pushed into the final object
    createPlotPoint(time, blood_sugar) {
        return { "x": time, "y": blood_sugar }
    },

    // Maps over blood sugar records and passes each record to a funciton that returns 
    // an object to be stored in the data key array
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

    // Begins to an array of objects formatted to nivo line graphs
    // Returns function that populates data key array with points to plot on graph
    returnDaySortObject(uniqueDayArray, bloodSugarRecords) {
        const newSortArray = uniqueDayArray.map((day) => {
            return {"id": day, "color": "hsl(310, 70%, 50%)", "data": []}
        })
        return this.pushPlotPointsToObject(newSortArray, bloodSugarRecords)
    },

    // Returns a mapped array of all of the recorded dates
    createDaysArray(bloodSugarRecords) {
        return bloodSugarRecords.map(record => {
            return record.record_date;
        });
    },

    // Creates unique array of dates and uses lodash to make that array unique
    // Returns the next function that begins to build the object
    startDaySort(bloodSugarRecords) {
        if (_.isEmpty(bloodSugarRecords)) {
            console.log('nothing from the api yet');
        } else {
            const uniqueDayArray = (_.uniqBy(this.createDaysArray(bloodSugarRecords)));
            return this.returnDaySortObject(uniqueDayArray, bloodSugarRecords);
        }
    }   
} 
