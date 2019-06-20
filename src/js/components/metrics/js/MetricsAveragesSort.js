var _ = require('lodash');
export default {

    averageSkeleton: {},

    // creating array as value in object pair with key
    // as long as it isn't the total average that was calculated at the beginning
    setAverageKeyValuePair(obj, key, value) {
        key === "total_average" ? obj[key] = value : obj[key] = [value]
        return obj;
    },

    // Returns if new key is total_average because that was calculated and set at the beginning
    // otherwise this function averages out the array of records into a single number
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

    // Returns a new array if the key is missing a value and if it isnt
    // it pushes a new blood sugar record tot he array to be averaged later
    addValuesToArrayToAverage(obj, key, value) {
        if (_.isEmpty(obj[key]) || obj[key] === undefined || !obj[key]) {
            obj[key] = [value]
        } else {
            let newArr = obj[key];
            newArr.push(value)
            obj[key] = newArr;
        }
        return obj
    },

    // Creates an array of every single blood sugar record to be averaged by lodash
    createBloodSugarsArray(bloodSugarRecords) {
        return bloodSugarRecords.map(record => {
            return record.blood_sugar;
        });
    },

    // Sets key/value pair in final object if key does not exist, if it does, it pushes the record 
    // for that day to an array to be averaged and returned later
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

    // Creates total_average key value pair in the final object
    // that is returned at the end of this chain
    calculateTotalAverage(bloodSugarRecords) {
        let totalArrayAverage = Math.floor(_.mean(this.createBloodSugarsArray(bloodSugarRecords)));
        let averageObject = this.averageSkeleton;
        let totalAveragesObject = this.setAverageKeyValuePair(averageObject, "total_average", totalArrayAverage)
        return this.setTimeAndRecordBloodSugar(totalAveragesObject, bloodSugarRecords);
    },

    // Checks to see whether or not the argument passed is empty
    // If not, return function that calculates total average of all blood sugars
    startAverageSort(bloodSugarRecords) {
        if (bloodSugarRecords.length > 0 || bloodSugarRecords !== undefined || !bloodSugarRecords) {
            return (this.calculateTotalAverage(bloodSugarRecords))                      
        } else {
            return "undefined";
        }
    }

}