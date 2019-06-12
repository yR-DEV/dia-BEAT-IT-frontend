var _ = require('lodash');
export default {
    pieChartSkeleton: [{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },{
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    }],

    setColor(skeletonClone) {
        const randomColor = Math.floor(Math.random() * 350)
        skeletonClone.forEach(entry => {
            entry["color"] = `hsl(${Math.floor(Math.random() * 350)}, 70%, 50%)`
            return entry
        })
        return skeletonClone;
    },

    setBloodSugatToValue(averageArrays, skeletonClone) {
        skeletonClone.forEach((entry, i) => {
            return skeletonClone[i]["value"] = averageArrays[1][i];
        })
        return this.setColor(skeletonClone);
    },

    setIdAndLabel(averageArrays, averageData, skeletonClone) {
        skeletonClone.forEach((entry, i) => {
            skeletonClone[i]["id"] = averageArrays[0][i]
            skeletonClone[i]["label"] = averageArrays[0][i]
            return skeletonClone
        })
        return this.setBloodSugatToValue(averageArrays, skeletonClone)

    },

    splitIdAndLabel(averageData) {
        const keys = Object.keys(averageData);
        const values = Object.values(averageData)
        return [keys, values]
    },

    setEntryValues(averageData, skeletonClone) {
        const averageArrays = this.splitIdAndLabel(averageData);
        return this.setIdAndLabel(averageArrays, averageData, skeletonClone)
    },

    createPieChartEntry(averageData) {
        const skeletonClone = this.pieChartSkeleton;
        return this.setEntryValues(averageData, skeletonClone);
    },

    startSort(averagesData) {
        if (_.isEmpty(averagesData)) {
            return "undefined";
        } else {
            return this.createPieChartEntry(averagesData);
        }
    },


}