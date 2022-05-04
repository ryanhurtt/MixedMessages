const returnSign = () => {
    const sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius', 'Pisces'];
    
    return sign[Math.floor(Math.random() * sign.length)];
}

const returnStatus = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const statusAdjArr = ['good', 'bad', 'awful', 'extraordinary']
    const statusNounArr = ['luck', 'vibes', 'prosperity', 'misfortune', 'adversity', 'hardship']

    const statusAdj = statusAdjArr[Math.floor(Math.random() * statusAdjArr.length)]
    const statusNoun = statusNounArr[Math.floor(Math.random() * statusNounArr.length)]
    
    return `${statusAdj} ${statusNoun}`;
}

const returnAdvice = () => {
    const advice = ['trust no one', 'eliminate a bad habit', 'reach out to a loved one', 'make a healthy change', 'rob a bank', 'hit the gym', 'call your bookie']

    return advice[Math.floor(Math.random() * advice.length)];
}

const horoscopeFactory = (sign, status, advice) => {
    return {
        sign: sign,
        status: status,
        advice: advice
    };
}

let horoscopes = [];

for (let i = 0; i < 4; i++) {
    horoscopes[i] = horoscopeFactory(returnSign(), returnStatus(), returnAdvice());
}

console.log(horoscopes);