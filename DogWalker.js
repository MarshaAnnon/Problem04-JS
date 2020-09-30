class DogWalker {
    numberOfWalksCalculator(dogSizes){
        let totalHours = 0;
        let dogMap = {};
             
        dogSizes.forEach((item)  => {
            if(dogMap[item] === undefined) {
                dogMap[item] = 1
            }else {
                dogMap[item] = dogMap[item] + 1
            }
        });

        for(let dogs in dogMap) {
            totalHours += Math.ceil(dogMap[dogs]/2)
        }
        return totalHours
    }
}

module.exports = DogWalker;