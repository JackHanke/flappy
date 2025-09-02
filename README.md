# DeepRL plays Flappy Bird 

![](./assets/flappytitle.gif)

A vanilla policy gradient network that learns to play Flappy Bird, using [TensorFlow.js](https://www.tensorflow.org/js) and a [PlayCanvas](https://playcanvas.com/) implementation of the original game. bongocat assets from [here](https://github.com/kuroni/bongocat-osu/tree/master).

## Dev Notes

To play, run the following command in the `game` directory:

`python3 -m http.server`

or

`npx http_server`

and open `http://localhost:8000/rl.html` in your browser.

## Blurb

I created a policy optimization agent to play the #1 mobile game of 2014, Flappy Bird! The agent (AKA the cat) learns to adjust its behavior to get a higher score. The colorful TV static in its thought bubble is its brain (colored by the weights of the network). Deep reinforcement learning is notoriously finicky and sample inefficient, especially in real-time settings. Therefore, the cat takes thousands of games to consistently get one point, but after it get's going it can play very well! The cat's high score was z. Can you beat the cat?

This project was made in Javascript with Tensorflow.js. The source for training, along with the 4KB file of the cat's brain, can be found here: https://github.com/JackHanke/flappy


