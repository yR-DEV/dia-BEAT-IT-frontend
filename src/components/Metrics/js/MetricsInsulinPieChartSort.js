export default {

    pieChartSkeleton: {
        "id": "",
        "label": "",
        "value": 0,
        "color": ""
    },

    setIdAndLabel() {

    },

    setEntryValues(bloodSugarRecords, skeleton) {
        const namedSkeleton = "";
    },

    createEntry(bloodSugarRecords) {
        let skeleton = this.pieChartSkeleton;
        return this.setEntryValues(bloodSugarRecords, skeleton);
    },

    startSort(bloodSugarRecords) {
        return this.createEntry(bloodSugarRecords);
    },
}