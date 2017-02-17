const NewIR = {
    "creditImpotEnfant": 1000/12,
    "bareme": [
        {
            "name": "0%",
            "min": 0,
            "max": 500,
            "tauxMarginal": 0.01,
            "tauxCSG": 0.5
        }, {
            "name": "5%",
            "min": 500,
            "max": 750,
            "tauxMarginal": 0.05,
            "tauxCSG": 0.5
        }, {
            "name": "10%",
            "min": 750,
            "max": 1000,
            "tauxMarginal": 0.1,
            "tauxCSG": 0.5
        }, {
            "name": "15%",
            "min": 1000,
            "max": 1250,
            "tauxMarginal": 0.15,
            "tauxCSG": 0.5
        }, {
            "name": "20%",
            "min": 1250,
            "max": 1500,
            "tauxMarginal": 0.2,
            "tauxCSG": 0.5
        }, {
            "name": "25%",
            "min": 1500,
            "max": 1750,
            "tauxMarginal": 0.25,
            "tauxCSG": 0.5
        }, {
            "name": "30%",
            "min": 1750,
            "max": 1800,
            "tauxMarginal": 0.3,
            "tauxCSG": 0.5
        }, {
            "name": "35%",
            "min": 1800,
            "max": 2000,
            "tauxMarginal": 0.35,
            "tauxCSG": 0.5
        }, {
            "name": "40%",
            "min": 2000,
            "max": 3000,
            "tauxMarginal": 0.4,
            "tauxCSG": 0.5
        }, {
            "name": "50%",
            "min": 3000,
            "max": 4000,
            "tauxMarginal": 0.5,
            "tauxCSG": 0.5
        }, {
            "name": "55%",
            "min": 4000,
            "max": 15000,
            "tauxMarginal": 0.55,
            "tauxCSG": 0.5
        }, {
            "name": "60%",
            "min": 15000,
            "max": 25000,
            "tauxMarginal": 0.60,
            "tauxCSG": 0.5
        }, {
            "name": "65%",
            "min": 25000,
            "max": 33000,
            "tauxMarginal": 0.65,
            "tauxCSG": 0.5
        }, {
            "name": "90%",
            "min": 33000,
            "max": Number.MAX_SAFE_INTEGER,
            "tauxMarginal": 0.9,
            "tauxCSG": 0.5
        }
    ]

}

export default NewIR;
