var vm = new Vue({
    el: '#app',
    data() {
        return {
            message: 'Hello',
            activeName: 'first',
            cRFSForm: {
                maximumTumorDiameter: '',
                distanceFromAnalVerge: '',
                ypTNMStage: 'ypCR',
                perineuralInvasion: 'No',
                months: '3',
                totalScore: '',
                result: ''
            },
            cRFSRules: {},
            maximumTumorDiameter: [0, 6, 12, 19, 25, 31, 38, 44, 50, 56, 62, 69, 75, 81, 88, 94, 100],
            distanceFromAnalVerge: [0, 59, 55, 51, 47, 42, 39, 34, 30, 25, 21, 17, 13, 8, 4, 0],
            ypTNMStage: {ypCR: 0, I: 12, II: 49, III: 80},
            perineuralInvasion: {No: 0, Yes: 37},
            probability: {
                3: [
                    {score: 99, value: 0.99},
                    {score: 176, value: 0.95},
                    {score: 210, value: 0.90},
                    {score: 231, value: 0.85},
                ],
                6: [
                    {score: 35, value: 0.99},
                    {score: 112, value: 0.95},
                    {score: 146, value: 0.90},
                    {score: 166, value: 0.85},
                    {score: 181, value: 0.80},
                    {score: 193, value: 0.75},
                    {score: 203, value: 0.70},
                    {score: 212, value: 0.65},
                    {score: 220, value: 0.60},
                    {score: 228, value: 0.55},
                    {score: 235, value: 0.50}
                ],
                9: [
                    {score: 11, value: 0.99},
                    {score: 88, value: 0.95},
                    {score: 122, value: 0.90},
                    {score: 143, value: 0.85},
                    {score: 157, value: 0.80},
                    {score: 170, value: 0.75},
                    {score: 180, value: 0.70},
                    {score: 189, value: 0.65},
                    {score: 197, value: 0.60},
                    {score: 204, value: 0.55},
                    {score: 211, value: 0.50},
                    {score: 218, value: 0.45},
                    {score: 224, value: 0.40},
                    {score: 231, value: 0.35}
                ],
                12: [
                    {score: 75, value: 0.95},
                    {score: 109, value: 0.9},
                    {score: 129, value: 0.85},
                    {score: 144, value: 0.8},
                    {score: 156, value: 0.75},
                    {score: 166, value: 0.7},
                    {score: 175, value: 0.65},
                    {score: 183, value: 0.6},
                    {score: 191, value: 0.55},
                    {score: 198, value: 0.5},
                    {score: 204, value: 0.45},
                    {score: 211, value: 0.4},
                    {score: 217, value: 0.35},
                    {score: 224, value: 0.3},
                    {score: 231, value: 0.25}
                ],
                15: [{score: 67, value: 0.95},
                    {score: 101, value: 0.9},
                    {score: 121, value: 0.85},
                    {score: 136, value: 0.8},
                    {score: 148, value: 0.75},
                    {score: 158, value: 0.7},
                    {score: 167, value: 0.65},
                    {score: 175, value: 0.6},
                    {score: 183, value: 0.55},
                    {score: 190, value: 0.5},
                    {score: 196, value: 0.45},
                    {score: 203, value: 0.4},
                    {score: 209, value: 0.35},
                    {score: 216, value: 0.3},
                    {score: 222, value: 0.25},
                    {score: 229, value: 0.2}],
                18: [{score: 61, value: 0.95},
                    {score: 96, value: 0.9},
                    {score: 116, value: 0.85},
                    {score: 131, value: 0.8},
                    {score: 143, value: 0.75},
                    {score: 153, value: 0.7},
                    {score: 162, value: 0.65},
                    {score: 170, value: 0.6},
                    {score: 178, value: 0.55},
                    {score: 185, value: 0.5},
                    {score: 191, value: 0.45},
                    {score: 198, value: 0.4},
                    {score: 204, value: 0.35},
                    {score: 211, value: 0.3},
                    {score: 217, value: 0.25},
                    {score: 224, value: 0.2},
                    {score: 232, value: 0.15}],
                21: [{score: 52, value: 0.95},
                    {score: 86, value: 0.90},
                    {score: 106, value: 0.85},
                    {score: 121, value: 0.80},
                    {score: 133, value: 0.75},
                    {score: 144, value: 0.70},
                    {score: 153, value: 0.65},
                    {score: 161, value: 0.60},
                    {score: 168, value: 0.55},
                    {score: 175, value: 0.50},
                    {score: 182, value: 0.45},
                    {score: 188, value: 0.40},
                    {score: 195, value: 0.35},
                    {score: 201, value: 0.30},
                    {score: 208, value: 0.25},
                    {score: 215, value: 0.20},
                    {score: 223, value: 0.15},
                    {score: 232, value: 0.10}],
                24: [{score: 49, value: 0.95},
                    {score: 83, value: 0.90},
                    {score: 103, value: 0.85},
                    {score: 118, value: 0.80},
                    {score: 130, value: 0.75},
                    {score: 140, value: 0.70},
                    {score: 149, value: 0.65},
                    {score: 157, value: 0.60},
                    {score: 165, value: 0.55},
                    {score: 172, value: 0.50},
                    {score: 179, value: 0.45},
                    {score: 185, value: 0.40},
                    {score: 191, value: 0.35},
                    {score: 198, value: 0.30},
                    {score: 205, value: 0.25},
                    {score: 212, value: 0.20},
                    {score: 219, value: 0.15},
                    {score: 229, value: 0.10}],
                27: [{score: 42, value: 0.95},
                    {score: 76, value: 0.90},
                    {score: 97, value: 0.85},
                    {score: 112, value: 0.80},
                    {score: 124, value: 0.75},
                    {score: 134, value: 0.70},
                    {score: 143, value: 0.65},
                    {score: 151, value: 0.60},
                    {score: 158, value: 0.55},
                    {score: 165, value: 0.50},
                    {score: 172, value: 0.45},
                    {score: 179, value: 0.40},
                    {score: 185, value: 0.35},
                    {score: 191, value: 0.30},
                    {score: 198, value: 0.25},
                    {score: 205, value: 0.20},
                    {score: 213, value: 0.15},
                    {score: 222, value: 0.10},
                    {score: 235, value: 0.05}],
                30: [{score: 41, value: 0.95},
                    {score: 75, value: 0.90},
                    {score: 95, value: 0.85},
                    {score: 110, value: 0.80},
                    {score: 122, value: 0.75},
                    {score: 132, value: 0.70},
                    {score: 141, value: 0.65},
                    {score: 149, value: 0.60},
                    {score: 157, value: 0.55},
                    {score: 164, value: 0.50},
                    {score: 170, value: 0.45},
                    {score: 177, value: 0.40},
                    {score: 183, value: 0.35},
                    {score: 190, value: 0.30},
                    {score: 197, value: 0.25},
                    {score: 204, value: 0.20},
                    {score: 211, value: 0.15},
                    {score: 221, value: 0.10},
                    {score: 233, value: 0.05}],
                33: [{score: 39, value: 0.95},
                    {score: 73, value: 0.90},
                    {score: 94, value: 0.85},
                    {score: 109, value: 0.80},
                    {score: 121, value: 0.75},
                    {score: 131, value: 0.70},
                    {score: 140, value: 0.65},
                    {score: 148, value: 0.60},
                    {score: 156, value: 0.55},
                    {score: 163, value: 0.50},
                    {score: 169, value: 0.45},
                    {score: 176, value: 0.40},
                    {score: 182, value: 0.35},
                    {score: 189, value: 0.30},
                    {score: 195, value: 0.25},
                    {score: 202, value: 0.20},
                    {score: 210, value: 0.15},
                    {score: 219, value: 0.10},
                    {score: 232, value: 0.05}],
                36: [{score: 38, value: 0.95},
                    {score: 72, value: 0.90},
                    {score: 92, value: 0.85},
                    {score: 107, value: 0.80},
                    {score: 119, value: 0.75},
                    {score: 130, value: 0.70},
                    {score: 138, value: 0.65},
                    {score: 147, value: 0.60},
                    {score: 154, value: 0.55},
                    {score: 161, value: 0.50},
                    {score: 168, value: 0.45},
                    {score: 174, value: 0.40},
                    {score: 181, value: 0.35},
                    {score: 187, value: 0.30},
                    {score: 194, value: 0.25},
                    {score: 201, value: 0.20},
                    {score: 209, value: 0.15},
                    {score: 218, value: 0.10},
                    {score: 230, value: 0.05}],
                39: [{score: 34, value: 0.95},
                    {score: 68, value: 0.90},
                    {score: 89, value: 0.85},
                    {score: 104, value: 0.80},
                    {score: 116, value: 0.75},
                    {score: 126, value: 0.70},
                    {score: 135, value: 0.65},
                    {score: 143, value: 0.60},
                    {score: 150, value: 0.55},
                    {score: 157, value: 0.50},
                    {score: 164, value: 0.45},
                    {score: 170, value: 0.40},
                    {score: 177, value: 0.35},
                    {score: 183, value: 0.30},
                    {score: 190, value: 0.25},
                    {score: 197, value: 0.20},
                    {score: 205, value: 0.15},
                    {score: 214, value: 0.10},
                    {score: 226, value: 0.05}],
                42: [{score: 33, value: 0.95},
                    {score: 67, value: 0.90},
                    {score: 87, value: 0.85},
                    {score: 102, value: 0.80},
                    {score: 114, value: 0.75},
                    {score: 124, value: 0.70},
                    {score: 133, value: 0.65},
                    {score: 141, value: 0.60},
                    {score: 149, value: 0.55},
                    {score: 156, value: 0.50},
                    {score: 162, value: 0.45},
                    {score: 169, value: 0.40},
                    {score: 175, value: 0.35},
                    {score: 182, value: 0.30},
                    {score: 189, value: 0.25},
                    {score: 196, value: 0.20},
                    {score: 203, value: 0.15},
                    {score: 212, value: 0.10},
                    {score: 225, value: 0.05}],
                45: [{score: 31, value: 0.95},
                    {score: 65, value: 0.90},
                    {score: 85, value: 0.85},
                    {score: 100, value: 0.80},
                    {score: 112, value: 0.75},
                    {score: 123, value: 0.70},
                    {score: 131, value: 0.65},
                    {score: 140, value: 0.60},
                    {score: 147, value: 0.55},
                    {score: 154, value: 0.50},
                    {score: 161, value: 0.45},
                    {score: 167, value: 0.40},
                    {score: 174, value: 0.35},
                    {score: 180, value: 0.30},
                    {score: 187, value: 0.25},
                    {score: 194, value: 0.20},
                    {score: 202, value: 0.15},
                    {score: 211, value: 0.10},
                    {score: 223, value: 0.05}],
                48: [{score: 28, value: 0.95},
                    {score: 62, value: 0.90},
                    {score: 83, value: 0.85},
                    {score: 98, value: 0.80},
                    {score: 110, value: 0.75},
                    {score: 120, value: 0.70},
                    {score: 129, value: 0.65},
                    {score: 137, value: 0.60},
                    {score: 144, value: 0.55},
                    {score: 151, value: 0.50},
                    {score: 158, value: 0.45},
                    {score: 164, value: 0.40},
                    {score: 171, value: 0.35},
                    {score: 177, value: 0.30},
                    {score: 184, value: 0.25},
                    {score: 191, value: 0.20},
                    {score: 199, value: 0.15},
                    {score: 208, value: 0.10},
                    {score: 220, value: 0.05}],
                51: [{score: 28, value: 0.95},
                    {score: 62, value: 0.90},
                    {score: 83, value: 0.85},
                    {score: 98, value: 0.80},
                    {score: 110, value: 0.75},
                    {score: 120, value: 0.70},
                    {score: 129, value: 0.65},
                    {score: 137, value: 0.60},
                    {score: 144, value: 0.55},
                    {score: 151, value: 0.50},
                    {score: 158, value: 0.45},
                    {score: 164, value: 0.40},
                    {score: 171, value: 0.35},
                    {score: 177, value: 0.30},
                    {score: 184, value: 0.25},
                    {score: 191, value: 0.20},
                    {score: 199, value: 0.15},
                    {score: 208, value: 0.10},
                    {score: 220, value: 0.05}],
                54: [{score: 27, value: 0.95},
                    {score: 61, value: 0.90},
                    {score: 81, value: 0.85},
                    {score: 96, value: 0.80},
                    {score: 108, value: 0.75},
                    {score: 118, value: 0.70},
                    {score: 127, value: 0.65},
                    {score: 135, value: 0.60},
                    {score: 143, value: 0.55},
                    {score: 150, value: 0.50},
                    {score: 156, value: 0.45},
                    {score: 163, value: 0.40},
                    {score: 169, value: 0.35},
                    {score: 176, value: 0.30},
                    {score: 183, value: 0.25},
                    {score: 190, value: 0.20},
                    {score: 197, value: 0.15},
                    {score: 207, value: 0.10},
                    {score: 219, value: 0.05}],
                57: [{score: 26, value: 0.95},
                    {score: 60, value: 0.90},
                    {score: 80, value: 0.85},
                    {score: 95, value: 0.80},
                    {score: 107, value: 0.75},
                    {score: 118, value: 0.70},
                    {score: 126, value: 0.65},
                    {score: 135, value: 0.60},
                    {score: 142, value: 0.55},
                    {score: 149, value: 0.50},
                    {score: 156, value: 0.45},
                    {score: 162, value: 0.40},
                    {score: 169, value: 0.35},
                    {score: 175, value: 0.30},
                    {score: 182, value: 0.25},
                    {score: 189, value: 0.20},
                    {score: 197, value: 0.15},
                    {score: 206, value: 0.10},
                    {score: 218, value: 0.05}],
                60: [
                    {score: 25, value: 0.95},
                    {score: 59, value: 0.90},
                    {score: 79, value: 0.85},
                    {score: 94, value: 0.80},
                    {score: 106, value: 0.75},
                    {score: 116, value: 0.70},
                    {score: 125, value: 0.65},
                    {score: 133, value: 0.60},
                    {score: 141, value: 0.55},
                    {score: 148, value: 0.50},
                    {score: 154, value: 0.45},
                    {score: 161, value: 0.40},
                    {score: 167, value: 0.35},
                    {score: 174, value: 0.30},
                    {score: 181, value: 0.25},
                    {score: 188, value: 0.20},
                    {score: 195, value: 0.15},
                    {score: 205, value: 0.10},
                    {score: 217, value: 0.05}
                ]

            },

            cOSForm: {
                maximumTumorDiameter: '',
                distanceFromAnalVergePoints: '',
                ypTNMStage: 'ypCR',
                perineuralInvasion: 'No',
                surgicalProcedure: 'AR',
                preoperative_CA19_9: 'Normal',
                months: '3',
                totalScore: '',
                result: ''
            },
            cOSRules: {},
            cOSMaximumTumorDiameter: [0, 6, 12, 19, 25, 31, 38, 44, 50, 56, 62, 69, 75, 81, 88, 94, 100],
            cOSDistanceFromAnalVergePoints: [49, 45, 42, 38, 35, 31, 28, 24, 21, 17, 14, 10, 7, 3, 0],
            cOSYpTNMStage: {ypCR: 0, I: 12, II: 55, III: 71},
            cOSPerineuralInvasion: {No: 0, Yes: 31},
            cOSSurgicalProcedure: {AR: 0, APR: 2, Hartmann: 82},
            cOSPreoperative_CA19_9: {Normal: 0, Elevated: 26},
            cOSProbability: {
                6: [{score: 128, value: 0.99},
                    {score: 194, value: 0.95},
                    {score: 224, value: 0.9},
                    {score: 241, value: 0.85}],
                12: [{score: 82, value: 0.99},
                    {score: 148, value: 0.95},
                    {score: 178, value: 0.9},
                    {score: 195, value: 0.85},
                    {score: 208, value: 0.8},
                    {score: 219, value: 0.75},
                    {score: 227, value: 0.7},
                    {score: 235, value: 0.65},
                    {score: 242, value: 0.6},
                    {score: 249, value: 0.55}],
                15: [{score: 69, value: 99},
                    {score: 136, value: 0.95},
                    {score: 165, value: 0.9},
                    {score: 183, value: 0.85},
                    {score: 196, value: 0.8},
                    {score: 207, value: 0.75},
                    {score: 215, value: 0.7},
                    {score: 223, value: 0.65},
                    {score: 230, value: 0.6},
                    {score: 236, value: 0.55},
                    {score: 242, value: 0.5},
                    {score: 248, value: 0.45}],
                18: [{score: 54, value: 0.99},
                    {score: 120, value: 0.95},
                    {score: 150, value: 0.9},
                    {score: 167, value: 0.85},
                    {score: 180, value: 0.8},
                    {score: 191, value: 0.75},
                    {score: 200, value: 0.7},
                    {score: 207, value: 0.65},
                    {score: 214, value: 0.6},
                    {score: 221, value: 0.55},
                    {score: 227, value: 0.5},
                    {score: 232, value: 0.45},
                    {score: 238, value: 0.4},
                    {score: 244, value: 0.35},
                    {score: 249, value: 0.3}],
                21: [{score: 40, value: 0.99},
                    {score: 106, value: 0.95},
                    {score: 136, value: 0.9},
                    {score: 154, value: 0.85},
                    {score: 167, value: 0.8},
                    {score: 177, value: 0.75},
                    {score: 186, value: 0.7},
                    {score: 193, value: 0.65},
                    {score: 200, value: 0.6},
                    {score: 207, value: 0.55},
                    {score: 213, value: 0.5},
                    {score: 219, value: 0.45},
                    {score: 224, value: 0.4},
                    {score: 230, value: 0.35},
                    {score: 235, value: 0.3},
                    {score: 241, value: 0.25},
                    {score: 247, value: 0.2}],
                24: [{score: 30, value: 0.99},
                    {score: 96, value: 0.95},
                    {score: 126, value: 0.9},
                    {score: 144, value: 0.85},
                    {score: 157, value: 0.8},
                    {score: 167, value: 0.75},
                    {score: 176, value: 0.7},
                    {score: 183, value: 0.65},
                    {score: 190, value: 0.6},
                    {score: 197, value: 0.55},
                    {score: 203, value: 0.5},
                    {score: 209, value: 0.45},
                    {score: 214, value: 0.4},
                    {score: 220, value: 0.35},
                    {score: 226, value: 0.3},
                    {score: 231, value: 0.25},
                    {score: 237, value: 0.2},
                    {score: 244, value: 0.15},
                    {score: 252, value: 0.1}],
                27: [{score: 20, value: 0.99},
                    {score: 86, value: 0.95},
                    {score: 116, value: 0.9},
                    {score: 133, value: 0.85},
                    {score: 146, value: 0.8},
                    {score: 157, value: 0.75},
                    {score: 166, value: 0.7},
                    {score: 173, value: 0.65},
                    {score: 180, value: 0.6},
                    {score: 187, value: 0.55},
                    {score: 193, value: 0.5},
                    {score: 199, value: 0.45},
                    {score: 204, value: 0.4},
                    {score: 210, value: 0.35},
                    {score: 215, value: 0.3},
                    {score: 221, value: 0.25},
                    {score: 227, value: 0.2},
                    {score: 234, value: 0.15},
                    {score: 242, value: 0.1},
                    {score: 253, value: 0.05}],
                30: [{score: 12, value: 0.99},
                    {score: 78, value: 0.95},
                    {score: 108, value: 0.9},
                    {score: 126, value: 0.85},
                    {score: 139, value: 0.8},
                    {score: 149, value: 0.75},
                    {score: 158, value: 0.7},
                    {score: 166, value: 0.65},
                    {score: 172, value: 0.6},
                    {score: 179, value: 0.55},
                    {score: 185, value: 0.5},
                    {score: 191, value: 0.45},
                    {score: 196, value: 0.4},
                    {score: 202, value: 0.35},
                    {score: 208, value: 0.3},
                    {score: 213, value: 0.25},
                    {score: 219, value: 0.2},
                    {score: 226, value: 0.15},
                    {score: 234, value: 0.1},
                    {score: 245, value: 0.05}],
                33: [{score: 71, value: 0.95},
                    {score: 101, value: 0.9},
                    {score: 118, value: 0.85},
                    {score: 131, value: 0.8},
                    {score: 142, value: 0.75},
                    {score: 150, value: 0.7},
                    {score: 158, value: 0.65},
                    {score: 165, value: 0.6},
                    {score: 172, value: 0.55},
                    {score: 178, value: 0.5},
                    {score: 183, value: 0.45},
                    {score: 189, value: 0.4},
                    {score: 195, value: 0.35},
                    {score: 200, value: 0.3},
                    {score: 206, value: 0.25},
                    {score: 212, value: 0.2},
                    {score: 219, value: 0.15},
                    {score: 227, value: 0.1},
                    {score: 237, value: 0.05},],
                36: [{score: 68, value: 0.95},
                    {score: 98, value: 0.9},
                    {score: 116, value: 0.85},
                    {score: 129, value: 0.8},
                    {score: 139, value: 0.75},
                    {score: 148, value: 0.7},
                    {score: 155, value: 0.65},
                    {score: 162, value: 0.6},
                    {score: 169, value: 0.55},
                    {score: 175, value: 0.5},
                    {score: 181, value: 0.45},
                    {score: 186, value: 0.4},
                    {score: 192, value: 0.35},
                    {score: 197, value: 0.3},
                    {score: 203, value: 0.25},
                    {score: 209, value: 0.2},
                    {score: 216, value: 0.15},
                    {score: 224, value: 0.1},
                    {score: 235, value: 0.05},
                    {score: 252, value: 0.01}],
                39: [{score: 65, value: 0.95},
                    {score: 94, value: 0.9},
                    {score: 112, value: 0.85},
                    {score: 125, value: 0.8},
                    {score: 135, value: 0.75},
                    {score: 144, value: 0.7},
                    {score: 152, value: 0.65},
                    {score: 159, value: 0.6},
                    {score: 165, value: 0.55},
                    {score: 171, value: 0.5},
                    {score: 177, value: 0.45},
                    {score: 183, value: 0.4},
                    {score: 188, value: 0.35},
                    {score: 194, value: 0.3},
                    {score: 200, value: 0.25},
                    {score: 206, value: 0.2},
                    {score: 212, value: 0.15},
                    {score: 220, value: 0.1},
                    {score: 231, value: 0.05},
                    {score: 249, value: 0.01}],
                42: [{score: 63, value: 0.95},
                    {score: 92, value: 0.9},
                    {score: 110, value: 0.85},
                    {score: 123, value: 0.8},
                    {score: 133, value: 0.75},
                    {score: 142, value: 0.7},
                    {score: 150, value: 0.65},
                    {score: 157, value: 0.6},
                    {score: 163, value: 0.55},
                    {score: 169, value: 0.5},
                    {score: 175, value: 0.45},
                    {score: 181, value: 0.4},
                    {score: 186, value: 0.35},
                    {score: 192, value: 0.3},
                    {score: 198, value: 0.25},
                    {score: 204, value: 0.2},
                    {score: 210, value: 0.15},
                    {score: 218, value: 0.1},
                    {score: 229, value: 0.05},
                    {score: 247, value: 0.01}],
                45: [{score: 60, value: 0.95},
                    {score: 89, value: 0.9},
                    {score: 107, value: 0.85},
                    {score: 120, value: 0.8},
                    {score: 130, value: 0.75},
                    {score: 139, value: 0.7},
                    {score: 147, value: 0.65},
                    {score: 154, value: 0.6},
                    {score: 160, value: 0.55},
                    {score: 166, value: 0.5},
                    {score: 172, value: 0.45},
                    {score: 177, value: 0.4},
                    {score: 183, value: 0.35},
                    {score: 189, value: 0.3},
                    {score: 194, value: 0.25},
                    {score: 200, value: 0.2},
                    {score: 207, value: 0.15},
                    {score: 215, value: 0.1},
                    {score: 226, value: 0.05},
                    {score: 243, value: 0.01}],
                48: [{score: 55, value: 0.95},
                    {score: 85, value: 0.9},
                    {score: 102, value: 0.85},
                    {score: 115, value: 0.8},
                    {score: 126, value: 0.75},
                    {score: 135, value: 0.7},
                    {score: 142, value: 0.65},
                    {score: 149, value: 0.6},
                    {score: 156, value: 0.55},
                    {score: 162, value: 0.5},
                    {score: 168, value: 0.45},
                    {score: 173, value: 0.4},
                    {score: 179, value: 0.35},
                    {score: 184, value: 0.3},
                    {score: 190, value: 0.25},
                    {score: 193, value: 0.2},
                    {score: 203, value: 0.15},
                    {score: 211, value: 0.1},
                    {score: 222, value: 0.05},
                    {score: 239, value: 0.01}],
                51: [{score: 54, value: 0.95},
                    {score: 83, value: 0.9},
                    {score: 101, value: 0.85},
                    {score: 114, value: 0.8},
                    {score: 124, value: 0.75},
                    {score: 133, value: 0.7},
                    {score: 141, value: 0.65},
                    {score: 148, value: 0.6},
                    {score: 154, value: 0.55},
                    {score: 160, value: 0.5},
                    {score: 166, value: 0.45},
                    {score: 172, value: 0.4},
                    {score: 177, value: 0.35},
                    {score: 183, value: 0.3},
                    {score: 189, value: 0.25},
                    {score: 195, value: 0.2},
                    {score: 202, value: 0.15},
                    {score: 210, value: 0.1},
                    {score: 220, value: 0.05},
                    {score: 238, value: 0.01}],
                54: [{score: 51, value: 0.95},
                    {score: 81, value: 0.9},
                    {score: 99, value: 0.85},
                    {score: 112, value: 0.8},
                    {score: 122, value: 0.75},
                    {score: 131, value: 0.7},
                    {score: 138, value: 0.65},
                    {score: 145, value: 0.6},
                    {score: 152, value: 0.55},
                    {score: 158, value: 0.5},
                    {score: 164, value: 0.45},
                    {score: 169, value: 0.4},
                    {score: 175, value: 0.35},
                    {score: 180, value: 0.3},
                    {score: 186, value: 0.25},
                    {score: 192, value: 0.2},
                    {score: 199, value: 0.15},
                    {score: 207, value: 0.1},
                    {score: 218, value: 0.05},
                    {score: 235, value: 0.01}],
                57: [{score: 48, value: 0.95},
                    {score: 77, value: 0.9},
                    {score: 95, value: 0.85},
                    {score: 108, value: 0.8},
                    {score: 118, value: 0.75},
                    {score: 127, value: 0.7},
                    {score: 135, value: 0.65},
                    {score: 142, value: 0.6},
                    {score: 148, value: 0.55},
                    {score: 154, value: 0.5},
                    {score: 160, value: 0.45},
                    {score: 166, value: 0.4},
                    {score: 171, value: 0.35},
                    {score: 177, value: 0.3},
                    {score: 183, value: 0.25},
                    {score: 189, value: 0.2},
                    {score: 196, value: 0.15},
                    {score: 203, value: 0.1},
                    {score: 214, value: 0.05},
                    {score: 232, value: 0.01}],
                60: [{score: 46, value: 0.95},
                    {score: 76, value: 0.9},
                    {score: 93, value: 0.85},
                    {score: 106, value: 0.8},
                    {score: 117, value: 0.75},
                    {score: 125, value: 0.7},
                    {score: 133, value: 0.65},
                    {score: 140, value: 0.6},
                    {score: 147, value: 0.55},
                    {score: 153, value: 0.5},
                    {score: 158, value: 0.45},
                    {score: 164, value: 0.4},
                    {score: 170, value: 0.35},
                    {score: 175, value: 0.3},
                    {score: 181, value: 0.25},
                    {score: 187, value: 0.2},
                    {score: 194, value: 0.15},
                    {score: 202, value: 0.1},
                    {score: 212, value: 0.05},
                    {score: 230, value: 0.01}]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {

                    if (formName === 'cRFSForm') {
                        this.cRFSForm.result = this.maximumTumorDiameter[this.cRFSForm.maximumTumorDiameter] + this.distanceFromAnalVerge[this.cRFSForm.distanceFromAnalVerge];
                        if (this.ypTNMStage[this.cRFSForm.ypTNMStage]) {
                            this.cRFSForm.result += this.ypTNMStage[this.cRFSForm.ypTNMStage];
                        }
                        if (this.perineuralInvasion[this.cRFSForm.perineuralInvasion]) {
                            this.cRFSForm.result += this.perineuralInvasion[this.cRFSForm.perineuralInvasion];
                        }

                        this.cRFSForm.totalScore = this.cRFSForm.result;
                        const probabilityArr = this.probability[this.cRFSForm.months];
                        const getCommonResult = this._getCommonResult(parseInt(this.cRFSForm.totalScore), probabilityArr);
                        const get60Result = this._getCommonResult(this.cRFSForm.totalScore, this.probability[60]);
                        this.cRFSForm.result =
                            _.round(
                                _.multiply(
                                    100,
                                    _.divide(get60Result, getCommonResult)
                                )
                            );
                    }

                    if (formName === 'cOSForm') {
                        this.cOSForm.result = this.cOSMaximumTumorDiameter[this.cOSForm.maximumTumorDiameter] + this.cOSDistanceFromAnalVergePoints[this.cOSForm.distanceFromAnalVergePoints];
                        if (this.cOSYpTNMStage[this.cOSForm.ypTNMStage]) {
                            this.cOSForm.result += this.cOSYpTNMStage[this.cOSForm.ypTNMStage];
                        }
                        if (this.cOSPerineuralInvasion[this.cOSForm.perineuralInvasion]) {
                            this.cOSForm.result += this.cOSPerineuralInvasion[this.cOSForm.perineuralInvasion];
                        }

                        if (this.cOSSurgicalProcedure[this.cOSForm.surgicalProcedure]) {
                            this.cOSForm.result += this.cOSSurgicalProcedure[this.cOSForm.surgicalProcedure];
                        }

                        if (this.cOSPreoperative_CA19_9[this.cOSForm.preoperative_CA19_9]) {
                            this.cOSForm.result += this.cOSPreoperative_CA19_9[this.cOSForm.preoperative_CA19_9];
                        }

                        this.cOSForm.totalScore = this.cOSForm.result;
                        const probabilityArr = this.cOSProbability[this.cOSForm.months];
                        const cOSCommonResult = this._getCommonResult(parseInt(this.cOSForm.totalScore), probabilityArr);
                        const cOS60Result = this._getCommonResult(this.cOSForm.totalScore, this.cOSProbability[60]);
                        this.cOSForm.result =
                            _.round(
                                _.multiply(
                                    100,
                                    _.divide(cOS60Result, cOSCommonResult)
                                )
                            );
                    }

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        },

        _getCommonResult(totalScore, probabilityArr) {
            const {startIndex, endIndex} = this._getIndex(totalScore, probabilityArr);
            const probabilityStartElement = probabilityArr[startIndex];
            const probabilityEndElement = probabilityArr[endIndex];
            const valueSub = _.subtract(probabilityEndElement.value, probabilityStartElement.value);
            const scoreSub = _.subtract(probabilityEndElement.score, probabilityStartElement.score);
            const valueDivide = _.divide(valueSub, scoreSub);
            const totalScoreSub = _.subtract(probabilityEndElement.score, totalScore);
            let result = _.subtract(probabilityEndElement.value, _.multiply(valueDivide * totalScoreSub));
            if (result < 0) {
                result = 0;
            }
            if (result > 1) {
                result = 1;
            }
            return result;

        },

        _getIndex(totalScore, valArr) {
            let cloneDeep = _.cloneDeep(valArr);
            let newObj = {score: totalScore, value: 0};
            cloneDeep.push(newObj);
            cloneDeep = _.sortBy(cloneDeep, ['score']);
            let index = cloneDeep.indexOf(newObj);

            let startIndex = -1;
            let endIndex = -1;

            if (index === 0) {
                startIndex = 0;
                endIndex = 1;
            }
            if (index === cloneDeep.length - 1) {
                startIndex = cloneDeep.length - 3;
                endIndex = cloneDeep.length - 2;
            }
            if (index > 0 && index < cloneDeep.length - 1) {
                startIndex = index - 1;
                endIndex = index;
            }
            return {startIndex, endIndex};

            // for (let i = 0; i < valArr.length; i++) {
            //     const valArrElement = valArr[i];
            //     if (totalScore <= valArrElement.score) {
            //         startIndex = i;
            //     }
            //     if (totalScore >= valArrElement.score) {
            //         endIndex = i;
            //     }
            // }
            //
            // if (startIndex === endIndex) {
            //     if (startIndex === 0) {
            //         endIndex++;
            //     }
            //     if (endIndex === valArr.length - 1) {
            //         startIndex--;
            //     }
            // }
        }

    },
    // computed: {
    //     // 计算属性的 getter
    //     reversedMessage: function () {
    //         // `this` 指向 vm 实例
    //         return this.message.split('').reverse().join('')
    //     }
    // },
});

