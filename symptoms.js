// symptoms.js - Symptom Data with Expanded Remedies
db.symptoms.insertMany([
    {
        name: "Headache",
        description: "Pain in the head, often caused by tension, dehydration, or other medical conditions.",
        relatedDiseases: [ObjectId("5f8e4c5b9bfb3d8d25c6c772")],  // Migraine
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c773"), ObjectId("7f8e4c5b9bfb3d8d25c6c774"), ObjectId("8f8e4c5b9bfb3d8d25c6c779")]  // Painkiller, Hydration, Bed Rest
    },
    {
        name: "Cough",
        description: "A reflex action to clear the airways of mucus or irritants.",
        relatedDiseases: [ObjectId("5f8e4c5b9bfb3d8d25c6c775")],  // Common Cold
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c775"), ObjectId("8f8e4c5b9bfb3d8d25c6c780")]  // Cough Syrup, Drink Lots of Fluids
    },
    {
        name: "Fever",
        description: "An elevated body temperature, often a sign of an infection.",
        relatedDiseases: [ObjectId("5f8e4c5b9bfb3d8d25c6c776")],  // Influenza
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c776"), ObjectId("8f8e4c5b9bfb3d8d25c6c781")]  // Fever Reducer, Drink Lots of Fluids
    },
    {
        name: "Fatigue",
        description: "A feeling of extreme tiredness or lack of energy.",
        relatedDiseases: [ObjectId("5f8e4c5b9bfb3d8d25c6c777")],  // Chronic Fatigue Syndrome
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c777"), ObjectId("8f8e4c5b9bfb3d8d25c6c782")]  // Rest, Lifestyle Change
    },
    {
        name: "Shortness of Breath",
        description: "Difficulty in breathing, often associated with respiratory issues.",
        relatedDiseases: [ObjectId("5f8e4c5b9bfb3d8d25c6c778")],  // Asthma
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c778")]  // Inhaler
    }
]);
