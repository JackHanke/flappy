# DeepRL plays Flappy Bird 

![](./assets/flappytitle.gif)

A simple policy optimization (SPO) network that learns to play Flappy Bird, using [TensorFlow.js](https://www.tensorflow.org/js) and a [PlayCanvas](https://playcanvas.com/) implementation of the original game. bongocat assets from [here](https://github.com/kuroni/bongocat-osu/tree/master). The tensorflow.js PPO implementation was modified from [this repo](https://github.com/zemlyansky/ppo-tfjs/tree/main).

## Progress

After `5280` games of training, the network saved at `models/actor-274.weights.bin` achieved a high score of `51` in a session of `100` games!

## Dev Notes

To play, run the following command in the `game` directory:

```bash
python3 -m http.server
```

and open `http://localhost:8000/rl.html` in your browser.

## Blurb

I created a policy optimization agent to play the #1 mobile game of 2014, Flappy Bird! The agent (AKA the cat) learns to adjust its behavior to get a higher score. I used a brand new technique in deep reinforcement learning called simple policy optimization to create the cat's brain.

This project was made in Javascript with Tensorflow.js. The source for training, along with the 12KB file of the cat's brain, can be found here: https://github.com/JackHanke/flappy