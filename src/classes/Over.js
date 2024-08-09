class Over {
    constructor() {
        this.validBalls = 0; // Number of valid balls (excluding wides and no-balls)
        this.balls = []; // Store all balls in this over
    }

    addBall(ball) {
        this.balls.push(ball);
        if (!['WD', 'NB'].includes(ball)) {
            this.validBalls += 1;
        }
    }

    isComplete() {
        return this.validBalls === 6;
    }

    reset() {
        this.validBalls = 0;
        this.balls = [];
    }
}

export default Over;
