var _ = require('lodash');
export default {

    averageSkeleton: {},

    setAverageKeyValuePair(obj, key, value) {
        key === "total_average" ? obj[key] = value : obj[key] = [value]
        return obj;
    },

    averageBloodSugarArrays(averagesObject) {
        let finalObject = averagesObject;
        Object.keys(averagesObject).forEach(timeOfDay => {
            if(timeOfDay === 'total_average') {
                return 
            } else {
                return finalObject[timeOfDay] = Math.floor(_.mean(finalObject[timeOfDay]));
            }
        });
        return averagesObject;
    },

    addValuesToArrayToAverage(obj, key, value) {
        let newArr;
        if (_.isEmpty(obj[key]) || obj[key] === undefined || !obj[key]) {
            obj[key] = [value]
        } else {
            let newArr = obj[key];
            newArr.push(value)
            obj[key] = newArr;
        }
        return obj
    },

    createBloodSugarsArray(bloodSugarRecords) {
        return bloodSugarRecords.map(record => {
            return record.blood_sugar;
        });
    },

    setTimeAndRecordBloodSugar(averagesObject, bloodSugarRecords) {
        const newAveragesObject = averagesObject;
        bloodSugarRecords.forEach(record => {
            if (!averagesObject.hasOwnProperty(record.record_time)) {
                return { ...averagesObject, ...(this.setAverageKeyValuePair(averagesObject, record.record_time, record.blood_sugar)) };
            } else {
                return this.addValuesToArrayToAverage(averagesObject, record.record_time, record.blood_sugar)
            }
        });      
        return this.averageBloodSugarArrays(newAveragesObject);
    },

    calculateTotalAverage(bloodSugarRecords) {
        let totalArrayAverage = Math.floor(_.mean(this.createBloodSugarsArray(bloodSugarRecords)));
        let averageObject = this.averageSkeleton;
        let totalAveragesObject = this.setAverageKeyValuePair(averageObject, "total_average", totalArrayAverage)
        return this.setTimeAndRecordBloodSugar(totalAveragesObject, bloodSugarRecords);
    },

    startAverageSort(bloodSugarRecords) {
        if (bloodSugarRecords.length > 0 || bloodSugarRecords !== undefined || !bloodSugarRecords) {
            return (this.calculateTotalAverage(bloodSugarRecords))                      
        } else {
            return "undefined";
        }
    }

}