const returnSign = (birthDate) => {
    const sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius', 'Pisces'];
    
}

const returnStatus = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const statusAdjArr = ['good', 'bad', 'awful', 'extraordinary']
    const statusNounArr = ['luck', 'vibes', 'prosperity', 'misfortune', 'adversity', 'hardship']

    const statusAdj = statusAdjArr[Math.floor(Math.random() * statusAdjArr.length)]
    const statusNoun = statusNounArr[Math.floor(Math.random() * statusNounArr.length)]
    
    return `You are experiencing ${statusAdj} ${statusNoun}.`;
}

const horoscopeFactory = (sign, arr2, arr3) => {

}

for (let i = 0; i < 4; i++) {
    console.log(returnStatus());
}