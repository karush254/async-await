class Clock {
    constructor(hour, minute, second) {
        this.hour = hour
        this.minute = minute
        this.second = second
    };
    delay (s) {
        return new Promise( (resolve) => {
            setTimeout( () => {
                resolve();
            },s * 1000)
        })
    };
    pluce () {
        if (this.second > 59) {
            this.minute += 1
            this.second -= 60
           if (this.minute > 59) {
                this.hour += 1
                this.minute -= 60}
             if (this.hour > 23) {
                    this.hour -= 24
                }};
        console.log(`${this.hour} : ${this.minute} : ${this.second}`);
    }
    async start() {
        while(true) {
            await this.delay(1);
            this.second ++;
            this.pluce()
        }
};
 async setAlarm (_hour,_minute,_second) {
    let timer1 = (this.hour * 60 * 60 * 1000) + (this.minute * 60 * 1000) + (this.second * 1000);
    let timer2 = (_hour * 60 * 60 * 1000) + (_minute * 60 * 1000) + (_second * 1000);
    let timer3;
    if (timer2 > timer1) {
        timer3 = timer2 - timer1;
    } else {
        timer3 = (24 * 60 * 60 * 1000) - (timer1 - timer2)
    };
    await this.delay(timer3 / 1000)
 };

};

let clock = new Clock(21,49,57);
clock.start();
clock.setAlarm(21,50,00).then(() => {
    console.log("Manchester United Liverpool xaxne");
});
clock.setAlarm(21,50,00).then(function () {
    console.log(`Ush e`);
});
clock.setAlarm(21,50,03).then(function () {
    console.log(tick);
});