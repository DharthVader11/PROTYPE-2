// diseases.js - Disease (Diagnosis) Data with Symptoms and Remedies
db.diseases.insertMany([
    {
        name: "Migraine",
        description: "A neurological condition that causes severe, recurring headaches.",
        symptoms: [ObjectId("5f8e4c5b9bfb3d8d25c6c770")],  // Headache
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c773"), ObjectId("7f8e4c5b9bfb3d8d25c6c774"), ObjectId("8f8e4c5b9bfb3d8d25c6c779")]  // Painkiller, Hydration, Bed Rest
    },
    {
        name: "Common Cold",
        description: "A viral infection that affects the upper respiratory tract.",
        symptoms: [ObjectId("5f8e4c5b9bfb3d8d25c6c771")],  // Cough
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c775"), ObjectId("8f8e4c5b9bfb3d8d25c6c780")]  // Cough Syrup, Drink Lots of Fluids
    },
    {
        name: "Influenza",
        description: "A contagious respiratory illness caused by influenza viruses.",
        symptoms: [ObjectId("5f8e4c5b9bfb3d8d25c6c772")],  // Fever
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c776"), ObjectId("8f8e4c5b9bfb3d8d25c6c781")]  // Fever Reducer, Drink Lots of Fluids
    },
    {
        name: "Chronic Fatigue Syndrome",
        description: "A condition characterized by persistent fatigue that doesn’t improve with rest.",
        symptoms: [ObjectId("5f8e4c5b9bfb3d8d25c6c773")],  // Fatigue
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c777"), ObjectId("8f8e4c5b9bfb3d8d25c6c782")]  // Rest, Lifestyle Change
    },
    {
        name: "Asthma",
        description: "A chronic disease that causes difficulty breathing due to inflammation and narrowing of the airways.",
        symptoms: [ObjectId("5f8e4c5b9bfb3d8d25c6c774")],  // Shortness of Breath
        remedies: [ObjectId("6f8e4c5b9bfb3d8d25c6c778")]  // Inhaler
    }
]);
