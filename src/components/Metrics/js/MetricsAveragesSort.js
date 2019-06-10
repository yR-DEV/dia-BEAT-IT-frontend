var _ = require('lodash');
export default {

    averageSkeleton: {},

    setAverageKeyValuePair(obj, key, value) {
        obj[key] = value;
        return obj;
    },

    calculateAverageKeyValuePair(obj, key, value) {
        const newAverage = Math.floor((obj[key] + value) / 2)
        return obj[key] = newAverage;
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
                return this.calculateAverageKeyValuePair(averagesObject, record.record_time, record.blood_sugar)
            }
        })        
        return newAveragesObject;
    },

    calculateTotalAverage(bloodSugarRecords) {
        let totalArrayAverage = Math.floor(_.mean(this.createBloodSugarsArray(bloodSugarRecords)));
        let averageObject = this.averageSkeleton;
        let totalAveragesObject = this.setAverageKeyValuePair(averageObject, "total_average", totalArrayAverage)
        
        return this.setTimeAndRecordBloodSugar(totalAveragesObject, bloodSugarRecords);
    },

    startAverageSort(bloodSugarRecords) {
        return (this.calculateTotalAverage(bloodSugarRecords))          
    }

}