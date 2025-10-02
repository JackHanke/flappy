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
