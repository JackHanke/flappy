
// .doAction

// append reward to individual trajectory array
    this.trajectory_rewards.push(this.reward - this.baseline);
    // append time step data to trajectory data
    this.statesBuffer.push(state_array);
    onehot_action = [0,0];
    onehot_action[sampledAction] = 1;
    this.actionsBuffer.push(onehot_action);









// .die

this.games += 1;
this.updateNumGames();
if (this.score > this.bestScore){this.bestScore = this.score;}

// add death state, action, reward to trajectory
state_array = this.getStateInfo();
this.statesBuffer.push(state_array);

onehot_action = [0,0];
onehot_action[0] = 1;
this.actionsBuffer.push(onehot_action);

reward = this.deathReward
this.trajectory_rewards.push(reward);


// reward-to-go processing
reward_weights = this.rewards_to_go(this.trajectory_rewards);

// console.log(`reward_weights: ${reward_weights} trajectory: ${this.trajectory_rewards}`)

// adds experience to replay buffer based on scale of return
if (reward_weights[0] === undefined){
console.log(`Undefined reward! traj: ${this.trajectory} reward_weights: ${reward_weights}`);
}
else{
// add trajectory to replay buffer proportionally to the size of the reward
// if (Math.random() < Math.abs(reward_weights[0])) {
if (true) {
    this.states = this.states.concat(this.statesBuffer);
    this.actions = this.actions.concat(this.actionsBuffer);
    for (let i=0; i<reward_weights.length; i++){
    // the following -1 is to gradient ascend instead of descend in tf's .fit method
    this.rewards.push([-1 * reward_weights[i]]);
    }
    this.num_new_datapoints += reward_weights.length;
    if ((this.games % this.inferenceEvery) === 0) {
    console.log(`*Game: ${this.games} | Buffer: ${this.rewards.length} | Return: ${reward_weights[0]}`);
    }
    else {
    console.log(`Game: ${this.games} | Buffer: ${this.rewards.length} | Return: ${reward_weights[0]}`);
    }
}
}

// flush buffers
this.statesBuffer = [];
this.actionsBuffer = [];

// roll buffer if over buffersize
if (this.rewards.length > this.replayBuffer) {
    var excess_experience = this.rewards.length - this.replayBuffer;
    this.rewards = this.rewards.slice(excess_experience);
    this.states = this.states.slice(excess_experience);
    this.actions = this.actions.slice(excess_experience);
}

// save and train every time this.num_new_datapoints
if (this.num_new_datapoints >= this.trainAndSaveEvery){
// this.checkpoint();

this.learn();

console.log(`### Trained for ${this.num_epochs} epochs ###`);

this.plotWeights();

this.num_new_datapoints = 0;
}
this.trajectory_rewards = [];
(this.reward = 0),