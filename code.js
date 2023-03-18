

// console.log(scoreobj.blue);

setTimeout(function OpeningCeremony() {
    console.log("Let the games begin");

    var scoreobj = {
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    }

    setTimeout(function Race100M() {

        console.log("Inside Run100M function");

        let redtime = parseInt((Math.random() * (16 - 10)) + 10);
        console.log("Red took " + redtime+  " seconds");
        let bluetime = parseInt((Math.random() * (16 - 10)) + 10);
        console.log("blue took " + bluetime+  " seconds");
        let greentime = parseInt((Math.random() * (16 - 10)) + 10);
        console.log("Green took " + greentime+  " seconds");
        let yellowtime = parseInt((Math.random() * (16 - 10)) + 10);
        console.log("yellow took " + yellowtime+  " seconds");

        let colorarr = [redtime, bluetime, greentime, yellowtime];
        console.log(colorarr);

        let leasttime = Number.MAX_VALUE;
        let secondleast = Number.MAX_VALUE;
        for (let value of colorarr) {
            leasttime = Math.min(leasttime, value);
        }
        for (let value of colorarr) {
            if (value == leasttime) continue;

            secondleast = Math.min(secondleast, value);
        }
        if (redtime == leasttime) {
            scoreobj.red = 50;
        }
        if (redtime == secondleast) {
            scoreobj.red = 25;
        }
        if (bluetime == leasttime) {
            scoreobj.blue = 50;
        }
        if (bluetime == secondleast) {
            scoreobj.blue = 25;
        }
        if (greentime == leasttime) {
            scoreobj.green = 50;
        }
        if (greentime == secondleast) {
            scoreobj.green = 25;
        }
        if (yellowtime == leasttime) {
            scoreobj.yellow = 50;
        }
        if (yellowtime == secondleast) {
            scoreobj.yellow = 25;
        }
        console.log("THe Updated score after 100M Race is " , scoreobj);


        setTimeout(function LongJump() {
            console.log("Inside Long Jump function");
            let randompickerarr = ["red", "blue", "green", "yellow"];

            let picked = randompickerarr[parseInt(Math.random() * 4)];


            console.log(picked + " colour won Long Jump");

            scoreobj[picked] = scoreobj[picked] + 150;
            console.log("THe Updated score after Long Jump is " , scoreobj);

            setTimeout(function HighJump() {
                console.log("Inside high jump function");
                let person = prompt("What colour secured the highest jump:");
                if (person == "red" || person == "blue" || person == "green" || person == "yellow") {
                    scoreobj[person] = scoreobj[person] + 100;
                    console.log("THe Updated score after High Jump is " , scoreobj);
                } else {
                    console.log("Event was cancelled");
                }


                setTimeout(function AwardCeremony() {
                    let resultobjarr = [{ color: "red", score: scoreobj["red"] }, { color: "blue", score: scoreobj["blue"] }, { color: "green", score: scoreobj["green"] }, { color: "yellow", score: scoreobj["yellow"] }];

                    resultobjarr.sort(function (obj1, obj2) {
                        return obj2.score - obj1.score;
                    });

                    console.log( resultobjarr);

                    console.log(resultobjarr[0].color + " came first with " + resultobjarr[0].score + " score");
                    console.log(resultobjarr[1].color + " came second with " + resultobjarr[1].score + " score");
                    console.log(resultobjarr[2].color + " came third with " + resultobjarr[2].score + " score");
                    console.log(resultobjarr[3].color + " came fourth with " + resultobjarr[3].score + " score");
                    console.log();
                    console.log(resultobjarr[0].color + " Won the Sport!!");

                });

            }, 2000);


        });


    }, 3000);

}, 1000);



// console.log( parseInt((Math.random()*(4-1))+ 1));